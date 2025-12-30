import { useState, useEffect } from 'react';
import { 
  Briefcase, 
  ExternalLink, 
  Linkedin, 
  Twitter, 
  BookOpen, 
  Code, 
  Users, 
  Zap,
  Moon,
  Sun,
  Menu,
  X,
  MapPin,
  Loader,
  Mic2,
  MessageSquare,
  FileText,
  Video,
  Link as LinkIcon,
  RefreshCw,
  Lightbulb,
  Globe,
  Tent,
  Facebook
} from 'lucide-react';

// ビルド時に生成された静的データをインポート
import staticWritings from './data/writings.json';
import staticSpeakings from './data/speakings.json';
import staticInterviews from './data/interviews.json';

// 最終更新日 (ビルド時に自動生成)
const LAST_UPDATED = new Date().toLocaleDateString('ja-JP', { 
  year: 'numeric', 
  month: '2-digit', 
  day: '2-digit' 
}).replace(/\//g, '.');

// --- Types & Interfaces ---

interface Role {
  title: string;
  period: string;
  description?: string;
}

interface CompanyExperience {
  id: string;
  company: string;
  companyDescription?: string;
  website?: string;
  totalPeriod: string;
  roles: Role[];
  description: string;
  isCurrent: boolean;
  branchType?: 'main' | 'feature';
}

// リンク情報の型定義
interface RelatedLink {
  label: string;
  url: string;
  type: 'slide' | 'video' | 'article' | 'event';
}

// 登壇実績データ（拡張）
interface Speaking {
  id: string;
  date: string;
  event: string;
  title: string;
  mainLink: string; // メインのリンク
  relatedLinks: RelatedLink[]; // 関連リンク
  imageUrl?: string; // サムネイル画像
}

interface Interview {
  id: string;
  date: string;
  media: string;
  title: string;
  link: string;
  imageUrl?: string; // サムネイル画像
}

interface PortfolioData {
  profile: {
    name: string;
    role: string;
    subRole: string;
    description: string;
    location: string;
    hobbies: string;
    imageUrl: string;
  };
  socials: {
    twitter: string;
    linkedin: string;
    facebook: string;
  };
  experiences: CompanyExperience[];
  philosophies: Array<{
    id: string;
    title: string;
    content: string;
    iconType: 'users' | 'zap' | 'code' | 'briefcase' | 'lightbulb' | 'globe';
  }>;
  writings: Array<{
    id: string;
    title: string;
    source: string;
    date: string;
    link: string;
    imageUrl?: string;
  }>;
  speakings: Speaking[];
  interviews: Interview[];
}


const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);

  // System preference detection
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
    // 初期データのロード
    fetchNotionData();
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // --- Data Fetching Logic (Initial Mock) ---
  const fetchNotionData = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 800));

      const mockData: PortfolioData = {
        profile: {
          name: "Yuta Kanehara",
          role: "Product Manager",
          subRole: "Engineering × UX × Org Design",
          description: "エンジニアリングのバックグラウンド、UX戦略から推進までの実行力、そして組織デザインによるプロダクトマネジメント。\nこの3つの強みを掛け合わせ、toC/toB/Dev/SaaS/プラットフォーム/0→1など、あらゆるフェーズのプロダクトグロースを牽引します。",
          location: "Tokyo, Japan",
          hobbies: "Camping Lover",
          imageUrl: "https://storage.googleapis.com/studio-cms-assets/projects/Z9qp7nJGOP/s-1120x1120_v-fs_webp_2a3f9622-e54d-4f8b-8670-510ba156906d_small.webp"
        },
        socials: {
          twitter: "https://twitter.com/yukagil",
          linkedin: "https://www.linkedin.com/in/yuta-kanehara/",
          facebook: "https://www.facebook.com/yuta.kanehara"
        },
        experiences: [
          {
            id: "muture",
            company: "Muture",
            companyDescription: "丸井グループとGoodpatchの合弁会社。プロダクト開発と組織変革を両立し、持続可能な変革を支援するDXパートナー。",
            website: "https://muture.jp/",
            totalPeriod: "2023.02 - Current",
            roles: [
              {
                title: "執行役員／Chief Product Officer",
                period: "2024.07 - Current",
                description: "プロダクト戦略の統括および組織づくりをリード。"
              },
              {
                title: "Product Manager",
                period: "2023.02 - 2024.06",
                description: "「良い組織が、良いプロダクトを生み出す」という信念のもと、DX支援・プロダクト開発に従事。"
              }
            ],
            description: "",
            isCurrent: true,
            branchType: 'main'
          },
          {
            id: "marui",
            company: "marui unite",
            companyDescription: "丸井グループのデジタルプロダクト開発を行うテックカンパニー。「好き」とデジタルの力で新しい体験を共創する。",
            website: "https://marui-unite.co.jp/",
            totalPeriod: "2024.10 - Current",
            roles: [
              {
                title: "Chief Product Officer",
                period: "2024.10 - Current",
                description: "丸井グループの新規事業創出、共創のエコシステムづくりをリード。"
              }
            ],
            description: "",
            isCurrent: true,
            branchType: 'feature'
          },
          {
            id: "showcase",
            company: "Showcase Gig",
            companyDescription: "モバイルオーダープラットフォーム「O:der」を提供するベンチャー企業。デジタル化による次世代店舗体験を創出。",
            website: "https://www.showcase-gig.com/",
            totalPeriod: "2020.02 - 2023.02",
            roles: [
              {
                title: "VP of Product",
                period: "2022.03 - 2023.02",
                description: "中期経営計画として5ヵ年ロードマップを策定。SMB中心からエンタープライズへの転換を推進する中「SaaS冬の時代」が到来。グロース重視から利益重視の戦略に再転換を行う。"
              },
              {
                title: "Product Manager",
                period: "2020.02 - 2022.03",
                description: "1人目PdMとして入社。PoC中のイートインプロダクトを担当するもコロナ禍に突入したためテイクアウトやデリバリーを含むオールインワン戦略へ転換。システムリアーキやリブランディングまでの一連においてプロダクトチームをリード。"
              }
            ],
            description: "",
            isCurrent: false
          },
          {
            id: "dena",
            company: "DeNA",
            companyDescription: "ゲーム、ライブストリーミング、スポーツ、ヘルスケアなど、インターネットとAIを駆使して多角的に事業を展開するIT企業。",
            website: "https://dena.com/",
            totalPeriod: "2016.04 - 2020.02",
            roles: [
              {
                title: "Software Engineer / Project Manager",
                period: "2018.11 - 2020.02",
                description: "アライアンス案件におけるグローバルプラットフォームの開発に従事。開発者向けのID基盤やアカウントサービスなどを担当。"
              },
              {
                title: "Software Engineer",
                period: "2016.04 - 2018.11",
                description: "iOS/Android向けの電子書籍サービス、インディーズ作品のプラットフォーム開発に従事。"
              }
            ],
            description: "",
            isCurrent: false
          }
        ],
        philosophies: [
          {
            id: "p1",
            title: "Good Organization, Good Product",
            content: "プロダクトは組織の写し鏡です。心理的安全性の高いチーム、自律的な意思決定ができる組織構造があってこそ、ユーザーに価値を届け続けるプロダクトが生まれます。",
            iconType: 'users'
          },
          {
            id: "p3",
            title: "Collective Mastery, Collective Impact",
            content: "プロダクト・デザイン・エンジニアリングなど多様な専門性が協働し、お互いを高め合うことを大切にしています。個人ではなくチームとして、大きな価値を生み出します。",
            iconType: 'lightbulb'
          },
          {
            id: "p4",
            title: "Mutual Value, Mutual Growth",
            content: "ユーザにも社会にも誠実であることを大切にしています。目の前の課題解決だけでなく、過去の文脈や意味を深く理解し、未来につながる持続可能なものづくりを実践します。",
            iconType: 'globe'
          }
        ],
        // ビルド時に生成された静的データを使用
        writings: staticWritings,
        speakings: staticSpeakings as Speaking[],
        interviews: staticInterviews as Interview[]
      };
      
      setData(mockData);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    } finally {
      setLoading(false);
    }
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Experience', href: '#experience' },
    { name: 'Interviews', href: '#interviews' },
    { name: 'Speaking', href: '#speaking' },
    { name: 'Writings', href: '#writings' },
  ];

  const getPhilosophyIcon = (type: string) => {
    switch (type) {
      case 'users': return <Users className="text-blue-500" />;
      case 'zap': return <Zap className="text-yellow-500" />;
      case 'code': return <Code className="text-green-500" />;
      case 'briefcase': return <Briefcase className="text-purple-500" />;
      case 'lightbulb': return <Lightbulb className="text-yellow-500" />;
      case 'globe': return <Globe className="text-green-500" />;
      default: return <Users className="text-blue-500" />;
    }
  };

  if (loading || !data) {
    return (
      <div className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${isDarkMode ? 'bg-[#202020]' : 'bg-[#F0F0F0]'} bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:20px_20px] dark:bg-[size:40px_40px]`}>
        <Loader className={`animate-spin ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`} size={32} />
      </div>
    );
  }


  const mutureExp = data.experiences.find(e => e.id === 'muture');
  const maruiExp = data.experiences.find(e => e.id === 'marui');
  const otherExps = data.experiences.filter(e => e.id !== 'muture' && e.id !== 'marui');

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-[#202020] text-gray-200' : 'bg-[#F0F0F0] text-gray-800'} font-sans relative`}>
      {/* Background Pattern */}
      <div className={`absolute inset-0 pointer-events-none z-0 ${
        isDarkMode 
          ? 'bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] opacity-30' 
          : 'bg-[radial-gradient(#d4d4d8_2px,transparent_2px)] bg-[size:24px_24px] opacity-60'
      }`}></div>

      <nav className={`fixed w-full z-50 border-b-4 transition-all duration-300 ${
        isDarkMode 
          ? 'bg-[#2a2a2a]/95 border-gray-700 shadow-[0_4px_0_0_rgba(0,0,0,0.5)]' 
          : 'bg-white/95 border-black shadow-[0_4px_0_0_rgba(0,0,0,0.1)]'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 font-extrabold text-2xl tracking-tighter flex items-center gap-2">
              <span className={`w-8 h-8 flex items-center justify-center rounded-lg border-2 ${isDarkMode ? 'bg-blue-600 border-blue-400' : 'bg-blue-500 border-black text-white'}`}>
                <Tent size={18} />
              </span>
              <span>
                Yuta<span className="text-red-500">.</span>Kanehara
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 rounded-lg text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${
                      isDarkMode 
                        ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                        : 'text-gray-600 hover:text-black hover:bg-gray-100 hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.1)]'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-lg border-2 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:shadow-none ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-600 text-yellow-400 shadow-[2px_2px_0_0_#4b5563]' 
                      : 'bg-yellow-400 border-black text-black shadow-[2px_2px_0_0_#000]'
                  }`}
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              </div>
            </div>

            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-lg border-2 transition-all duration-200 active:translate-y-0.5 active:shadow-none ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-600 text-yellow-400 shadow-[2px_2px_0_0_#4b5563]' 
                    : 'bg-yellow-400 border-black text-black shadow-[2px_2px_0_0_#000]'
                }`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={toggleMenu}
                className={`p-2 rounded-lg border-2 transition-all duration-200 active:translate-y-0.5 active:shadow-none ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-600 text-gray-200 shadow-[2px_2px_0_0_#4b5563]' 
                    : 'bg-white border-black text-black shadow-[2px_2px_0_0_#000]'
                }`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t-2 ${isDarkMode ? 'bg-[#2a2a2a] border-gray-700' : 'bg-white border-black'}`}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2 rounded-lg text-base font-bold ${
                    isDarkMode 
                      ? 'text-gray-300 hover:bg-gray-700' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
        {/* Hero Section */}
        <section id="about" className="mb-16 animate-fade-in-up">
          <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-12">
            <div className="flex-1">
              <div className={`inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest rounded-full border-2 ${
                isDarkMode 
                  ? 'border-blue-400 text-blue-400 bg-blue-900/20' 
                  : 'border-black text-black bg-yellow-400'
              }`}>
                PRODUCT MANAGER
              </div>
              <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6 leading-none">
                {data.profile.role} <br />
                <span className={`${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>{data.profile.subRole}</span>
              </h1>
              <div className={`p-6 rounded-2xl border-2 mb-8 relative ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-600 shadow-[6px_6px_0_0_#4b5563]' 
                  : 'bg-white border-black shadow-[6px_6px_0_0_#000]'
              }`}>
                {/* Decorative Screw heads */}
                <div className={`absolute top-2 left-2 w-2 h-2 rounded-full ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
                <div className={`absolute top-2 right-2 w-2 h-2 rounded-full ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
                <div className={`absolute bottom-2 left-2 w-2 h-2 rounded-full ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
                <div className={`absolute bottom-2 right-2 w-2 h-2 rounded-full ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
                
                <p className={`text-lg font-medium leading-relaxed whitespace-pre-wrap ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {data.profile.description}
                </p>

                {/* Added Tags for Skills/Domains */}
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t-2 border-dashed border-gray-200 dark:border-gray-700">
                   {['Engineering', 'UX Strategy', 'Org Design'].map(tag => (
                      <span key={tag} className={`px-3 py-1 text-xs font-black rounded-full border-2 ${isDarkMode ? 'bg-blue-900/30 border-blue-500 text-blue-300' : 'bg-blue-100 border-blue-600 text-blue-800'}`}>
                        {tag}
                      </span>
                   ))}
                   {['toC/toB', 'SaaS', 'Platform', '0→1'].map(tag => (
                      <span key={tag} className={`px-3 py-1 text-xs font-black rounded-full border-2 ${isDarkMode ? 'bg-purple-900/30 border-purple-500 text-purple-300' : 'bg-purple-100 border-purple-600 text-purple-800'}`}>
                        {tag}
                      </span>
                   ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-8">
                {data.socials.twitter && <SocialLink href={data.socials.twitter} icon={<Twitter size={20} />} label="Twitter" isDarkMode={isDarkMode} color="bg-blue-400" />}
                {data.socials.linkedin && <SocialLink href={data.socials.linkedin} icon={<Linkedin size={20} />} label="LinkedIn" isDarkMode={isDarkMode} color="bg-blue-600" />}
                {data.socials.facebook && <SocialLink href={data.socials.facebook} icon={<Facebook size={20} />} label="Facebook" isDarkMode={isDarkMode} color="bg-blue-500" />}
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center text-sm font-bold font-mono">
                  <MapPin size={18} className={`mr-2 ${isDarkMode ? 'text-red-400' : 'text-red-500'}`} />
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{data.profile.location}</span>
                  <span className="mx-3 text-gray-400">|</span>
                  <span role="img" aria-label="camping">🏕️ {data.profile.hobbies}</span>
                </div>
                <div className="flex items-center text-sm font-bold font-mono">
                  <RefreshCw size={18} className={`mr-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Last updated: {LAST_UPDATED}</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className={`w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 relative z-10 ${
                isDarkMode 
                  ? 'border-gray-600 shadow-[0_0_20px_rgba(59,130,246,0.5)]' 
                  : 'border-black shadow-[8px_8px_0_0_#000]'
              }`}>
                <img 
                  src={data.profile.imageUrl} 
                  alt={data.profile.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements behind photo */}
              <div className={`absolute -top-4 -right-4 w-12 h-12 rounded-full border-2 z-20 flex items-center justify-center animate-bounce ${
                isDarkMode ? 'bg-gray-800 border-blue-400 text-blue-400' : 'bg-yellow-400 border-black text-black'
              }`}>
                <Zap size={20} />
              </div>
              <div className={`absolute -bottom-2 -left-2 px-3 py-1 rounded-full border-2 z-20 font-bold text-xs ${
                isDarkMode ? 'bg-gray-800 border-green-400 text-green-400' : 'bg-red-500 border-black text-white'
              }`}>
                @yukagil
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section id="philosophy" className="mb-16">
          <div className="mb-8">
            <SectionTitle title="Philosophy" icon={<Zap size={24} />} isDarkMode={isDarkMode} />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {data.philosophies.map((phil, idx) => (
              <PhilosophyCard 
                key={phil.id}
                icon={getPhilosophyIcon(phil.iconType)}
                title={phil.title}
                content={phil.content}
                isDarkMode={isDarkMode}
                index={idx}
              />
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-16">
          <div className="mb-6">
            <SectionTitle title="Experience" icon={<Briefcase size={24} />} isDarkMode={isDarkMode} />
          </div>
          
          <div className="relative ml-2 sm:ml-4">
            {/* Timeline Line */}
            <div className={`absolute left-[19px] top-4 bottom-0 w-1 ${
              isDarkMode ? 'bg-blue-600' : 'bg-blue-500'
            }`}></div>

            <div className="relative space-y-16">
              
              {/* Special Layout for Muture & Marui Unite */}
              <div className="relative">
                
                {/* Marui Unite (Top/Future Branch) */}
                {maruiExp && (
                  <div className="relative ml-16 mb-12">
                    {/* SVG Connector */}
                    <div className="absolute -left-[43px] top-9 w-16 h-20 pointer-events-none">
                       <svg className="w-full h-full overflow-visible">
                         <path 
                           d="M 0 80 C 0 40, 64 40, 64 0" 
                           fill="none" 
                           stroke={isDarkMode ? "#2563eb" : "#3b82f6"} // Blue
                           strokeWidth="4"
                         />
                       </svg>
                    </div>

                    <ExperienceItem 
                      experience={maruiExp} 
                      isDarkMode={isDarkMode} 
                    />
                  </div>
                )}

                {/* Muture (Main/Base) */}
                {mutureExp && (
                  <div className="relative">
                    <ExperienceItem 
                      experience={mutureExp} 
                      isDarkMode={isDarkMode} 
                    />
                  </div>
                )}

              </div>

              {/* Other Experiences */}
              {otherExps.map((exp) => (
                <ExperienceItem 
                  key={exp.id}
                  experience={exp}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Selected Interviews Section */}
        <section id="interviews" className="mb-16">
          <div className="mb-6">
            <SectionTitle title="Selected Interviews" icon={<MessageSquare size={24} />} isDarkMode={isDarkMode} />
          </div>
          <div className="grid gap-3">
            {data.interviews.map((interview) => (
              <InterviewItem 
                key={interview.id}
                interview={interview}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>
        </section>

        {/* Public Speaking Section */}
        <section id="speaking" className="mb-16">
          <div className="mb-6">
            <SectionTitle title="Public Speaking" icon={<Mic2 size={24} />} isDarkMode={isDarkMode} />
          </div>
          <div className="grid gap-3">
            {data.speakings.map((speak) => (
              <SpeakingItem 
                key={speak.id}
                speak={speak}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>
        </section>

        {/* Recent Writings Section */}
        <section id="writings" className="mb-16">
          <div className="mb-6">
            <SectionTitle title="Recent Writings" icon={<BookOpen size={24} />} isDarkMode={isDarkMode} />
          </div>
          
          <div className="space-y-6">
            <div className="grid gap-3">
              {data.writings.map((writing) => (
                <WritingItem 
                  key={writing.id}
                  title={writing.title}
                  source={writing.source}
                  date={writing.date}
                  link={writing.link}
                  imageUrl={writing.imageUrl}
                  isDarkMode={isDarkMode}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Footer Contact */}
        <section className={`rounded-3xl p-12 text-center border-2 relative overflow-hidden ${
          isDarkMode 
            ? 'bg-gray-800 border-gray-600' 
            : 'bg-white border-black'
        }`}>
          {/* Background decoration */}
          <div className={`absolute top-0 left-0 w-full h-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} border-b-2 ${isDarkMode ? 'border-gray-600' : 'border-black'}`}></div>
          <div className={`absolute bottom-0 left-0 w-full h-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} border-t-2 ${isDarkMode ? 'border-gray-600' : 'border-black'}`}></div>

          <h2 className="text-3xl font-black mb-6">Let's Connect!</h2>
          <p className={`mb-8 text-lg font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            プロダクトマネジメント、組織づくり、あるいはキャンプの話まで。<br />
            お気軽にSNSでご連絡ください。
          </p>
          <div className="flex justify-center">
            <a 
              href={data.socials.twitter}
              className={`px-8 py-4 rounded-xl font-bold flex items-center border-2 transition-all active:translate-y-1 active:shadow-none ${
                isDarkMode
                  ? 'bg-blue-600 border-blue-400 text-white shadow-[4px_4px_0_0_#60a5fa]'
                  : 'bg-blue-500 border-black text-white shadow-[4px_4px_0_0_#000]'
              }`}
            >
              <Twitter size={24} className="mr-3" />
              Contact via Twitter
            </a>
          </div>
        </section>

        <footer className={`mt-20 pt-8 border-t-2 text-center text-sm font-bold font-mono ${
          isDarkMode ? 'border-gray-700 text-gray-500' : 'border-gray-200 text-gray-400'
        }`}>
          <p>© {new Date().getFullYear()} {data.profile.name}. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

// --- Sub-components (Updated with Pop Design) ---

const SectionTitle = ({ title, icon, isDarkMode }: { title: string, icon?: React.ReactNode, isDarkMode: boolean }) => (
  <h2 className={`text-3xl font-black mb-0 flex items-center gap-3 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
    <span className={`p-2 rounded-lg border-2 ${
      isDarkMode ? 'bg-gray-800 border-gray-600 text-blue-400' : 'bg-yellow-400 border-black text-black'
    }`}>
      {icon}
    </span>
    {title}
  </h2>
);

const SocialLink = ({ href, icon, label, isDarkMode, color }: any) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`p-3 rounded-xl border-2 transition-all duration-200 hover:-translate-y-1 active:translate-y-0 active:shadow-none ${
      isDarkMode 
        ? 'bg-gray-800 border-gray-600 text-gray-300 hover:text-white hover:border-white' 
        : `${color || 'bg-white'} border-black text-black shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000]`
    }`}
    aria-label={label}
  >
    {icon}
  </a>
);

const ExperienceItem = ({ experience, isDarkMode }: any) => {
  const { company, companyDescription, website, totalPeriod, roles, description } = experience;
  
  // 常に濃い青を使用
  const accentColor = isDarkMode ? 'bg-blue-600' : 'bg-blue-500';
  const accentBorder = isDarkMode ? 'border-blue-600' : 'border-blue-500';

  return (
    <div className={`relative pl-12 group`}>
      {/* Timeline Dot (Custom) */}
      <div className={`absolute left-[1px] top-6 w-10 h-10 rounded-full border-4 z-10 flex items-center justify-center transition-transform group-hover:scale-110 ${
        isDarkMode 
          ? `bg-[#191919] ${accentBorder}` 
          : `bg-white border-black`
      }`}>
        <div className={`w-3 h-3 rounded-full ${accentColor}`}></div>
      </div>
      
      <div className={`p-6 rounded-2xl border-2 transition-all duration-300 group-hover:-translate-y-1 ${
        isDarkMode 
          ? 'bg-gray-800 border-gray-600 group-hover:border-gray-400' 
          : 'bg-white border-black shadow-[4px_4px_0_0_#000] group-hover:shadow-[6px_6px_0_0_#000]'
      }`}>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          {website ? (
            <a 
              href={website} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`text-2xl font-black transition-colors hover:text-blue-500 flex items-center gap-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}
            >
              {company}
              <ExternalLink size={20} className="opacity-60" />
            </a>
          ) : (
            <h3 className={`text-2xl font-black ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              {company}
            </h3>
          )}
          <span className={`text-xs font-bold font-mono px-2 py-1 rounded border-2 ${
            isDarkMode 
              ? 'bg-gray-700 border-gray-500 text-gray-300 shadow-[2px_2px_0_0_rgba(107,114,128,0.5)]' 
              : 'bg-gray-100 border-gray-900 text-gray-700 shadow-[2px_2px_0_0_#000]'
          }`}>
            {totalPeriod}
          </span>
        </div>
        {companyDescription && (
             <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
               {companyDescription}
             </p>
        )}
        
        <div className="space-y-6 mt-4 mb-4">
          {roles.map((role: any, idx: number) => (
            <div key={idx} className="pl-4 border-l-4 border-gray-200 dark:border-gray-700">
               <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                  <h4 className={`text-lg font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {role.title}
                  </h4>
                  <span className={`text-xs font-mono font-medium opacity-70 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {role.period}
                  </span>
               </div>
               {role.description && (
                 <p className={`text-sm font-medium leading-relaxed mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                   {role.description}
                 </p>
               )}
            </div>
          ))}
        </div>

        {description && roles.length === 1 && roles[0].description !== description && (
           <p className={`mb-4 font-medium leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {description}
           </p>
        )}
      </div>
    </div>
  );
};

const PhilosophyCard = ({ icon, title, content, isDarkMode, index }: any) => {
  const colors = ['bg-red-500', 'bg-blue-500', 'bg-yellow-400', 'bg-green-500'];
  const darkColors = ['bg-red-900', 'bg-blue-900', 'bg-yellow-900', 'bg-green-900'];
  const headerColor = isDarkMode ? darkColors[index % 4] : colors[index % 4];
  const headerText = isDarkMode ? 'text-white' : (index % 4 === 2 ? 'text-black' : 'text-white'); // Yellow背景のみ黒文字

  return (
    <div className={`h-full flex flex-col rounded-2xl border-2 overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
      isDarkMode 
        ? 'bg-gray-800 border-gray-600 hover:border-gray-400' 
        : 'bg-white border-black shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000]'
    }`}>
      <div className={`p-4 border-b-2 ${isDarkMode ? 'border-gray-600' : 'border-black'} ${headerColor} ${headerText} flex items-center gap-3`}>
        <div className={`p-1.5 rounded bg-white/20 backdrop-blur-sm`}>{icon}</div>
        <h3 className="text-lg font-black tracking-tight">{title}</h3>
      </div>
      <div className="p-6 flex-1">
        <p className={`text-sm font-medium leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{content}</p>
      </div>
    </div>
  );
};

const SpeakingItem = ({ speak, isDarkMode }: { speak: Speaking, isDarkMode: boolean }) => (
  <div className={`group relative p-1 rounded-xl transition-all duration-200 hover:-translate-y-0.5 ${
      isDarkMode 
        ? 'hover:bg-gray-800' 
        : 'hover:bg-white'
    }`}>
    <div className={`absolute inset-0 rounded-xl border-2 pointer-events-none transition-colors ${
      isDarkMode 
        ? 'border-gray-700 group-hover:border-blue-500' 
        : 'border-transparent group-hover:border-black group-hover:shadow-[2px_2px_0_0_#000]'
    }`}></div>
    
    <div className="relative p-2 flex gap-3">
      {/* Left column: Date + Thumbnail */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 flex-shrink-0 max-w-[120px] sm:max-w-none">
        {/* Date */}
        <div className={`flex-shrink-0 w-full sm:w-28 flex items-center justify-start sm:justify-center`}>
          <span className={`text-xs font-bold font-mono px-2 py-1 rounded border ${
            isDarkMode ? 'bg-gray-800 border-gray-600 text-gray-400' : 'bg-gray-100 border-gray-300 text-gray-600'
          }`}>
            {speak.date}
          </span>
        </div>

        {/* Thumbnail */}
        {speak.imageUrl ? (
          <div className={`block flex-shrink-0 w-full sm:w-28 aspect-video rounded overflow-hidden ${isDarkMode ? 'ring-2 ring-gray-600' : 'ring-2 ring-black'}`}>
            <img src={speak.imageUrl} alt={speak.title} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div
            className={`flex flex-shrink-0 w-full sm:w-28 aspect-video rounded overflow-hidden relative items-center justify-center ${
              isDarkMode
                ? 'ring-2 ring-gray-600 bg-gradient-to-br from-gray-700 to-gray-800'
                : 'ring-2 ring-black bg-gradient-to-br from-gray-100 to-gray-200'
            }`}
            aria-hidden="true"
          >
            <div
              className={`absolute inset-0 ${
                isDarkMode
                  ? 'opacity-40 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] bg-[size:10px_10px]'
                  : 'opacity-40 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.08)_1px,transparent_0)] bg-[size:10px_10px]'
              }`}
            />
            <Mic2 size={14} className={isDarkMode ? 'text-gray-300' : 'text-gray-700'} />
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col justify-center py-0.5">
        {/* Event Name */}
        <div className={`text-xs font-bold leading-tight ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
          {speak.event}
        </div>
        
        {/* Title */}
        <div className="mb-1">
          <a href={speak.mainLink} target="_blank" rel="noopener noreferrer" className={`text-sm font-bold leading-tight group-hover:text-blue-500 transition-colors ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
            {speak.title}
          </a>
        </div>
        
        {/* Chips */}
        <div className="flex flex-wrap items-center gap-2">
          {speak.relatedLinks && speak.relatedLinks.map((link, idx) => {
            let Icon = LinkIcon;
            if (link.type === 'slide') Icon = FileText;
            if (link.type === 'video') Icon = Video;
            
            return (
              <a 
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.label}
                className={`flex items-center text-[10px] font-bold px-1.5 py-0.5 rounded border-2 transition-all hover:-translate-y-0.5 ${
                  isDarkMode 
                    ? 'border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 bg-gray-800' 
                    : 'border-black text-gray-700 hover:bg-yellow-100 bg-white'
                }`}
              >
                <Icon size={10} className="mr-1" />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  </div>
);

const InterviewItem = ({ interview, isDarkMode }: { interview: Interview, isDarkMode: boolean }) => (
  <a 
    href={interview.link}
    target="_blank"
    rel="noopener noreferrer"
    className={`group block p-3 rounded-xl border-2 border-transparent transition-all duration-200 hover:-translate-y-0.5 ${
      isDarkMode 
        ? 'hover:bg-gray-800 hover:border-gray-600' 
        : 'hover:bg-white hover:border-black hover:shadow-[2px_2px_0_0_#000]'
    }`}
  >
    <div className="flex gap-3">
      {/* Left column: Date + Thumbnail */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 flex-shrink-0 max-w-[120px] sm:max-w-none">
        {/* Date */}
        <div className={`flex-shrink-0 w-full sm:w-28 flex items-center justify-start sm:justify-center`}>
          <span className={`text-xs font-bold font-mono px-2 py-1 rounded border ${
            isDarkMode ? 'bg-gray-800 border-gray-600 text-gray-400' : 'bg-gray-100 border-gray-300 text-gray-600'
          }`}>
            {interview.date}
          </span>
        </div>

        {/* Thumbnail */}
        {interview.imageUrl ? (
          <div className={`block flex-shrink-0 w-full sm:w-28 aspect-video rounded overflow-hidden ${isDarkMode ? 'ring-2 ring-gray-600' : 'ring-2 ring-black'}`}>
            <img src={interview.imageUrl} alt={interview.title} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div
            className={`flex flex-shrink-0 w-full sm:w-28 aspect-video rounded overflow-hidden relative items-center justify-center ${
              isDarkMode
                ? 'ring-2 ring-gray-600 bg-gradient-to-br from-gray-700 to-gray-800'
                : 'ring-2 ring-black bg-gradient-to-br from-gray-100 to-gray-200'
            }`}
            aria-hidden="true"
          >
            <div
              className={`absolute inset-0 ${
                isDarkMode
                  ? 'opacity-40 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] bg-[size:10px_10px]'
                  : 'opacity-40 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.08)_1px,transparent_0)] bg-[size:10px_10px]'
              }`}
            />
            <MessageSquare size={14} className={isDarkMode ? 'text-gray-300' : 'text-gray-700'} />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col justify-center py-0.5">
        <div className={`text-xs font-bold leading-tight mb-0.5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
          {interview.media}
        </div>
        <h3 className={`text-sm font-bold leading-tight group-hover:text-blue-500 transition-colors ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
          {interview.title}
        </h3>
      </div>
      
      <ExternalLink size={16} className={`flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ${isDarkMode ? 'text-gray-500' : 'text-black'}`} />
    </div>
  </a>
);

const WritingItem = ({ title, source, date, link, imageUrl, isDarkMode }: any) => (
  <a 
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className={`group block p-3 rounded-xl border-2 border-transparent transition-all duration-200 hover:-translate-y-0.5 ${
      isDarkMode 
        ? 'hover:bg-gray-800 hover:border-gray-600' 
        : 'hover:bg-white hover:border-black hover:shadow-[2px_2px_0_0_#000]'
    }`}
  >
    <div className="flex gap-3">
      {/* Left column: Date + Thumbnail */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 flex-shrink-0 max-w-[120px] sm:max-w-none">
        {/* Date */}
        <div className={`flex-shrink-0 w-full sm:w-28 flex items-center justify-start sm:justify-center`}>
          <span className={`text-xs font-bold font-mono px-2 py-1 rounded border ${
            isDarkMode ? 'bg-gray-800 border-gray-600 text-gray-400' : 'bg-gray-100 border-gray-300 text-gray-600'
          }`}>
            {date}
          </span>
        </div>

        {/* Thumbnail */}
        {imageUrl ? (
          <div className={`block flex-shrink-0 w-full sm:w-28 aspect-video rounded overflow-hidden ${isDarkMode ? 'ring-2 ring-gray-600' : 'ring-2 ring-black'}`}>
            <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div
            className={`flex flex-shrink-0 w-full sm:w-28 aspect-video rounded overflow-hidden relative items-center justify-center ${
              isDarkMode
                ? 'ring-2 ring-gray-600 bg-gradient-to-br from-gray-700 to-gray-800'
                : 'ring-2 ring-black bg-gradient-to-br from-gray-100 to-gray-200'
            }`}
            aria-hidden="true"
          >
            <div
              className={`absolute inset-0 ${
                isDarkMode
                  ? 'opacity-40 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] bg-[size:10px_10px]'
                  : 'opacity-40 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.08)_1px,transparent_0)] bg-[size:10px_10px]'
              }`}
            />
            <BookOpen size={14} className={isDarkMode ? 'text-gray-300' : 'text-gray-700'} />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 flex flex-col justify-center py-0.5">
        <div className={`text-xs font-bold leading-tight mb-0.5 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
          {source}
        </div>
        <h3 className={`text-sm font-bold leading-tight group-hover:text-blue-500 transition-colors line-clamp-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
          {title}
        </h3>
      </div>

      {/* Arrow Icon */}
      <ExternalLink size={16} className={`flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity ${isDarkMode ? 'text-gray-500' : 'text-black'}`} />
    </div>
  </a>
);

export default Portfolio;