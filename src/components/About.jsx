import { motion } from 'framer-motion';
import { FiAward, FiCode, FiUsers } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-16 max-w-6xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          About <span className="text-blue-600">Me</span>
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
      </motion.div>

      {/* Only Content Section (Full Width) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-6">
          MERN Stack Developer from India
        </h3>

        <p className="text-gray-600 mb-6 leading-relaxed">
          I'm <span className="font-semibold text-blue-600">Khadeeja Tariq</span>, a recent BCA graduate from BIMT Budaun with a strong passion for backend development.
          <br /><br />
          I specialize in the MERN stack — MongoDB, Express.js, React, and Node.js — with a deep interest in building efficient APIs, secure authentication systems, and clean, modular backend architectures.
          <br /><br />
          I enjoy exploring real-world projects to sharpen my skills and follow best practices like separating route logic, using JWT, bcrypt, and preferring fetch for API calls. I'm eager to apply my knowledge and grow as a backend developer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="flex justify-center mb-4">
              <FiCode className="text-blue-600 text-3xl" />
            </div>
            <h4 className="font-bold text-gray-800 mb-2">5+ Projects</h4>
            <p className="text-gray-600 text-sm">Built using the MERN stack</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="flex justify-center mb-4">
              <FiUsers className="text-blue-600 text-3xl" />
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Always Learning</h4>
            <p className="text-gray-600 text-sm">Open to collaborations and internships</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center">
            <div className="flex justify-center mb-4">
              <FiAward className="text-blue-600 text-3xl" />
            </div>
            <h4 className="font-bold text-gray-800 mb-2">Fresh Graduate</h4>
            <p className="text-gray-600 text-sm">Ready to enter the professional world</p>
          </div>
        </div>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-blue-200/50">
          <a href="/Khadeeja_Tariq_MERN_CV.pdf" download>
          Download CV</a>
          
        </button>
      </motion.div>
    </section>
  );
};

export default About;
