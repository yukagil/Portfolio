import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import { Target, Lightbulb, Users, CheckCircle2, XCircle, ArrowRight, Calendar } from 'lucide-react';

interface DiscoveryServiceProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export default function DiscoveryService({ isDarkMode, setIsDarkMode }: DiscoveryServiceProps) {
  
  const challenges = [
    {
      icon: <XCircle size={20} />,
      text: '何を作るべきか、チームで迷走している'
    },
    {
      icon: <XCircle size={20} />,
      text: 'ユーザーインタビューをしているが活かせていない'
    },
    {
      icon: <XCircle size={20} />,
      text: 'ディスカバリーとデリバリーのバランスが取れない'
    },
    {
      icon: <XCircle size={20} />,
      text: 'プロトタイプや実験のやり方がわからない'
    }
  ];

  const solutions = [
    {
      icon: <CheckCircle2 size={20} />,
      text: '継続的ディスカバリーの習慣を身につけます'
    },
    {
      icon: <CheckCircle2 size={20} />,
      text: 'ユーザーインタビューから学びを得る技術を習得します'
    },
    {
      icon: <CheckCircle2 size={20} />,
      text: 'プロトタイピングと実験の実践方法を学びます'
    },
    {
      icon: <CheckCircle2 size={20} />,
      text: 'チームで意思決定する力を高めます'
    }
  ];

  const programs = [
    {
      title: 'ディスカバリー/デザイン スプリント',
      duration: '1週間',
      description: 'プロダクトディスカバリーの実践を集中的に体験',
      details: [
        'Day 1-2: 課題の理解とアイデア発散',
        'Day 3: ソリューションの収束とプロトタイピング',
        'Day 4-5: ユーザーテストと学び',
        '実際のプロダクト課題を扱い、実践的なスキルを習得'
      ],
      deliverables: ['プロトタイプ', 'ユーザーテスト結果', '学びのまとめ', 'ネクストアクション']
    },
    {
      title: 'チーム向けディスカバリー トレーニング',
      duration: '6週間（週1回・2時間）',
      description: 'チーム全体でディスカバリースキルを習得',
      details: [
        'Week 1-2: 継続的ディスカバリーの基礎',
        'Week 3-4: ユーザーインタビュー実践',
        'Week 5: プロトタイピングと実験設計',
        'Week 6: 振り返りと定着化',
        '※ Teresa Torres のContinuous Discovery Habitsに基づく'
      ],
      deliverables: ['各週の実践課題', 'チームのディスカバリープラン', '振り返りレポート']
    },
    {
      title: 'プロダクトディスカバリー コーチング',
      duration: '四半期契約（更新可）',
      description: '週次でチームのディスカバリー活動を支援',
      details: [
        '週次セッション（1時間）：進捗確認と課題解決',
        'ディスカバリー活動のレビューとフィードバック',
        'ユーザーインタビュー・実験設計のサポート',
        'Opportunity Solution Treeの作成・更新支援'
      ],
      deliverables: ['週次フィードバックメモ', '四半期レビューレポート', 'チーム成長記録']
    },
    {
      title: 'ディスカバリー Q&Aセッション',
      duration: '隔週・1時間',
      description: 'ディスカバリーに関する質問と相談の場',
      details: [
        '複数チームが参加可能なオープンフォーラム',
        'ディスカバリー実践での疑問や課題を共有',
        '他チームの事例から学ぶ',
        '継続的な学習コミュニティの形成'
      ],
      deliverables: ['Q&A議事録', 'ナレッジベース', 'ベストプラクティス集']
    }
  ];

  const process = [
    {
      step: '01',
      title: '初回相談（無料・30分）',
      description: 'チームの現状と課題をヒアリングし、最適なプログラムをご提案します'
    },
    {
      step: '02',
      title: 'キックオフ',
      description: 'チーム全体で目標と進め方を確認します'
    },
    {
      step: '03',
      title: 'トレーニング/スプリント実行',
      description: '選択したプログラムを実践します'
    },
    {
      step: '04',
      title: '継続コーチング（オプション）',
      description: '四半期契約でチームの成長を継続サポートします'
    }
  ];

  const targetTeams = [
    {
      title: 'ディスカバリーを始めたいチーム',
      description: '何から始めればいいかわからないチーム向けのスプリント'
    },
    {
      title: 'ディスカバリーを定着させたいチーム',
      description: '週次トレーニングで習慣化をサポート'
    },
    {
      title: 'より高度な実践を目指すチーム',
      description: '継続コーチングで実験と学習のサイクルを強化'
    }
  ];

