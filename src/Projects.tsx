import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Menu, X, Tent, ArrowLeft, ExternalLink, Users, Lightbulb, Target } from 'lucide-react';

export default function Projects() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const partnerCoaching = {
    title: 'Product People 提携コーチ',
    description: 'Product People株式会社の提携コーチとして、プロダクトコーチングを提供しています',
    items: [
      {
        title: 'プロダクトコーチング',
        link: 'https://productpeople.jp/',
        linkText: 'Product People'
      },
      {
        title: 'ビギナー向け無料コーチング',
        description: '不定期で開催',
        link: 'https://note.com/productpeople/n/nd0aa8d2b9a7f',
        linkText: '詳細はこちら'
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

  const getColorClasses = (color: string, isDark: boolean) => {
    const colors = {
      green: {
        border: 'border-green-500',
        bg: isDark ? 'bg-green-500/10' : 'bg-green-50',
        text: isDark ? 'text-green-400' : 'text-green-600'
      },
      purple: {
        border: 'border-purple-500',
        bg: isDark ? 'bg-purple-500/10' : 'bg-purple-50',
        text: isDark ? 'text-purple-400' : 'text-purple-600'
      },
      red: {
        border: 'border-red-500',
        bg: isDark ? 'bg-red-500/10' : 'bg-red-50',
        text: isDark ? 'text-red-400' : 'text-red-600'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 border-b-4 border-black transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <Tent size={32} className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} />
              <span className={`text-2xl font-black ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                Yuta.Kanehara
              </span>
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              <Link
                to="/"
                className={`flex items-center gap-2 font-bold transition-colors ${
                  isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                <ArrowLeft size={18} />
                Back to Home
              </Link>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg transition-colors ${
                  isDarkMode ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg ${
                isDarkMode ? 'bg-gray-700 text-gray-100' : 'bg-gray-100 text-gray-900'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 space-y-2">
              <Link
                to="/"
                className={`block px-4 py-2 rounded-lg font-bold ${
                  isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Back to Home
              </Link>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`w-full text-left px-4 py-2 rounded-lg font-bold ${
                  isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Page Title */}
        <div className="mb-12">
          <h1 className={`text-4xl font-black mb-4 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            Projects
          </h1>
          <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            プロダクトコーチングと個人開発プロジェクト
          </p>
        </div>

        {/* Product Coaching Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-black mb-8 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            プロダクトコーチング
          </h2>
          
          {/* Coaching Types */}
          <div className="mb-12">
            <h3 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
              コーチングの種類と対象
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {coachingTypes.map((coaching, idx) => {
                const colors = getColorClasses(coaching.color, isDarkMode);
                return (
                  <div
                    key={idx}
                    className={`p-6 rounded-2xl border-2 ${colors.border} ${colors.bg}`}
                  >
                    <div className={`mb-4 ${colors.text}`}>
                      {coaching.icon}
                    </div>
                    <h4 className={`text-lg font-bold mb-1 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                      {coaching.title}
                    </h4>
                    <p className={`text-sm font-bold mb-4 ${colors.text}`}>
                      {coaching.subtitle}
                    </p>
                    <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {coaching.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {(coaching.target.company.length > 0 || coaching.target.product.length > 0) && (
                      <div className="mt-4 pt-4 border-t border-gray-300 dark:border-gray-600">
                        {coaching.target.company.length > 0 && (
                          <div className="mb-2">
                            <p className={`text-xs font-bold mb-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                              企業・組織のサイズ
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {coaching.target.company.map((item, i) => (
                                <span
                                  key={i}
                                  className={`text-xs px-2 py-1 rounded ${
                                    isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-700'
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
                                  className={`text-xs px-2 py-1 rounded ${
                                    isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-700'
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
                  className={`p-4 rounded-xl border-2 ${
                    isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'
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

          {/* Partner Coaching */}
          <div className="mb-8">
            <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
              {partnerCoaching.title}
            </h3>
            <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {partnerCoaching.description}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {partnerCoaching.items.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border-2 ${
                    isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'
                  }`}
                >
                  <p className={`font-bold mb-2 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    {item.title}
                  </p>
                  {item.description && (
                    <p className={`text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {item.description}
                    </p>
                  )}
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
                  className={`p-4 rounded-xl border-2 ${
                    isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-200'
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
          <h2 className={`text-3xl font-black mb-8 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
            個人プロダクト開発
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalProducts.map((product, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border-2 border-dashed ${
                  isDarkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'
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

