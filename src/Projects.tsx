import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SectionTitle from './components/SectionTitle';
import { useInView } from './hooks/useInView';
import { ExternalLink, Users, Lightbulb, Target, Briefcase, Code } from 'lucide-react';

// Coaching Card Component with Intersection Observer
function CoachingCard({ coaching, headerColor, headerText, isDarkMode }: any) {
  const { ref, isInView } = useInView();
  
  return (
    <div
      ref={ref}
      className={`flex flex-col rounded-2xl border-2 overflow-hidden transition-all duration-300 hover:-translate-y-1 mobile-hover-lift ${isInView ? 'in-view' : ''} ${
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
          {coaching.description.map((item: string, i: number) => (
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
                  {coaching.target.company.map((item: string, i: number) => (
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
                  {coaching.target.product.map((item: string, i: number) => (
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
}

interface ProjectsProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export default function Projects({ isDarkMode, setIsDarkMode }: ProjectsProps) {

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
    title: '個人向けプロダクトコーチング',
    description: 'キャリア相談、プロダクトマネジメントの実務相談など',
    targetUsers: [
      {
        title: '大企業のDX・デジタルプロダクト担当者',
        description: '大企業の中でDXやデジタルプロダクトを担当されている方'
      },
      {
        title: 'デザイナー・エンジニアからのPM転向',
        description: 'デザイナーもしくはエンジニアからPMへの転向を考えている方'
      },
      {
        title: 'CPO・VPoPキャリア志向',
        description: 'CPOやVPoPなどのリーダーシップキャリアに興味をもっている方'
      }
    ],
    singleSession: [
      {
        type: 'Granty PM',
        description: 'プロダクトマネジメントのキャリアや実務について、1時間のオンラインMTGで相談',
        link: 'https://pm-notes.com/pm_37/',
        linkText: 'Granty PMで予約'
      },
      {
        type: 'マシュマロ',
        description: '匿名で気軽に質問・相談ができます',
        link: 'https://marshmallow-qa.com/uos17sgwv5gcfe4?t=TsB6aG&utm_medium=url_text&utm_source=promotion',
        linkText: 'マシュマロで質問'
      }
    ],
    continuous: {
      description: '継続的な相談をご希望の方は、SNS（X / Twitter）でDMやメンションにてお気軽にご連絡ください',
      link: 'https://twitter.com/yukagil',
      linkText: '@yukagil'
    }
  };

  const corporateCoaching = {
    title: '企業向けプロダクトコーチング',
    description: '',
    items: [
      {
        title: 'Muture',
        description: 'プロダクトリーダーへのアドバイザリー、外部顧問、プロダクトチーム伴走支援など',
        link: 'https://muture.jp/',
        linkText: 'muture.jp'
      },
      {
        title: 'Product People',
        description: 'アドバイザリー・外部顧問など、Product Peopleの提携コーチとして対応',
        link: 'https://productpeople.jp/',
        linkText: 'productpeople.jp'
      }
    ]
  };

  const personalProducts = [
    {
      title: 'Coming Soon...',
      description: 'AIを使ったなにかしらを実験中...',
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

        {/* Product Coaching Section */}
        <section className="mb-16">
          <div className="mb-8">
            <SectionTitle title="プロダクトコーチング" icon={<Briefcase size={24} />} isDarkMode={isDarkMode} />
          </div>
          
          {/* Corporate Coaching */}
          <div className="mb-12">
            <h3 className={`text-2xl font-black mb-2 flex items-center gap-3 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              <span className="text-3xl">🏢</span>
              {corporateCoaching.title}
            </h3>
            <p className={`text-sm mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {corporateCoaching.description}
            </p>
            
            {/* Coaching Types */}
            <div className="mb-6">
              <div className="grid md:grid-cols-3 gap-6">
              {coachingTypes.map((coaching, idx) => {
                const headerColors = ['bg-green-500', 'bg-purple-500', 'bg-red-500'];
                const darkHeaderColors = ['bg-green-900', 'bg-purple-900', 'bg-red-900'];
                const headerColor = isDarkMode ? darkHeaderColors[idx % 3] : headerColors[idx % 3];
                const headerText = 'text-white';

                return (
                  <CoachingCard
                    key={idx}
                    coaching={coaching}
                    headerColor={headerColor}
                    headerText={headerText}
                    isDarkMode={isDarkMode}
                  />
                );
              })}
              </div>
            </div>
            
            {/* Service Providers */}
            <div>
              <h4 className={`text-lg font-bold mb-4 flex items-center gap-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                <span className={`text-xl ${isDarkMode ? '' : ''}`}>💼</span>
                ご依頼窓口
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {corporateCoaching.items.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 hover:-translate-y-1 ${
                      isDarkMode ? 'bg-gray-800 border-gray-600 hover:border-gray-400' : 'bg-white border-black shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000]'
                    }`}
                  >
                    <p className={`text-lg font-black mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                      {item.title}
                    </p>
                    <p className={`text-sm mb-4 font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
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
          </div>

          {/* Individual Coaching */}
          <div className="mb-12">
            <h3 className={`text-2xl font-black mb-2 flex items-center gap-3 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
              <span className="text-3xl">👤</span>
              {individualCoaching.title}
            </h3>
            <p className={`text-sm mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {individualCoaching.description}
            </p>
            
            {/* Target Users */}
            <div className="mb-6">
              <h4 className={`text-lg font-bold mb-4 flex items-center gap-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                <span className="text-xl">👥</span>
                こういう方からの相談が多いです
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                {individualCoaching.targetUsers.map((target, idx) => {
                  const accentColors = [
                    { bg: 'bg-blue-500', darkBg: 'bg-blue-900', text: 'text-blue-600', darkText: 'text-blue-400' },
                    { bg: 'bg-purple-500', darkBg: 'bg-purple-900', text: 'text-purple-600', darkText: 'text-purple-400' },
                    { bg: 'bg-orange-500', darkBg: 'bg-orange-900', text: 'text-orange-600', darkText: 'text-orange-400' }
                  ];
                  const accent = accentColors[idx % 3];
                  
                  return (
                    <div
                      key={idx}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 hover:-translate-y-1 ${
                        isDarkMode ? 'bg-gray-800 border-gray-600 hover:border-gray-400' : 'bg-white border-black shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000]'
                      }`}
                    >
                      <div className={`inline-block px-3 py-1 rounded-full mb-3 text-xs font-black ${
                        isDarkMode ? `${accent.darkBg} ${accent.darkText}` : `${accent.bg} text-white`
                      }`}>
                        0{idx + 1}
                      </div>
                      <p className={`font-bold mb-2 text-sm ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                        {target.title}
                      </p>
                      <p className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {target.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Single Session */}
            <div className="mb-6">
              <h4 className={`text-lg font-bold mb-4 flex items-center gap-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                <span className="text-xl">💬</span>
                単発相談
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {individualCoaching.singleSession.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 hover:-translate-y-1 ${
                      isDarkMode ? 'bg-gray-800 border-gray-600 hover:border-gray-400' : 'bg-white border-black shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000]'
                    }`}
                  >
                    <p className={`font-bold mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                      {item.type}
                    </p>
                    <p className={`text-sm mb-3 font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
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

            {/* Continuous */}
            <div>
              <h4 className={`text-lg font-bold mb-4 flex items-center gap-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                <span className="text-xl">🤝</span>
                継続的な相談
              </h4>
              <div className={`p-6 rounded-xl border-2 transition-all duration-300 hover:-translate-y-1 ${
                isDarkMode ? 'bg-gray-800 border-gray-600 hover:border-gray-400' : 'bg-white border-black shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000]'
              }`}>
                <p className={`text-sm mb-4 font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {individualCoaching.continuous.description}
                </p>
                <a
                  href={individualCoaching.continuous.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1 text-sm font-bold ${
                    isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                  }`}
                >
                  {individualCoaching.continuous.linkText}
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>


            

        {/* Personal Products Section */}
        <section>
          <div className="mb-8">
            <SectionTitle title="個人プロダクト" icon={<Code size={24} />} isDarkMode={isDarkMode} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProducts.map((product, idx) => (
              <div
                key={idx}
                className={`relative p-6 rounded-2xl border-2 border-dashed transition-all duration-300 hover:-translate-y-1 hover:rotate-1 ${
                  isDarkMode ? 'bg-gray-800 border-gray-600 hover:border-gray-400' : 'bg-white border-black shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000]'
                }`}
              >
                {/* Decorative element */}
                <div className={`absolute -top-3 -right-3 w-12 h-12 rounded-full border-2 flex items-center justify-center text-2xl ${
                  isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-yellow-400 border-black'
                }`}>
                  🚀
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border-2 ${
                    isDarkMode 
                      ? 'bg-yellow-500/20 border-yellow-500/30 text-yellow-400' 
                      : 'bg-yellow-100 border-yellow-600 text-yellow-700'
                  }`}>
                    {product.status}
                  </span>
                  <span className={`text-xs font-mono ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                    ···
                  </span>
                </div>
                
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                  {product.title}
                </h3>
                <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                  {product.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

