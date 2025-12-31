interface FooterProps {
  isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {
  const buildYear = new Date().getFullYear();
  
  return (
    <footer className={`mt-20 pt-8 border-t-2 text-center text-sm font-bold font-mono ${
      isDarkMode ? 'border-gray-700 text-gray-500' : 'border-gray-200 text-gray-400'
    }`}>
      <p>© {buildYear} Yuta Kanehara. All rights reserved.</p>
    </footer>
  );
}

