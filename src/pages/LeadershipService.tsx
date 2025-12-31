import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import { Lightbulb, Target, Users, CheckCircle2, XCircle, ArrowRight, Calendar } from 'lucide-react';

interface LeadershipServiceProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export default function LeadershipService({ isDarkMode, setIsDarkMode }: LeadershipServiceProps) {
  
  const challenges = [
    {
      icon: <XCircle size={20} />,
      text: 'ビジョンはあるが、戦略に落とし込めない'
    },
    {
      icon: <XCircle size={20} />,
      text: 'チームが機能開発に追われ、成果が見えない'
    },
    {
      icon: <XCircle size={20} />,
      text: 'ステークホルダーとの認識がズレている'
    },
    {
      icon: <XCircle size={20} />,
      text: 'プロダクト組織のデザインに悩んでいる'
    }
  ];

  const solutions = [
    {
      icon: <CheckCircle2 size={20} />,
      text: 'チームをアウトカムゴールで揃えます'
    },
    {
      icon: <CheckCircle2 size={20} />,
      text: 'エビデンスベースの戦略を策定します'
    },
    {
      icon: <CheckCircle2 size={20} />,
      text: '効果的なステークホルダーマネジメントを実現します'
    },
    {
      icon: <CheckCircle2 size={20} />,
      text: 'チームが自律的に意思決定できる状態を作ります'
    }
  ];

  const programs = [
    {
      title: 'プロダクトビジョン スプリント',
      duration: '1週間',
      description: '説得力のあるプロダクトビジョンの策定',
      details: [
        '市場・ユーザー・技術トレンドの分析',
        'ビジョンプロトタイプの作成とフィードバック',
        'ステークホルダーとのアラインメント',
        'ビジョンの可視化とストーリーテリング'
      ],
      deliverables: ['プロダクトビジョンドキュメント', 'ビジュアルプレゼンテーション', 'ステークホルダー向け説明資料']
    },
    {
      title: 'プロダクト戦略 スプリント',
      duration: '1〜2週間',
      description: 'エビデンスベースのプロダクト戦略策定',
      details: [
        '市場・競合分析とポジショニング',
        'ターゲットセグメントの特定',
        'バリュープロポジションの定義',
        '戦略ロードマップの策定'
      ],
      deliverables: ['プロダクト戦略書', '戦略ロードマップ', 'OKR/目標設定案']
    },
    {
      title: 'チーム トポロジー レビュー',
      duration: '2〜3週間',
      description: '組織構造とチーム編成の最適化',
      details: [
        '現状のチーム構造・責任範囲の分析',
        'プロダクトアーキテクチャとの整合性確認',
        '最適なチームトポロジーの提案',
        '移行計画の策定'
      ],
      deliverables: ['現状分析レポート', 'チームトポロジー提案書', '移行ロードマップ']
    },
    {
      title: '継続的リーダーシップ コーチング',
      duration: '四半期契約（更新可）',
      description: 'プロダクトリーダーへの継続的な1on1支援',
      details: [
        '月次1on1セッション（4回/月）',
        '戦略・ロードマップレビュー',
        'ステークホルダーマネジメント支援',
        'チーム課題への対応アドバイス'
      ],
      deliverables: ['月次振り返りメモ', '四半期レビューレポート', 'アクションアイテムトラッキング']
    }
  ];

  const process = [
    {
      step: '01',
      title: '初回相談（無料・30分）',
      description: '現状の課題をヒアリングし、最適なプログラムをご提案します'
    },
    {
      step: '02',
      title: 'キックオフMTG',
      description: '目標設定と進め方の詳細を確認します'
    },
    {
      step: '03',
      title: 'スプリント実行',
      description: 'ビジョン・戦略・トポロジーなど、選択したプログラムを実行します'
    },
    {
      step: '04',
      title: '継続コーチング（オプション）',
      description: '四半期契約でリーダーとしての成長を継続サポートします'
    }
  ];

  const targetLeaders = [
    {
      title: 'CPO / VP of Product',
      description: 'プロダクト組織全体の戦略と方向性を担う経営層'
    },
    {
      title: 'Head of Product',
      description: '複数のプロダクトやチームを統括するリーダー'
    },
    {
      title: 'Group Product Manager',
      description: '複数のPMをマネジメントするミドルリーダー'
    }
  ];

