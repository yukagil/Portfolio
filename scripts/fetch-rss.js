// ビルド時に外部データを取得して静的JSONとして保存するスクリプト
import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = resolve(__dirname, '../src/data');

// 設定
const NOTE_RSS_URL = 'https://note.com/yukagil/rss';
const MICROCMS_API_URL = 'https://yukagil.microcms.io/api/v1/articles';

// 環境変数からAPIキーを取得
function getApiKey() {
  // 環境変数から取得
  if (process.env.MICROCMS_API_KEY) {
    return process.env.MICROCMS_API_KEY;
  }
  
  // .envファイルから読み込み（dotenvなしで簡易実装）
  try {
    const envPath = resolve(__dirname, '../.env');
    if (existsSync(envPath)) {
      const envContent = readFileSync(envPath, 'utf-8');
      const match = envContent.match(/MICROCMS_API_KEY=(.+)/);
      if (match) {
        return match[1].trim();
      }
    }
  } catch (e) {
    // ignore
  }
  
  return null;
}

// 出力ディレクトリを確保
function ensureOutputDir() {
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true });
  }
}

// JSONファイルとして保存
function saveJson(filename, data) {
  const outputPath = resolve(OUTPUT_DIR, filename);
  writeFileSync(outputPath, JSON.stringify(data, null, 2));
  return outputPath;
}

// --- RSS (note.com) ---
async function fetchRSS() {
  console.log('📡 Fetching RSS data from note.com...');
  
  try {
    const response = await fetch(NOTE_RSS_URL);
    
    if (!response.ok) {
      throw new Error(`RSS fetch failed: ${response.status}`);
    }
    
    const xmlText = await response.text();
    const writings = parseRSS(xmlText);
    
    const outputPath = saveJson('writings.json', writings);
    console.log(`✅ Successfully saved ${writings.length} articles to ${outputPath}`);
    
  } catch (error) {
    console.error('❌ Failed to fetch RSS:', error.message);
    saveJson('writings.json', []);
    console.log('⚠️ Saved empty writings array as fallback');
  }
}

function parseRSS(xmlText) {
  const writings = [];
  
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  const titleRegex = /<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>|<title>([\s\S]*?)<\/title>/;
  const linkRegex = /<link>([\s\S]*?)<\/link>/;
  const pubDateRegex = /<pubDate>([\s\S]*?)<\/pubDate>/;
  const mediaRegex = /<media:thumbnail[^>]*url=["']([^"']+)["']/;
  
  let match;
  let index = 0;
  
  while ((match = itemRegex.exec(xmlText)) !== null && index < 5) {
    const itemContent = match[1];
    
    const titleMatch = itemContent.match(titleRegex);
    const title = titleMatch ? (titleMatch[1] || titleMatch[2] || '').trim() : '';
    
    const linkMatch = itemContent.match(linkRegex);
    const link = linkMatch ? linkMatch[1].trim() : '';
    
    const pubDateMatch = itemContent.match(pubDateRegex);
    let formattedDate = '';
    if (pubDateMatch) {
      const dateObj = new Date(pubDateMatch[1]);
      formattedDate = `${dateObj.getFullYear()}.${(dateObj.getMonth() + 1).toString().padStart(2, '0')}.${dateObj.getDate().toString().padStart(2, '0')}`;
    }
    
    const mediaMatch = itemContent.match(mediaRegex);
    const imageUrl = mediaMatch ? mediaMatch[1] : '';
    
    if (title && link) {
      writings.push({
        id: `rss-${index}`,
        title,
        source: 'note',
        date: formattedDate,
        link,
        imageUrl
      });
      index++;
    }
  }
  
  writings.sort((a, b) => (a.date < b.date ? 1 : -1));
  return writings;
}

