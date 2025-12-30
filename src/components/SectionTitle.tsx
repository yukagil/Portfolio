interface SectionTitleProps {
  title: string;
  icon?: React.ReactNode;
  isDarkMode: boolean;
}

export default function SectionTitle({ title, icon, isDarkMode }: SectionTitleProps) {
  return (
    <h2 className={`text-3xl font-black mb-0 flex items-center gap-3 ${isDarkMode ? 'text-gray-100' : 'text-gray-900'}`}>
      {icon && (
        <span className={`p-2 rounded-lg border-2 ${
          isDarkMode ? 'bg-gray-800 border-gray-600 text-blue-400' : 'bg-yellow-400 border-black text-black'
        }`}>
          {icon}
        </span>
      )}
      {title}
    </h2>
  );
}

