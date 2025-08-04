import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiCpu, FiGitBranch, FiLock, FiShield } from 'react-icons/fi';

const Skills = ({ isDarkMode }) => {
  // Dynamic classes based on dark mode
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900';
  const secondaryTextColor = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const accentColor = isDarkMode ? 'text-blue-400' : 'text-blue-600';
  const cardBg = isDarkMode ? 'bg-gray-800/50' : 'bg-white/50';
  const cardBorder = isDarkMode ? 'border-gray-700/30' : 'border-gray-200/30';
  const progressBg = isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100';
  const iconBg = isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100';
  const badgeBg = isDarkMode ? 'bg-gray-700/50 text-gray-200 border-gray-600' : 'bg-white text-gray-700 border-gray-200';
  const badgeHover = isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-blue-50';
  const sectionBg = isDarkMode ? 'from-blue-900/10 to-indigo-900/10 border-blue-900/20' : 'from-blue-50 to-indigo-50 border-blue-100';

  const skillCategories = [
    {
      title: "Frontend",
      icon: <FiCode className={isDarkMode ? "text-blue-400" : "text-blue-500"} />,
      skills: [
        { name: "HTML", level: 95, color: isDarkMode ? "bg-orange-400" : "bg-orange-500" },
        { name: "CSS", level: 90, color: isDarkMode ? "bg-blue-300" : "bg-blue-400" },
        { name: "JavaScript", level: 95, color: isDarkMode ? "bg-yellow-400" : "bg-yellow-500" },
        { name: "React", level: 90, color: isDarkMode ? "bg-blue-400" : "bg-blue-500" },
        { name: "Tailwind CSS", level: 90, color: isDarkMode ? "bg-cyan-400" : "bg-cyan-500" },
        { name: "EJS", level: 85, color: isDarkMode ? "bg-purple-400" : "bg-purple-500" }
      ]
    },
    {
      title: "Backend",
      icon: <FiCpu className={isDarkMode ? "text-purple-400" : "text-purple-500"} />,
      skills: [
        { name: "Node.js", level: 85, color: isDarkMode ? "bg-green-400" : "bg-green-500" },
        { name: "Express.js", level: 85, color: isDarkMode ? "bg-gray-500" : "bg-gray-700" },
        { name: "REST APIs", level: 80, color: isDarkMode ? "bg-indigo-400" : "bg-indigo-500" }
      ]
    },
    {
      title: "Database",
      icon: <FiDatabase className={isDarkMode ? "text-emerald-400" : "text-emerald-500"} />,
      skills: [
        { name: "MongoDB", level: 80, color: isDarkMode ? "bg-emerald-400" : "bg-emerald-500" },
        { name: "MySQL", level: 75, color: isDarkMode ? "bg-blue-500" : "bg-blue-700" },
        { name: "Mongoose", level: 75, color: isDarkMode ? "bg-red-400" : "bg-red-500" },
      ]
    },
    {
      title: "Security & Tools",
      icon: <FiShield className={isDarkMode ? "text-yellow-400" : "text-yellow-500"} />,
      skills: [
        { name: "JWT", level: 80, color: isDarkMode ? "bg-pink-400" : "bg-pink-500" },
        { name: "bcrypt", level: 75, color: isDarkMode ? "bg-blue-500" : "bg-blue-600" },
        { name: "Git & GitHub", level: 80, color: isDarkMode ? "bg-red-400" : "bg-red-500" },
        { name: "Postman", level: 75, color: isDarkMode ? "bg-orange-500" : "bg-orange-600" }
      ]
    }
  ];

  return (
    <section 
      id="skills" 
      className="py-20 px-6 md:px-16 max-w-6xl mx-auto"
      style={{ backdropFilter: 'blur(4px)' }}
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textColor}`}>
          My <span className={accentColor}>Technical Stack</span>
        </h2>
        <p className={`${secondaryTextColor} max-w-2xl mx-auto`}>
          A comprehensive showcase of my technical expertise across different domains of development.
        </p>
        <div className={`w-20 h-1 ${accentColor} mx-auto mt-6`}></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            className={`${cardBg} rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border ${cardBorder} backdrop-blur-sm`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 ${iconBg} rounded-lg`}>
                {category.icon}
              </div>
              <h3 className={`text-xl font-bold ${textColor}`}>{category.title}</h3>
            </div>
            
            <div className="space-y-5">
              {category.skills.map((skill, skillIndex) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className={`font-medium ${secondaryTextColor}`}>{skill.name}</span>
                    <span className={secondaryTextColor}>{skill.level}%</span>
                  </div>
                  <div className={`w-full ${progressBg} rounded-full h-2.5 overflow-hidden`}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ 
                        duration: 1, 
                        delay: 0.3 + (catIndex * 0.05) + (skillIndex * 0.03),
                        type: "spring"
                      }}
                      className={`h-full rounded-full ${skill.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Skills */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className={`mt-16 bg-gradient-to-r ${sectionBg} rounded-xl p-8 border backdrop-blur-sm`}
      >
        <div className="flex items-center gap-3 mb-6">
          <FiLock className={accentColor} />
          <h3 className={`text-xl font-bold ${textColor}`}>Development Practices & Methodologies</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {[
            "Authentication Systems",
            "Data Encryption",
            "API Security",
            "Database Optimization",
            "Responsive Design",
            "Agile Development",
            "Test-Driven Development",
            "CI/CD Pipelines",
            "Performance Optimization"
          ].map((skill) => (
            <motion.span 
              key={skill}
              whileHover={{ y: -2 }}
              className={`px-4 py-2 ${badgeBg} rounded-full text-sm font-medium shadow-sm border ${badgeHover} transition-all`}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;