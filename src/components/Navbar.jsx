import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiTwitter, FiMail, FiInstagram } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

 useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
    
    const sections = ['home', 'about', 'skills', 'work', 'contact'];
    const offset = 150; // Increased from 100 to better handle varying section heights
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        // More flexible detection that works for both short and tall sections
        const isInView = (
          (rect.top <= offset && rect.bottom >= offset) || // Center detection
          (rect.top >= 0 && rect.top <= offset) || // Top entering view
          (rect.bottom >= window.innerHeight - offset && rect.bottom <= window.innerHeight) // Bottom exiting view
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
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = ['home', 'about', 'skills', 'work', 'contact'];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-md' 
        : 'bg-transparent backdrop-blur-sm'
    }`}>
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
              className="text-xl font-bold text-gray-900 cursor-pointer hover:text-blue-600 transition-colors"
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
                      activeSection === item 
                        ? 'bg-blue-100 text-blue-600' 
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                </motion.li>
              ))}
            </ul>

            {/* Social Icons (Desktop) */}
            <div className="ml-6 flex items-center space-x-3 border-l border-gray-200 pl-6">
              <a 
            href="https://github.com/Khadijatariq434"
            target='_blank'
                className="text-gray-500 hover:text-blue-600 p-1.5 rounded-full hover:bg-blue-50 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={18} />
              </a>
              <a 
                 href="https://www.linkedin.com/in/khadeeja-tariq-b502ba341/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target='_blank'
                className="text-gray-500 hover:text-blue-600 p-1.5 rounded-full hover:bg-blue-50 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={18} />
              </a>
              <a 
                  href="https://www.instagram.com/me.khadijatariq/"
                target='_blank'
                  className="text-gray-500 hover:text-blue-600 p-1.5 rounded-full hover:bg-blue-50 transition-colors"
                aria-label="Twitter"
              >
                <FiInstagram size={18} />
              </a>
              {/* <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo('contact')}
                className="ml-2 flex items-center gap-1 bg-blue-600 text-white px-3 py-1.5 rounded-full text-sm hover:bg-blue-700 transition-colors"
              >
                <FiMail size={16} />
                <span>Contact</span>
              </motion.button> */}
            </div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
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
            className="md:hidden overflow-hidden bg-gradient-to-b from-blue-50/95 to-white/95"
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
                    activeSection === item
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.button>
              ))}
              
              <div className="pt-4 border-t border-gray-200 mt-2 flex justify-center space-x-4">
                <a 
            href="https://github.com/Khadijatariq434"
            target='_blank'
                  className="text-gray-700 hover:text-blue-600 p-2 rounded-full hover:bg-blue-50 transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub size={20} />
                </a>
                <a 
                   href="https://www.linkedin.com/in/khadeeja-tariq-b502ba341/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target='_blank'
                  className="text-gray-700 hover:text-blue-600 p-2 rounded-full hover:bg-blue-50 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={20} />
                </a>
                <a 
                  href="https://www.instagram.com/me.khadijatariq/"
                  target='_blank' 
                  className="text-gray-700 hover:text-blue-600 p-2 rounded-full hover:bg-blue-50 transition-colors"
                  aria-label="Twitter"
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