  const faqs = [
    {
      question: 'どのようなリーダーが対象ですか？',
      answer: 'CPO、VP of Product、Head of Product、Group PM など、プロダクト組織のリーダーシップを担う方が対象です。初めてリーダーになった方から、経験豊富なリーダーまで幅広く対応しています。'
    },
    {
      question: 'スプリントとコーチングの違いは？',
      answer: 'スプリント（1〜2週間）は特定のアウトプット（ビジョン、戦略など）を作るための集中プログラムです。コーチングは継続的な1on1で、リーダーとしての成長を長期的にサポートします。'
    },
    {
      question: '他のコンサルティングとの違いは？',
      answer: 'プロダクトマネジメントの実務経験に基づく実践的なアドバイスが特徴です。理論だけでなく、DeNA、丸井グループなどでの実例を交えながらサポートします。'
    },
    {
      question: 'チーム全体のトレーニングも可能ですか？',
      answer: 'はい、リーダーコーチングと並行してチーム向けトレーニングも提供可能です。Discovery Coachingページをご覧ください。'
    },
    {
      question: 'リモートでも可能ですか？',
      answer: 'はい、オンラインでの実施が可能です。スプリントでは必要に応じてオンサイトでのワークショップも実施します。'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-[#0a0a0a] text-cyan-100' : 'bg-[#F0F0F0] text-gray-800'} font-sans relative`}>
      {/* Background Pattern */}
      <div className={`absolute inset-0 pointer-events-none z-0 ${
        isDarkMode 
          ? 'bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px] opacity-30' 
          : 'bg-[radial-gradient(#d4d4d8_2px,transparent_2px)] bg-[size:24px_24px] opacity-60'
      }`}></div>

      <Header isDarkMode={isDarkMode} onToggleTheme={() => setIsDarkMode(!isDarkMode)} currentPage="services" />

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
        
        {/* Hero Section */}
        <section className="mb-16">
          <div className={`inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest rounded-full border-2 ${
            isDarkMode 
              ? 'border-purple-400 text-purple-400 bg-purple-900/20' 
              : 'border-black text-black bg-purple-400'
          }`}>
            PRODUCT LEADERSHIP COACHING
          </div>
          
          <h1 className={`text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight ${
            isDarkMode ? 'text-cyan-100' : 'text-gray-900'
          }`}>
            プロダクトリーダーの<br />
            <span className={isDarkMode ? 'text-purple-400' : 'text-purple-600'}>戦略と成長</span>を支援します
          </h1>
          
          <p className={`text-lg mb-8 leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            ビジョン策定、戦略立案、組織デザインから、日々のステークホルダーマネジメントまで。<br />
            プロダクトリーダーとしての意思決定と成長を実践的にサポートします。
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="https://twitter.com/yukagil"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-4 rounded-xl font-bold flex items-center gap-2 border-2 transition-all hover:-translate-y-1 ${
                isDarkMode
                  ? 'bg-purple-600 border-purple-400 text-white hover:bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                  : 'bg-purple-500 border-black text-white hover:bg-purple-600 shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000]'
              }`}
            >
              <Calendar size={20} />
              無料相談を予約する（30分）
            </a>
            <a
              href="/services"
              className={`px-8 py-4 rounded-xl font-bold flex items-center gap-2 border-2 transition-all hover:-translate-y-1 ${
                isDarkMode
                  ? 'bg-transparent border-cyan-400 text-cyan-400 hover:bg-cyan-900/20 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                  : 'bg-white border-black text-gray-900 hover:bg-gray-50 shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000]'
              }`}
            >
              他のサービスを見る
              <ArrowRight size={20} />
            </a>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="mb-16">
          <h2 className={`text-3xl font-black mb-8 ${isDarkMode ? 'text-cyan-100' : 'text-gray-900'}`}>
            こんな課題を抱えていませんか？
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {challenges.map((challenge, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border-2 flex items-start gap-3 ${
                  isDarkMode
                    ? 'bg-red-900/20 border-red-500/50'
                    : 'bg-red-50 border-red-300'
                }`}
              >
                <span className={isDarkMode ? 'text-red-400' : 'text-red-500'}>
                  {challenge.icon}
                </span>
                <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {challenge.text}
                </p>
              </div>
            ))}
          </div>

          <div className={`text-center py-4 ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
            <ArrowRight size={32} className="inline-block transform rotate-90" />
          </div>

          <h3 className={`text-2xl font-black mb-6 text-center ${isDarkMode ? 'text-cyan-100' : 'text-gray-900'}`}>
            プロダクトリーダーとしての意思決定と成長を支援します
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {solutions.map((solution, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border-2 flex items-start gap-3 ${
                  isDarkMode
                    ? 'bg-purple-900/20 border-purple-500/50'
                    : 'bg-purple-50 border-purple-300'
                }`}
              >
                <span className={isDarkMode ? 'text-purple-400' : 'text-purple-600'}>
                  {solution.icon}
                </span>
                <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {solution.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Target Leaders Section */}
        <section className="mb-16">
          <h2 className={`text-2xl font-black mb-6 ${isDarkMode ? 'text-cyan-100' : 'text-gray-900'}`}>
            こういう方が対象です
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            {targetLeaders.map((leader, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border-2 ${
                  isDarkMode
                    ? 'bg-gray-800 border-gray-600'
                    : 'bg-white border-black shadow-[2px_2px_0_0_#000]'
                }`}
              >
                <div className={`text-xs font-black mb-2 px-2 py-1 rounded inline-block ${
                  isDarkMode
                    ? 'bg-purple-900/50 text-purple-300'
                    : 'bg-purple-100 text-purple-800'
                }`}>
                  0{idx + 1}
                </div>
                <h3 className={`text-sm font-black mb-2 ${isDarkMode ? 'text-cyan-100' : 'text-gray-900'}`}>
                  {leader.title}
                </h3>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {leader.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Programs Section */}
        <section className="mb-16">
          <SectionTitle title="提供プログラム" icon={<Lightbulb size={24} />} isDarkMode={isDarkMode} />
          
          <div className="space-y-6 mt-8">
            {programs.map((program, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border-2 ${
                  isDarkMode
                    ? 'bg-gray-800 border-gray-600'
                    : 'bg-white border-black shadow-[4px_4px_0_0_#000]'
                }`}
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <h3 className={`text-xl font-black ${isDarkMode ? 'text-cyan-100' : 'text-gray-900'}`}>
                    {program.title}
                  </h3>
                  <span className={`text-sm font-bold px-3 py-1 rounded-full border-2 ${
                    isDarkMode
                      ? 'bg-purple-900/30 border-purple-500 text-purple-300'
                      : 'bg-purple-100 border-purple-600 text-purple-800'
                  }`}>
                    {program.duration}
                  </span>
                </div>
                
                <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {program.description}
                </p>
                
                <div className="mb-4">
                  <h4 className={`text-sm font-bold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    含まれる内容：
                  </h4>
                  <ul className="space-y-1">
                    {program.details.map((detail, i) => (
                      <li key={i} className={`text-sm flex items-start gap-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        <span className="text-purple-500">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className={`text-sm font-bold mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    成果物：
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {program.deliverables.map((deliverable, i) => (
                      <span
                        key={i}
                        className={`text-xs px-3 py-1 rounded-full border ${
                          isDarkMode
                            ? 'bg-gray-700 border-gray-600 text-gray-300'
                            : 'bg-gray-100 border-gray-300 text-gray-700'
                        }`}
                      >
                        {deliverable}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <SectionTitle title="コーチングの流れ" icon={<Target size={24} />} isDarkMode={isDarkMode} />
          
          <div className="mt-8 space-y-6">
            {process.map((step, idx) => (
              <div key={idx} className="flex gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-full border-4 flex items-center justify-center font-black text-sm ${
                  isDarkMode
                    ? 'bg-purple-900 border-purple-500 text-purple-300'
                    : 'bg-purple-100 border-purple-600 text-purple-900'
                }`}>
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className={`text-lg font-black mb-1 ${isDarkMode ? 'text-cyan-100' : 'text-gray-900'}`}>
                    {step.title}
                  </h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <SectionTitle title="よくある質問" isDarkMode={isDarkMode} />
          
          <div className="space-y-4 mt-8">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className={`p-6 rounded-2xl border-2 ${
                  isDarkMode
                    ? 'bg-gray-800 border-gray-600'
                    : 'bg-white border-black shadow-[2px_2px_0_0_#000]'
                }`}
              >
                <summary className={`font-bold cursor-pointer ${isDarkMode ? 'text-cyan-100' : 'text-gray-900'}`}>
                  {faq.question}
                </summary>
                <p className={`mt-3 text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className={`p-8 rounded-2xl border-2 text-center ${
          isDarkMode
            ? 'bg-gradient-to-br from-purple-900/30 to-cyan-900/30 border-purple-500'
            : 'bg-gradient-to-br from-purple-50 to-blue-50 border-black shadow-[6px_6px_0_0_#000]'
        }`}>
          <h2 className={`text-3xl font-black mb-4 ${isDarkMode ? 'text-cyan-100' : 'text-gray-900'}`}>
            まずは無料相談から
          </h2>
          <p className={`mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            現状の課題をヒアリングし、最適なプログラムをご提案します
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://twitter.com/yukagil"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 border-2 transition-all hover:-translate-y-1 ${
                isDarkMode
                  ? 'bg-purple-600 border-purple-400 text-white hover:bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.3)]'
                  : 'bg-purple-500 border-black text-white hover:bg-purple-600 shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000]'
              }`}
            >
              <Calendar size={20} />
              無料相談を予約する
            </a>
          </div>
          
          <div className={`mt-6 text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            または、下記からお問い合わせください：<br />
            <a href="https://muture.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-purple-500">Muture経由</a> / 
            <a href="https://productpeople.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-purple-500"> Product People経由</a> / 
            <a href="https://twitter.com/yukagil" target="_blank" rel="noopener noreferrer" className="underline hover:text-purple-500"> @yukagil へDM</a>
          </div>
        </section>
      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

