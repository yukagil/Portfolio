import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Menu, X, Tent, ArrowRight, ArrowLeft } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  currentPage: 'home' | 'projects';
}

export default function Header({ isDarkMode, onToggleTheme, currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
            {currentPage === 'home' ? (
              <Link
                to="/projects"
                className={`flex items-center gap-2 font-bold transition-colors ${
                  isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Projects
                <ArrowRight size={18} />
              </Link>
            ) : (
              <Link
                to="/"
                className={`flex items-center gap-2 font-bold transition-colors ${
                  isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                <ArrowLeft size={18} />
                Back to Home
              </Link>
            )}
            <button
              onClick={onToggleTheme}
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
            {currentPage === 'home' ? (
              <Link
                to="/projects"
                className={`block px-4 py-2 rounded-lg font-bold ${
                  isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
            ) : (
              <Link
                to="/"
                className={`block px-4 py-2 rounded-lg font-bold ${
                  isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Back to Home
              </Link>
            )}
            <button
              onClick={() => {
                onToggleTheme();
                setIsMenuOpen(false);
              }}
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
  );
}

