import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import { Users, Target, Lightbulb, CheckCircle2, XCircle, ArrowRight, Calendar } from 'lucide-react';

interface TransformationServiceProps {
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export default function TransformationService({ isDarkMode, setIsDarkMode }: TransformationServiceProps) {
  
  const challenges = [
    {
      icon: <XCircle size={20} />,
      text: '「アジャイル導入」したが、開発スピードが上がらない'
    },
    {
      icon: <XCircle size={20} />,
      text: 'プロダクトチームを作ったが、依然として受託開発的'
    },
    {
      icon: <XCircle size={20} />,
      text: 'ステークホルダーが多すぎて意思決定が進まない'
    },
    {
      icon: <XCircle size={20} />,
      text: '経営層の理解を得られず、変革が進まない'
    }
  ];

  const solutions = [
    {
      icon: <CheckCircle2 size={20} />,
      text: 'プロジェクトベースからプロダクトベースへの文化変革'
    },
    {
      icon: <CheckCircle2 size={20} />,
      text: 'エンパワードチームによる自律的な意思決定の実現'
    },
    {
      icon: <CheckCircle2 size={20} />,
      text: 'ステークホルダーマネジメントとアラインメントの仕組み化'
    },
    {
      icon: <CheckCircle2 size={20} />,
      text: 'エビデンスベースの意思決定プロセスの確立'
    }
  ];

  const programs = [
    {
      title: 'トランスフォーメーション アセスメント',
      duration: '2週間',
      description: '組織の現状分析からギャップ特定、変革ロードマップの策定まで',
      details: [
        '現状分析：プロセス、組織構造、文化の評価',
        'ギャップ特定：あるべき姿とのギャップを明確化',
        'ロードマップ策定：優先順位付けと段階的な変革計画',
        '経営層への報告：アセスメント結果とアクションプランの提示'
      ],
      deliverables: ['アセスメントレポート', '変革ロードマップ', 'クイックウィン施策リスト']
    },
    {
      title: 'エグゼクティブ ブリーフィング',
      duration: '半日〜1日',
      description: '経営層・ステークホルダーへの変革の必要性説明とアラインメント',
      details: [
        'なぜ変革が必要か：市場環境とプロダクトの重要性',
        'プロダクトオペレーティングモデルとは：基本概念の説明',
        '各部門への影響：営業、マーケ、開発、デザイン等への影響',
        'Q&Aセッション：経営層・ステークホルダーの懸念に対応'
      ],
      deliverables: ['プレゼンテーション資料', 'Q&A議事録', 'ネクストアクション']
    },
    {
      title: '継続的トランスフォーメーション コーチング',
      duration: '四半期契約（更新可）',
      description: '変革の実行フェーズにおける継続的な支援',
      details: [
        '月次セッション（4回/月）：進捗確認と課題解決',
        'オンデマンド相談：Slack/メールでの随時サポート',
        'チーム・リーダーへのコーチング：必要に応じて個別対応',
        '四半期レビュー：振り返りと次四半期の計画調整'
      ],
      deliverables: ['月次レポート', '四半期振り返りレポート', 'チーム成長記録']
    }
  ];

  const process = [
    {
      step: '01',
      title: '初回相談（無料・30分）',
      description: '現状の課題をヒアリングし、最適なアプローチをご提案します'
    },
    {
      step: '02',
      title: 'アセスメント（2週間）',
      description: '組織・チームの現状を詳細に分析し、変革ロードマップを策定します'
    },
    {
      step: '03',
      title: 'キックオフ',
      description: 'エグゼクティブブリーフィングで経営層とアラインメントを取ります'
    },
    {
      step: '04',
      title: '継続コーチング',
      description: '四半期契約で変革の実行をサポートします'
    }
  ];

  const results = [
    {
      metric: '30+',
      label: '支援企業数',
      description: 'スタートアップから上場企業まで'
    },
    {
      metric: '85%',
      label: '継続率',
      description: '四半期更新での継続利用率'
    },
    {
      metric: '100+',
      label: '育成したPM',
      description: 'コーチング・トレーニングを通じて'
    }
  ];

  const faqs = [
    {
      question: 'どのような企業が対象ですか？',
      answer: '主に従業員100名以上の大企業・メガベンチャーを対象としています。特に、プロジェクトベースの開発からプロダクトベースへの転換を目指している企業に最適です。'
    },
    {
      question: 'どのくらいの期間が必要ですか？',
      answer: 'アセスメントは2週間、継続コーチングは四半期単位です。組織の変革には通常1〜2年かかりますが、最初の四半期で目に見える変化を実感いただけます。'
    },
    {
      question: '他のコンサルティングとの違いは？',
      answer: '実務経験に基づく実践的なアドバイスと、継続的なサポートが特徴です。一度きりの提案ではなく、実行フェーズまで伴走します。'
    },
    {
      question: '料金はどのくらいですか？',
      answer: 'プロジェクトの規模や期間により異なります。まずは無料相談でお話を伺い、最適なプランをご提案します。'
    },
    {
      question: 'リモートでも可能ですか？',
      answer: 'はい、オンラインでの実施が可能です。必要に応じてオンサイトでの実施も対応します。'
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
              ? 'border-green-400 text-green-400 bg-green-900/20' 
              : 'border-black text-black bg-green-400'
          }`}>
            TRANSFORMATION COACHING
          </div>
          
          <h1 className={`text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight ${
            isDarkMode ? 'text-cyan-100' : 'text-gray-900'
          }`}>
            大企業のプロダクト変革を<br />
            <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>実践的に支援</span>します
          </h1>
          
          <p className={`text-lg mb-8 leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            プロジェクトベースからプロダクトベースへ。<br />
            DeNA、丸井グループでの変革経験を活かし、大企業特有の組織課題を乗り越えるための実践的なトランスフォーメーションコーチングを提供します。
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a
              href="https://twitter.com/yukagil"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-4 rounded-xl font-bold flex items-center gap-2 border-2 transition-all hover:-translate-y-1 ${
                isDarkMode
                  ? 'bg-green-600 border-green-400 text-white hover:bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.3)]'
                  : 'bg-green-500 border-black text-white hover:bg-green-600 shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000]'
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
            大企業ならではの課題に、実践的なアプローチで対応します
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            {solutions.map((solution, idx) => (
              <div
                key={idx}
                className={`p-4 rounded-xl border-2 flex items-start gap-3 ${
                  isDarkMode
                    ? 'bg-green-900/20 border-green-500/50'
                    : 'bg-green-50 border-green-300'
                }`}
              >
                <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>
                  {solution.icon}
                </span>
                <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {solution.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Programs Section */}
        <section className="mb-16">
          <SectionTitle title="提供プログラム" icon={<Users size={24} />} isDarkMode={isDarkMode} />
          
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
                        <span className="text-green-500">•</span>
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
                    ? 'bg-cyan-900 border-cyan-500 text-cyan-300'
                    : 'bg-blue-100 border-blue-600 text-blue-900'
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

        {/* Results Section */}
        <section className="mb-16">
          <SectionTitle title="実績" icon={<Lightbulb size={24} />} isDarkMode={isDarkMode} />
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {results.map((result, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border-2 text-center ${
                  isDarkMode
                    ? 'bg-gray-800 border-gray-600'
                    : 'bg-white border-black shadow-[4px_4px_0_0_#000]'
                }`}
              >
                <div className={`text-4xl font-black mb-2 ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>
                  {result.metric}
                </div>
                <div className={`text-sm font-bold mb-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {result.label}
                </div>
                <div className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                  {result.description}
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
            ? 'bg-gradient-to-br from-green-900/30 to-cyan-900/30 border-green-500'
            : 'bg-gradient-to-br from-green-50 to-blue-50 border-black shadow-[6px_6px_0_0_#000]'
        }`}>
          <h2 className={`text-3xl font-black mb-4 ${isDarkMode ? 'text-cyan-100' : 'text-gray-900'}`}>
            まずは無料相談から
          </h2>
          <p className={`mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            現状の課題をヒアリングし、最適なアプローチをご提案します
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://twitter.com/yukagil"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 border-2 transition-all hover:-translate-y-1 ${
                isDarkMode
                  ? 'bg-green-600 border-green-400 text-white hover:bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.3)]'
                  : 'bg-green-500 border-black text-white hover:bg-green-600 shadow-[4px_4px_0_0_#000] hover:shadow-[6px_6px_0_0_#000]'
              }`}
            >
              <Calendar size={20} />
              無料相談を予約する
            </a>
          </div>
          
          <div className={`mt-6 text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            または、下記からお問い合わせください：<br />
            <a href="https://muture.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-500">Muture経由</a> / 
            <a href="https://productpeople.jp/" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-500"> Product People経由</a> / 
            <a href="https://twitter.com/yukagil" target="_blank" rel="noopener noreferrer" className="underline hover:text-green-500"> @yukagil へDM</a>
          </div>
        </section>
      </main>

      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

