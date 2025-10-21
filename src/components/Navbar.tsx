import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Wallet } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/#features' },
    { name: 'About', path: '/#about' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Data Deletion', path: '/data-deletion' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
             <img
                      src='public/assets/icon.png'
                      alt={'TecxSpend'}
                      className="h-8 w-8 object-contain mx-auto"
                    />
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              TecxSpend
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isScrolled
                    ? 'text-gray-700 hover:text-blue-600'
                    : 'text-white hover:text-blue-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Download App
            </button>
          </div>

          <button
            className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Download App
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
