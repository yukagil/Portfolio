import { useState, useEffect } from 'react';
import Header from './components/Header';
import SectionTitle from './components/SectionTitle';
import { ExternalLink, Users, Lightbulb, Target, Briefcase, Code } from 'lucide-react';

export default function Projects() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const coachingTypes = [
    {
      icon: <Users size={32} />,
      color: 'green',
      title: '会社・組織変革',
      subtitle: 'Transformation Coaching',
      description: [
        'プロジェクトベースの文化からプロダクトベースの文化への移行',
        'プロダクト組織の立ち上げ支援',
        '企業や事業のフェーズの変化に応じたビジネス〜開発プロセスの変革'
      ],
      target: {
        company: ['スタートアップ', 'メガベンチャー', '大企業'],
        product: []
      }
    },
    {
      icon: <Lightbulb size={32} />,
      color: 'purple',
      title: 'プロダクト責任者向け',
      subtitle: 'Product Leadership Coaching',
      description: [
        'プロダクトビジョン/戦略/ロードマップ策定支援',
        'プロダクト組織のデザイン/チームのトレーニング',
        'プロダクトリーダーシップトレーニング'
      ],
      target: {
        company: [],
        product: ['Fintech', 'Retail', 'Mobility', 'Healthcare']
      }
    },
    {
      icon: <Target size={32} />,
      color: 'red',
      title: 'プロダクトチーム向け',
      subtitle: 'Discovery / Delivery Coaching',
      description: [
        'プロダクトディスカバリー/デリバリーの各種トレーニング',
        'チームの自律性と成長の支援',
        'ステークホルダーとの効果的な連携'
      ],
      target: {
        company: [],
        product: []
      }
    }
  ];

  const individualCoaching = {
    title: '個人向けコーチング',
    items: [
      {
        type: '単発相談',
        description: 'プロダクトマネジメントのキャリアや実務の相談',
        link: 'https://pm-notes.com/pm_37/',
        linkText: 'Granty PM'
      },
      {
        type: '継続的な相談',
        description: 'X（Twitter）でのDMやメンションでご連絡ください',
        link: 'https://twitter.com/yukagil',
        linkText: '@yukagil'
      }
    ]
  };

  const corporateCoaching = {
    title: '企業向けサービス',
    description: 'プロダクトリーダーへのアドバイザリー、外部顧問、プロダクトチーム伴走支援など',
    items: [
      {
        title: 'Muture',
        description: '企業向けプロダクトコーチング・アドバイザリー',
        link: 'https://muture.jp/',
        linkText: 'muture.jp'
      },
      {
        title: 'Product People経由',
        description: 'アドバイザリー・外部顧問など',
        link: 'https://productpeople.jp/',
        linkText: 'productpeople.jp'
      }
    ]
  };

  const personalProducts = [
    {
      title: 'Coming Soon...',
      description: '個人プロダクト開発を進行中です',
      status: '開発中',
      isPlaceholder: true
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-[#202020] text-gray-200' : 'bg-[#F0F0F0] text-gray-800'} font-sans relative`}>
      {/* Background Pattern */}
      <div className={`absolute inset-0 pointer-events-none z-0 ${
        isDarkMode 
          ? 'bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] opacity-30' 
          : 'bg-[radial-gradient(#d4d4d8_2px,transparent_2px)] bg-[size:24px_24px] opacity-60'
      }`}></div>

      <Header isDarkMode={isDarkMode} onToggleTheme={() => setIsDarkMode(!isDarkMode)} currentPage="projects" />

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
        {/* Page Title */}
        <div className="mb-12">
          <h1 className={`text-4xl font-black mb-4 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            Projects
          </h1>
        </div>

        {/* Product Coaching Section */}
        <section className="mb-16">
          <div className="mb-8">
            <SectionTitle title="プロダクトコーチング" icon={<Briefcase size={24} />} isDarkMode={isDarkMode} />
          </div>
          
          {/* Coaching Types */}
          <div className="mb-12">
            <div className="grid md:grid-cols-3 gap-6">
              {coachingTypes.map((coaching, idx) => {
                const headerColors = ['bg-green-500', 'bg-purple-500', 'bg-red-500'];
                const darkHeaderColors = ['bg-green-900', 'bg-purple-900', 'bg-red-900'];
                const headerColor = isDarkMode ? darkHeaderColors[idx % 3] : headerColors[idx % 3];
                const headerText = 'text-white';
                
                return (
                  <div
                    key={idx}
                    className={`flex flex-col rounded-2xl border-2 overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                      isDarkMode 
                        ? 'bg-gray-800 border-gray-600 hover:border-gray-400' 
                        : 'bg-white border-black shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000]'
                    }`}
                  >
                    <div className={`p-4 border-b-2 ${isDarkMode ? 'border-gray-600' : 'border-black'} ${headerColor} ${headerText} flex items-center gap-3`}>
                      <div className="p-1.5 rounded bg-white/20 backdrop-blur-sm">{coaching.icon}</div>
                      <div>
                        <h4 className="text-base font-black tracking-tight">{coaching.title}</h4>
                        <p className="text-xs font-bold opacity-90">{coaching.subtitle}</p>
                      </div>
                    </div>
                    <div className="p-6 flex-1">
                    <ul className={`space-y-2 text-sm font-medium leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {coaching.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {(coaching.target.company.length > 0 || coaching.target.product.length > 0) && (
                      <div className={`mt-4 pt-4 border-t-2 ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                        {coaching.target.company.length > 0 && (
                          <div className="mb-2">
                            <p className={`text-xs font-bold mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              企業・組織のサイズ
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {coaching.target.company.map((item, i) => (
                                <span
                                  key={i}
                                  className={`text-xs px-2 py-1 rounded border ${
                                    isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-white border-black text-gray-700'
                                  }`}
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {coaching.target.product.length > 0 && (
                          <div>
                            <p className={`text-xs font-bold mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              プロダクトの特性
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {coaching.target.product.map((item, i) => (
                                <span
                                  key={i}
                                  className={`text-xs px-2 py-1 rounded border ${
                                    isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-white border-black text-gray-700'
                                  }`}
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Individual Coaching */}
          <div className="mb-8">
            <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
              {individualCoaching.title}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {individualCoaching.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 hover:-translate-y-1 ${
                    isDarkMode ? 'bg-gray-800 border-gray-600 hover:border-gray-400' : 'bg-white border-black shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000]'
                  }`}
                >
                  <p className={`font-bold mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    {item.type}
                  </p>
                  <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.description}
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 text-sm font-bold ${
                      isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                    }`}
                  >
                    {item.linkText}
                    <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Corporate Coaching */}
          <div>
            <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
              {corporateCoaching.title}
            </h3>
            <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {corporateCoaching.description}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {corporateCoaching.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 hover:-translate-y-1 ${
                    isDarkMode ? 'bg-gray-800 border-gray-600 hover:border-gray-400' : 'bg-white border-black shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000]'
                  }`}
                >
                  <p className={`font-bold mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    {item.title}
                  </p>
                  <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.description}
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1 text-sm font-bold ${
                      isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                    }`}
                  >
                    {item.linkText}
                    <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Personal Products Section */}
        <section>
          <div className="mb-8">
            <SectionTitle title="個人プロダクト開発" icon={<Code size={24} />} isDarkMode={isDarkMode} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProducts.map((product, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border-2 border-dashed transition-all duration-300 hover:-translate-y-1 ${
                  isDarkMode ? 'bg-gray-800 border-gray-600 hover:border-gray-400' : 'bg-white border-black shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000]'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-bold px-2 py-1 rounded ${
                    isDarkMode ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {product.status}
                  </span>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                  {product.title}
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`mt-20 border-t-4 border-black py-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4 text-center">
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2024 Yuta Kanehara. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

