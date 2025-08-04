import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiInstagram, FiTwitter } from 'react-icons/fi';

const Footer = ({ isDarkMode }) => {
  const socialLinks = [
    { icon: <FiGithub size={20} />, url: "https://github.com/Khadijatariq434", label: "GitHub" },
    { icon: <FiLinkedin size={20} />, url: "https://www.linkedin.com/in/khadeeja-tariq-b502ba341/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
    { icon: <FiMail size={20} />, url: "mailto:khadijatariq434@gmail.com", label: "Email" },
    { icon: <FiInstagram size={20} />, url: "https://www.instagram.com/me.khadijatariq", label: "Instagram" },
    { icon: <FiTwitter size={20} />, url: "https://twitter.com/khadeejatariq", label: "Twitter" }
  ];

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#work" },
    { name: "Contact", href: "#contact" }
  ];

  // Dynamic classes based on dark mode
  const bgGradient = isDarkMode 
    ? 'bg-gradient-to-b from-gray-900/90 to-gray-800/90' 
    : 'bg-gradient-to-b from-blue-600/90 to-blue-700/90';
  const textColor = isDarkMode ? 'text-gray-200' : 'text-white';
  const secondaryTextColor = isDarkMode ? 'text-gray-400' : 'text-blue-100';
  const socialBg = isDarkMode 
    ? 'bg-gray-700 hover:bg-gray-600 hover:text-white' 
    : 'bg-blue-500 hover:bg-white hover:text-blue-600';
  const dividerColor = isDarkMode ? 'bg-gray-700/50' : 'bg-blue-400/30';
  const linkHover = isDarkMode ? 'hover:text-white' : 'hover:text-blue-50';

  return (
    <footer className={`${bgGradient} ${textColor} pt-16 pb-8 backdrop-blur-sm`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold mb-2">Khadeeja Tariq</h3>
            <p className={secondaryTextColor}>MERN Stack Developer</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {footerLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className={`${secondaryTextColor} ${linkHover} transition-colors font-medium`}
              >
                {link.name}
              </a>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                className={`${socialBg} p-3 rounded-full ${textColor} transition-all duration-300`}
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.8 }}
          className={`h-px ${dividerColor} my-8`}
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`flex flex-col md:flex-row justify-between items-center gap-4 ${secondaryTextColor} text-sm`}
        >
          <div>
            © {new Date().getFullYear()} Khadeeja Tariq. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#" className={`${linkHover} transition-colors`}>Privacy Policy</a>
            <a href="#" className={`${linkHover} transition-colors`}>Terms of Service</a>
          </div>
          <div>
            Made with ❤️ using React & Tailwind CSS
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;