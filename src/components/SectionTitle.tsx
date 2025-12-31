interface SectionTitleProps {
  title: string;
  icon?: React.ReactNode;
  isDarkMode: boolean;
}

export default function SectionTitle({ title, icon, isDarkMode }: SectionTitleProps) {
  return (
    <h2 className={`text-3xl font-black mb-0 flex items-center gap-3 ${isDarkMode ? 'text-cyan-400' : 'text-gray-900'}`}>
      {icon && (
        <span className={`p-2 rounded-lg border-2 transition-all ${
          isDarkMode ? 'bg-purple-600 border-purple-400 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]' : 'bg-yellow-400 border-black text-black'
        }`}>
          {icon}
        </span>
      )}
      {title}
    </h2>
  );
}