  const faqs = [
    {
      question: 'どのようなチームが対象ですか？',
      answer: 'PM、デザイナー、エンジニアの3職種が揃ったプロダクトチームが対象です。ディスカバリーの経験がないチームから、より高度な実践を目指すチームまで対応しています。'
    },
    {
      question: 'スプリントとトレーニングの違いは？',
      answer: 'スプリント（1週間）は短期集中で実践を体験します。トレーニング（6週間）は毎週少しずつ学びながら、自分たちのプロダクトで実践し定着させます。'
    },
    {
      question: 'Teresa Torres の Continuous Discovery Habits との関係は？',
      answer: 'トレーニングプログラムはTeresa Torres氏のフレームワークに基づいています。Product Talk社とのパートナーシップに基づき提供しています。'
    },
    {
      question: 'チーム全員が参加する必要がありますか？',
      answer: 'はい、PM・デザイナー・エンジニアのトリオでの参加を推奨します。全員で学ぶことで、チーム全体のディスカバリー力が向上します。'
    },
    {
      question: 'リモートでも可能ですか？',
      answer: 'はい、オンラインでの実施が可能です。スプリントでは必要に応じてオンサイトでの実施も対応します。'
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
              ? 'border-red-400 text-red-400 bg-red-900/20' 
              : 'border-black text-black bg-red-400'
          }`}>
            DISCOVERY / DELIVERY COACHING
          </div>
          
          <h1 className={`text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight ${
            isDarkMode ? 'text-cyan-100' : 'text-gray-900'
          }`}>
            プロダクトチームの<br />
            <span className={isDarkMode ? 'text-red-400' : 'text-red-600'}>ディスカバリー力</span>を高めます
          </h1>
          
          <p className={`text-lg mb-8 leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            継続的ディスカバリーの習慣を身につけ、ユーザーから学び、<br />
            チームで意思決定する力を養います。
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="https://twitter.com/yukagil"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-4 rounded-xl font-bold flex items-center gap-2 border-2 transition-all hover:-translate-y-1 ${
                isDarkMode
                  ? 'bg-red-600 border-red-400 text-white hover:bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.3)]'
                  : 'bg-red-500 border-black text-white hover:bg-red-600 shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000]'
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
            チーム全体でディスカバリースキルを習得します
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {solutions.map((solution, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border-2 flex items-start gap-3 ${
                  isDarkMode
                    ? 'bg-red-900/20 border-red-500/50'
                    : 'bg-red-50 border-red-300'
                }`}
              >
                <span className={isDarkMode ? 'text-red-400' : 'text-red-600'}>
                  {solution.icon}
                </span>
                <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {solution.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Target Teams Section */}
        <section className="mb-16">
          <h2 className={`text-2xl font-black mb-6 ${isDarkMode ? 'text-cyan-100' : 'text-gray-900'}`}>
            こういうチームが対象です
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            {targetTeams.map((team, idx) => (
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
                    ? 'bg-red-900/50 text-red-300'
                    : 'bg-red-100 text-red-800'
                }`}>
                  0{idx + 1}
                </div>
                <h3 className={`text-sm font-black mb-2 ${isDarkMode ? 'text-cyan-100' : 'text-gray-900'}`}>
                  {team.title}
                </h3>
                <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {team.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Programs Section */}
        <section className="mb-16">
          <SectionTitle title="提供プログラム" icon={<Target size={24} />} isDarkMode={isDarkMode} />
          
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
                      ? 'bg-red-900/30 border-red-500 text-red-300'
                      : 'bg-red-100 border-red-600 text-red-800'
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
                        <span className="text-red-500">•</span>
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
          <SectionTitle title="コーチングの流れ" icon={<Lightbulb size={24} />} isDarkMode={isDarkMode} />
          
          <div className="mt-8 space-y-6">
            {process.map((step, idx) => (
              <div key={idx} className="flex gap-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-full border-4 flex items-center justify-center font-black text-sm ${
                  isDarkMode
                    ? 'bg-red-900 border-red-500 text-red-300'
                    : 'bg-red-100 border-red-600 text-red-900'
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
            ? 'bg-gradient-to-br from-red-900/30 to-cyan-900/30 border-red-500'
            : 'bg-gradient-to-br from-red-50 to-blue-50 border-black shadow-[6px_6px_0_0_#000]'
        }`}>
          <h2 className={`text-3xl font-black mb-4 ${isDarkMode ? 'text-cyan-100' : 'text-gray-900'}`}>
            まずは無料相談から
          </h2>
          <p className={`mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            チームの現状と課題をヒアリングし、最適なプログラムをご提案します
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://twitter.com/yukagil"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 border-2 transition-all hover:-translate-y-1 ${
                isDarkMode
                  ? 'bg-red-600 border-red-400 text-white hover:bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.3)]'
                  : 'bg-red-500 border-black text-white hover:bg-red-600 shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000]'
              }`}
            >
              <Calendar size={20} />
              無料相談を予約する
            </a>
          </div>
          
          <div className={`mt-6 text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            または、下記からお問い合わせください：<br />
            <a href="https://muture.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-500">Muture経由</a> / 
            <a href="https://productpeople.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-500"> Product People経由</a> / 
            <a href="https://twitter.com/yukagil" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-500"> @yukagil へDM</a>
          </div>
        </section>
      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

