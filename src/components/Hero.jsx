import { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiDownload, FiMail, FiInstagram } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Hero = ({ isDarkMode }) => {
  const [typedText, setTypedText] = useState('');
  const roles = ["MERN Stack Developer", "Web Designer", "JavaScript Expert", "Problem Solver"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = roles[currentRoleIndex];
    
    if (isDeleting) {
      if (currentIndex > 0) {
        setTimeout(() => {
          setTypedText(currentText.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
      }
    } else {
      if (currentIndex < currentText.length) {
        setTimeout(() => {
          setTypedText(currentText.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, 100);
      } else {
        setTimeout(() => setIsDeleting(true), 2000);
      }
    }
  }, [currentIndex, isDeleting, currentRoleIndex]);

  // Dynamic classes based on dark mode
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const secondaryTextColor = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const accentColor = isDarkMode ? 'text-blue-400' : 'text-blue-600';
  const buttonBg = isDarkMode ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700';
  const outlineButton = isDarkMode 
    ? 'border-gray-300 text-white hover:bg-gray-800' 
    : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white';
  const socialIconColor = isDarkMode 
    ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/30' 
    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50';

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between px-6 md:px-16 max-w-6xl mx-auto relative pt-20 md:pt-0 text-center md:text-left"
      style={{ scrollMarginTop: '80px' }}
    >
      {/* Background elements - now subtle and transparent */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className={`absolute top-20 left-20 w-40 h-40 rounded-full ${
          isDarkMode ? 'bg-blue-900/10' : 'bg-blue-100/10'
        } blur-xl`}></div>
        <div className={`absolute bottom-10 right-20 w-60 h-60 rounded-full ${
          isDarkMode ? 'bg-blue-800/5' : 'bg-blue-200/5'
        } blur-xl`}></div>
      </div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 z-10 mt-16 md:mt-0 flex flex-col items-center md:items-start"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className={`${accentColor} font-medium mb-2`}
        >
          Hello there 👋
        </motion.p>

        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${textColor} mb-4 leading-tight`}>
          I'm <span className={accentColor}>Khadeeja</span>,
        </h1>

        <h2 className={`text-2xl md:text-4xl lg:text-5xl font-semibold ${textColor} mb-6 h-20 flex items-center`}>
          <span className="min-w-[20ch]">
            {typedText}
            <span className="animate-pulse">|</span>
          </span>
        </h2>

        <p className={`text-lg ${secondaryTextColor} mb-10 max-w-md leading-relaxed`}>
          I build exceptional digital experiences with clean code and innovative solutions. Currently based in India.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10 items-center">
          <a
            href="/khadeeja_resume.pdf"
            download
            className={`inline-flex items-center justify-center gap-2 ${buttonBg} text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg ${
              isDarkMode ? 'hover:shadow-blue-900/20' : 'hover:shadow-blue-200/50'
            }`}
          >
            <FiDownload />
            Download Resume
          </a>

          <a href="#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center justify-center gap-2 border-2 ${outlineButton} px-6 py-3 rounded-full transition-all duration-300`}
            >
              <FiMail />
              Contact Me
            </motion.button>
          </a>
        </div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex gap-6 justify-center md:justify-start"
        >
          <a
            href="https://github.com/Khadijatariq434"
            target="_blank"
            className={`${socialIconColor} transition-colors duration-300 p-2 rounded-full`}
            aria-label="GitHub"
          >
            <FiGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/khadeeja-tariq-b502ba341/"
            target="_blank"
            className={`${socialIconColor} transition-colors duration-300 p-2 rounded-full`}
            aria-label="LinkedIn"
          >
            <FiLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/me.khadijatariq/"
            target="_blank"
            className={`${socialIconColor} transition-colors duration-300 p-2 rounded-full`}
            aria-label="Instagram"
          >
            <FiInstagram size={24} />
          </a>
        </motion.div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0 z-10"
      >
        <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-[10px] ${
          isDarkMode ? 'border-gray-800/50' : 'border-white/50'
        } shadow-2xl backdrop-blur-sm`}>
          <img
            src="./profile.jpg"
            alt="Khadeeja Tariq"
            className="w-full h-full object-cover rounded-full scale-125 transition-transform duration-500"
          />
          <div className={`absolute inset-0 ${
            isDarkMode ? 'bg-blue-400/5' : 'bg-blue-600/5'
          } mix-blend-multiply rounded-full`}></div>
          <div className={`absolute -bottom-4 -left-4 w-16 h-16 rounded-full ${
            isDarkMode ? 'bg-blue-900/10' : 'bg-blue-100/10'
          } blur-md`}></div>
          <div className={`absolute -top-4 -right-4 w-20 h-20 rounded-full ${
            isDarkMode ? 'bg-blue-800/5' : 'bg-blue-200/5'
          } blur-sm`}></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;