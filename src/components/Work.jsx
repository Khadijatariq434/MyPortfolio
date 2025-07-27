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

const Work = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="work" className="py-20 px-6 md:px-16 max-w-6xl mx-auto bg-white"
    style={{ scrollMarginTop: '100px' }}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          My <span className="text-blue-600">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
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
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <div className="h-48 bg-blue-50 relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-contain" 
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full"
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
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
                  aria-label="GitHub repository"
                >
                  <FiGithub className="mr-2" /> Code
                </a>
                <a 
                  href={project.live} 
                  target='_blank'
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
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
        <button 
          onClick={() => setShowAll(!showAll)}
          className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 font-medium"
        >
          {showAll ? 'Show Less' : 'View All Projects'}
        </button>
      </motion.div>
    </section>
  );
};

export default Work;