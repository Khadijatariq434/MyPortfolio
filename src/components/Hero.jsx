import { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiDownload, FiMail, FiInstagram } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Hero = () => {
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

  return (
 <section
  id="home"
  className="min-h-screen flex flex-col md:flex-row items-center md:items-center justify-center md:justify-between px-6 md:px-16 max-w-6xl mx-auto relative pt-20 md:pt-0 text-center md:text-left"
>
  {/* Background */}
  <div className="absolute inset-0 overflow-hidden z-0">
    <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-blue-100 opacity-20 blur-xl"></div>
    <div className="absolute bottom-10 right-20 w-60 h-60 rounded-full bg-blue-200 opacity-10 blur-xl"></div>
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
      className="text-blue-600 font-medium mb-2"
    >
      Hello there 👋
    </motion.p>

    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
      I'm <span className="text-blue-600">Khadeeja</span>,
    </h1>

    <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-6 h-20 flex items-center">
      <span className="min-w-[20ch]">
        {typedText}
        <span className="animate-pulse">|</span>
      </span>
    </h2>

    <p className="text-lg text-gray-600 mb-10 max-w-md leading-relaxed">
      I build exceptional digital experiences with clean code and innovative solutions. Currently based in India.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 mb-10 items-center">
      <a
        href="/khadeeja_resume.pdf"
        download
        className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-200/50"
      >
        <FiDownload />
        Download Resume
      </a>

      <a href="#contact">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center gap-2 border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300"
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
        className="text-gray-700 hover:text-blue-600 transition-colors duration-300 p-2 rounded-full hover:bg-blue-50"
        aria-label="GitHub"
      >
        <FiGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/khadeeja-tariq-b502ba341/"
        target="_blank"
        className="text-gray-700 hover:text-blue-600 transition-colors duration-300 p-2 rounded-full hover:bg-blue-50"
        aria-label="LinkedIn"
      >
        <FiLinkedin size={24} />
      </a>
      <a
        href="https://www.instagram.com/me.khadijatariq/"
        target="_blank"
        className="text-gray-700 hover:text-blue-600 transition-colors duration-300 p-2 rounded-full hover:bg-blue-50"
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
    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-[10px] border-white shadow-2xl bg-gradient-to-br from-blue-100 to-blue-50">
      <img
        src="./profile.jpg"
        alt="Khadeeja Tariq"
        className="w-full h-full object-cover rounded-full scale-125 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-blue-600 opacity-10 mix-blend-multiply rounded-full"></div>
      <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-blue-100 opacity-30 blur-md"></div>
      <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-blue-200 opacity-20 blur-sm"></div>
    </div>
  </motion.div>
</section>


  );
};

export default Hero;