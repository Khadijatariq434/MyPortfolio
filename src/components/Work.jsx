import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-featured online store with payment integration, admin dashboard, and product management.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "/shopix.png",
    github: "https://github.com/Khadijatariq434/shopix",
    live: "#"
  },
  {
    id: 2,
    title: "Real Time Chatting App",
    description: "A basic real-time chat app using Node.js, Express, EJS, and Socket.io for instant messaging.",
    tags: ["Node.js", "Ejs", "Tailwind CSS"],
    image: "/chatify.png",
    github: "https://github.com/Khadijatariq434/Chatify",
    live: "#"
  },
  {
    id: 3,
    title: "Quality Arts",
    description: "A creative platform to showcase my digital artworks and designs, highlighting my passion for aesthetics and visual storytelling.",
    tags: ["React", "Express", "Tailwind", "Mongodb"],
    image: "/quality.png",
    github: "https://github.com/Khadijatariq434/noteApp",
    live: "#"
  },
  {
    id: 4,
    title: "Note App",
    description: "A backend-powered note-taking app built with Node.js, Express, and EJS, allowing users to add, edit, and delete notes.",
    tags: ["Node.js", "Ejs", "MongoDb"],
    image: "/NoteApp.png",
    github: "https://github.com/Khadijatariq434/noteApp",
    live: "#"
  },
  {
    id: 5,
    title: "Airbnb Clone",
    description: "A backend-powered airbnb clone built with Node.js, Express, and EJS, allowing users to add, edit, and delete notes.",
    tags: ["Node.js", "Ejs", "MongoDb"],
    image: "/airbnb.png",
    github: "https://github.com/Khadijatariq434/noteApp",
    live: "#"
  }
];

const Work = ({ isDarkMode }) => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  // Dynamic classes based on dark mode
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const secondaryTextColor = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const accentColor = isDarkMode ? 'text-blue-400' : 'text-blue-600';
  const cardBg = isDarkMode ? 'bg-gray-800/50' : 'bg-white/50';
  const cardBorder = isDarkMode ? 'border-gray-700/30' : 'border-gray-200/30';
  const tagBg = isDarkMode ? 'bg-blue-900/30 text-blue-300' : 'bg-blue-50 text-blue-600';
  const buttonBorder = isDarkMode ? 'border-gray-300 text-white hover:bg-gray-700' : 'border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white';
  const imageBg = isDarkMode ? 'bg-gray-700/30' : 'bg-blue-50';

  return (
    <section 
      id="work" 
      className="py-20 px-6 md:px-16 max-w-6xl mx-auto"
      style={{ 
        scrollMarginTop: '100px',
        backdropFilter: 'blur(4px)'
      }}
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
          My <span className={accentColor}>Projects</span>
        </h2>
        <div className={`w-20 h-1 ${accentColor} mx-auto`}></div>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className={`${cardBg} rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border ${cardBorder} backdrop-blur-sm`}
          >
            <div className={`h-48 ${imageBg} relative overflow-hidden`}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-contain" 
              />
            </div>
            
            <div className="p-6">
              <h3 className={`text-xl font-bold mb-2 ${textColor}`}>{project.title}</h3>
              <p className={`${secondaryTextColor} mb-4`}>{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className={`px-3 py-1 ${tagBg} text-xs font-medium rounded-full`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between">
                <a 
                  href={project.github} 
                  target='_blank'
                  rel="noopener noreferrer"
                  className={`flex items-center ${secondaryTextColor} hover:${accentColor} transition-colors`}
                  aria-label="GitHub repository"
                >
                  <FiGithub className="mr-2" /> Code
                </a>
                <a 
                  href={project.live} 
                  target='_blank'
                  rel="noopener noreferrer"
                  className={`flex items-center ${secondaryTextColor} hover:${accentColor} transition-colors`}
                  aria-label="Live demo"
                >
                  <FiExternalLink className="mr-2" /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAll(!showAll)}
          className={`border-2 ${buttonBorder} px-8 py-3 rounded-full transition-all duration-300 font-medium`}
        >
          {showAll ? 'Show Less' : 'View All Projects'}
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Work;