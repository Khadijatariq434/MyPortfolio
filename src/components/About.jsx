import { motion } from 'framer-motion';
import { FiAward, FiCode, FiUsers } from 'react-icons/fi';

const About = ({ isDarkMode }) => {
  // Dynamic classes based on dark mode
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const secondaryTextColor = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const accentColor = isDarkMode ? 'text-blue-400' : 'text-blue-600';
  const cardBg = isDarkMode ? 'bg-gray-800/50' : 'bg-white/50';
  const cardBorder = isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50';
  const buttonBg = isDarkMode ? 'bg-blue-700 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700';
  const buttonShadow = isDarkMode ? 'hover:shadow-blue-900/20' : 'hover:shadow-blue-200/50';

  return (
    <section 
      id="about" 
      className="py-20 px-6 md:px-16 max-w-6xl mx-auto"
      style={{ backdropFilter: 'blur(4px)' }}
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textColor}`}>
          About <span className={accentColor}>Me</span>
        </h2>
        <div className={`w-20 h-1 ${accentColor} mx-auto`}></div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h3 className={`text-2xl font-bold mb-6 ${textColor}`}>
          MERN Stack Developer from India
        </h3>

        <p className={`${secondaryTextColor} mb-6 leading-relaxed`}>
          I'm <span className={`font-semibold ${accentColor}`}>Khadeeja Tariq</span>, a recent BCA graduate from BIMT Budaun with a strong passion for backend development.
          <br /><br />
          I specialize in the MERN stack — MongoDB, Express.js, React, and Node.js — with a deep interest in building efficient APIs, secure authentication systems, and clean, modular backend architectures.
          <br /><br />
          I enjoy exploring real-world projects to sharpen my skills and follow best practices like separating route logic, using JWT, bcrypt, and preferring fetch for API calls. I'm eager to apply my knowledge and grow as a backend developer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Project Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className={`${cardBg} p-6 rounded-xl border ${cardBorder} shadow-md hover:shadow-lg transition-all backdrop-blur-sm`}
          >
            <div className="flex justify-center mb-4">
              <FiCode className={`${accentColor} text-3xl`} />
            </div>
            <h4 className={`font-bold mb-2 ${textColor}`}>5+ Projects</h4>
            <p className={`text-sm ${secondaryTextColor}`}>Built using the MERN stack</p>
          </motion.div>

          {/* Learning Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className={`${cardBg} p-6 rounded-xl border ${cardBorder} shadow-md hover:shadow-lg transition-all backdrop-blur-sm`}
          >
            <div className="flex justify-center mb-4">
              <FiUsers className={`${accentColor} text-3xl`} />
            </div>
            <h4 className={`font-bold mb-2 ${textColor}`}>Always Learning</h4>
            <p className={`text-sm ${secondaryTextColor}`}>Open to collaborations and internships</p>
          </motion.div>

          {/* Graduate Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className={`${cardBg} p-6 rounded-xl border ${cardBorder} shadow-md hover:shadow-lg transition-all backdrop-blur-sm`}
          >
            <div className="flex justify-center mb-4">
              <FiAward className={`${accentColor} text-3xl`} />
            </div>
            <h4 className={`font-bold mb-2 ${textColor}`}>Fresh Graduate</h4>
            <p className={`text-sm ${secondaryTextColor}`}>Ready to enter the professional world</p>
          </motion.div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`${buttonBg} text-white px-6 py-3 rounded-full transition-all duration-300 shadow-lg ${buttonShadow}`}
        >
          <a href="/khadeeja_resume.pdf" download>
            Download Resume
          </a>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default About;