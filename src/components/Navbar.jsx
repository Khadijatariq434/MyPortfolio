import { FiMenu, FiX, FiGithub, FiLinkedin, FiTwitter, FiMail, FiInstagram, FiMoon, FiSun } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      const sections = ['home', 'about', 'skills', 'work', 'contact'];
      const offset = 150;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isInView = (
            (rect.top <= offset && rect.bottom >= offset) ||
            (rect.top >= 0 && rect.top <= offset) ||
            (rect.bottom >= window.innerHeight - offset && rect.bottom <= window.innerHeight)
          );
          
          if (isInView) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsMenuOpen(false);
    
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.style.scrollMarginTop = '80px';
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        
        setTimeout(() => {
          element.style.scrollMarginTop = '';
        }, 1000);
      }
    }, 300);
  };

  const navItems = ['home', 'about', 'skills', 'work', 'contact'];

  // Dynamic classes based on dark mode
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const iconColor = isDarkMode ? 'text-white hover:text-blue-400' : 'text-gray-500 hover:text-blue-600';
  const hoverBgColor = isDarkMode ? 'hover:bg-blue-900/20' : 'hover:bg-blue-50';
  const navBgColor = scrolled 
    ? isDarkMode 
      ? 'bg-gray-900/95 backdrop-blur-sm shadow-md' 
      : 'bg-white/95 backdrop-blur-sm shadow-md'
    : 'bg-transparent backdrop-blur-sm';
  const borderColor = isDarkMode ? 'border-gray-700' : 'border-gray-200';
  const menuBgColor = isDarkMode 
    ? 'bg-gradient-to-b from-gray-900/95 to-gray-800/95' 
    : 'bg-gradient-to-b from-blue-50/95 to-white/95';
  const navItemActive = isDarkMode 
    ? 'bg-blue-900/30 text-blue-400' 
    : 'bg-blue-100 text-blue-600';
  const navItemInactive = isDarkMode 
    ? 'text-gray-300 hover:bg-gray-800 hover:text-white' 
    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo/Name */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <h1 
              className={`text-xl font-bold cursor-pointer hover:text-blue-600 transition-colors ${textColor}`}
              onClick={() => scrollTo('home')}
            >
              Khadeeja Tariq
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <ul className="flex space-x-1">
              {navItems.map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button
                    onClick={() => scrollTo(item)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                      activeSection === item ? navItemActive : navItemInactive
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </motion.li>
              ))}
            </ul>

            {/* Social Icons (Desktop) */}
            <div className={`ml-6 flex items-center space-x-3 border-l ${borderColor} pl-6`}>
              <a 
                href="https://github.com/Khadijatariq434"
                target='_blank'
                className={`p-1.5 rounded-full transition-colors ${iconColor} ${hoverBgColor}`}
                aria-label="GitHub"
              >
                <FiGithub size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/khadeeja-tariq-b502ba341/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target='_blank'
                className={`p-1.5 rounded-full transition-colors ${iconColor} ${hoverBgColor}`}
                aria-label="LinkedIn"
              >
                <FiLinkedin size={18} />
              </a>
              <a 
                href="https://www.instagram.com/me.khadijatariq/"
                target='_blank'
                className={`p-1.5 rounded-full transition-colors ${iconColor} ${hoverBgColor}`}
                aria-label="Instagram"
              >
                <FiInstagram size={18} />
              </a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-1.5 rounded-full transition-colors ${iconColor} ${hoverBgColor}`}
                aria-label="Toggle Dark Mode"
              >
                {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button and dark mode toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-1.5 rounded-full transition-colors ${iconColor} ${hoverBgColor}`}
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-1.5 rounded-full transition-colors ${iconColor} ${hoverBgColor}`}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden overflow-hidden ${menuBgColor}`}
          >
            <div className="px-4 pb-4 space-y-2">
              {navItems.map((item) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => scrollTo(item)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    activeSection === item ? navItemActive : navItemInactive
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.button>
              ))}
              
              <div className={`pt-4 border-t ${borderColor} mt-2 flex justify-center space-x-4`}>
                <a 
                  href="https://github.com/Khadijatariq434"
                  target='_blank'
                  className={`p-2 rounded-full transition-colors ${iconColor} ${hoverBgColor}`}
                  aria-label="GitHub"
                >
                  <FiGithub size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/khadeeja-tariq-b502ba341/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target='_blank'
                  className={`p-2 rounded-full transition-colors ${iconColor} ${hoverBgColor}`}
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/me.khadijatariq/"
                  target='_blank'
                  className={`p-2 rounded-full transition-colors ${iconColor} ${hoverBgColor}`}
                  aria-label="Instagram"
                >
                  <FiInstagram size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;