// --- microCMS (Speaking & Interviews) ---
async function fetchMicroCMS() {
  const apiKey = getApiKey();
  
  if (!apiKey) {
    console.error('❌ MICROCMS_API_KEY not found. Please set it in .env file or environment variable.');
    saveJson('speakings.json', []);
    saveJson('interviews.json', []);
    return;
  }
  
  console.log('📡 Fetching data from microCMS...');
  
  try {
    const response = await fetch(MICROCMS_API_URL, {
      headers: {
        'X-MICROCMS-API-KEY': apiKey
      }
    });
    
    if (!response.ok) {
      throw new Error(`microCMS fetch failed: ${response.status}`);
    }
    
    const json = await response.json();
    
    if (!json.contents) {
      throw new Error('No contents in response');
    }
    
    // --- 登壇 (Speaking) ---
    const speakings = json.contents
      .filter(content => {
        if (Array.isArray(content.type)) {
          return content.type.some(t => t === '登壇' || t?.name === '登壇');
        }
        return content.type === '登壇' || content.type?.name === '登壇';
      })
      .map(content => {
        const dateStr = content.date || content.publishedAt;
        const dateObj = new Date(dateStr);
        const formattedDate = `${dateObj.getFullYear()}.${(dateObj.getMonth() + 1).toString().padStart(2, '0')}.${dateObj.getDate().toString().padStart(2, '0')}`;
        
        const imageUrl = content.eyecatch?.url || content.thumbnail?.url || content.image?.url || '';
        
        const relatedLinks = [];
        if (content.slideurl || content.slide_url) {
          relatedLinks.push({ label: 'Slides', url: content.slideurl || content.slide_url, type: 'slide' });
        }
        if (content.linkurl || content.report_url) {
          relatedLinks.push({ label: 'Report', url: content.linkurl || content.report_url, type: 'article' });
        }
        if (content.video_url) {
          relatedLinks.push({ label: 'Video', url: content.video_url, type: 'video' });
        }
        if (content.related_links && Array.isArray(content.related_links)) {
          content.related_links.forEach(link => {
            relatedLinks.push({ label: link.label || 'Link', url: link.url, type: 'article' });
          });
        }
        
        return {
          id: content.id,
          date: formattedDate,
          event: content.where || content.event_name || content.publisher || 'Event',
          title: content.title,
          mainLink: content.linkurl || content.url || content.link || '#',
          relatedLinks,
          imageUrl
        };
      })
      .sort((a, b) => (a.date < b.date ? 1 : -1));
    
    // --- インタビュー (Interviews) ---
    const interviews = json.contents
      .filter(content => {
        if (Array.isArray(content.type)) {
          return content.type.some(t => t === 'インタビュー' || t?.name === 'インタビュー');
        }
        return content.type === 'インタビュー' || content.type?.name === 'インタビュー';
      })
      .map(content => {
        const dateStr = content.date || content.publishedAt;
        const dateObj = new Date(dateStr);
        const formattedDate = `${dateObj.getFullYear()}.${(dateObj.getMonth() + 1).toString().padStart(2, '0')}.${dateObj.getDate().toString().padStart(2, '0')}`;
        
        const imageUrl = content.eyecatch?.url || content.thumbnail?.url || content.image?.url || '';
        
        return {
          id: content.id,
          date: formattedDate,
          media: content.where || content.media || content.publisher || 'Media',
          title: content.title,
          link: content.linkurl || content.url || content.link || '#',
          imageUrl
        };
      })
      .sort((a, b) => (a.date < b.date ? 1 : -1));
    
    const speakingsPath = saveJson('speakings.json', speakings);
    const interviewsPath = saveJson('interviews.json', interviews);
    
    console.log(`✅ Successfully saved ${speakings.length} speakings to ${speakingsPath}`);
    console.log(`✅ Successfully saved ${interviews.length} interviews to ${interviewsPath}`);
    
  } catch (error) {
    console.error('❌ Failed to fetch microCMS:', error.message);
    saveJson('speakings.json', []);
    saveJson('interviews.json', []);
    console.log('⚠️ Saved empty arrays as fallback');
  }
}

// --- メイン処理 ---
async function main() {
  console.log('🚀 Starting data fetch...\n');
  
  ensureOutputDir();
  
  await Promise.all([
    fetchRSS(),
    fetchMicroCMS()
  ]);
  
  console.log('\n✨ Data fetch complete!');
}

main();

