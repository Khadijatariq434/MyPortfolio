import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiCpu, FiGitBranch, FiLock, FiShield } from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FiCode className="text-blue-500 text-2xl" />,
      skills: [
        { name: "HTML", level: 95, color: "bg-orange-500" },
        { name: "CSS", level: 90, color: "bg-blue-400" },
        { name: "JavaScript", level: 95, color: "bg-yellow-500" },
        { name: "React", level: 90, color: "bg-blue-500" },
        { name: "Tailwind CSS", level: 90, color: "bg-cyan-500" },
        { name: "EJS", level: 85, color: "bg-purple-500" }
      ]
    },
    {
      title: "Backend",
      icon: <FiCpu className="text-purple-500 text-2xl" />,
      skills: [
        { name: "Node.js", level: 85, color: "bg-green-500" },
        { name: "Express.js", level: 85, color: "bg-gray-700" },
        { name: "REST APIs", level: 80, color: "bg-indigo-500" }
      ]
    },
    {
      title: "Database",
      icon: <FiDatabase className="text-emerald-500 text-2xl" />,
      skills: [
        { name: "MongoDB", level: 80, color: "bg-emerald-500" },
        { name: "MySQL", level: 75, color: "bg-blue-700" },
        { name: "Mongoose", level: 75, color: "bg-red-500" },
      ]
    },
    {
      title: "Security & Tools",
      icon: <FiShield className="text-yellow-500 text-2xl" />,
      skills: [
        { name: "JWT", level: 80, color: "bg-pink-500" },
        { name: "bcrypt", level: 75, color: "bg-blue-600" },
        { name: "Git & GitHub", level: 80, color: "bg-red-500" },
        { name: "Postman", level: 75, color: "bg-orange-600" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 md:px-16 max-w-6xl mx-auto bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          My <span className="text-blue-600">Technical Stack</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A comprehensive showcase of my technical expertise across different domains of development.
        </p>
        <div className="w-20 h-1 bg-blue-600 mx-auto mt-6"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gray-100 rounded-lg">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
            </div>
            
            <div className="space-y-5">
              {category.skills.map((skill, skillIndex) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
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
        className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100"
      >
        <div className="flex items-center gap-3 mb-6">
          <FiLock className="text-blue-600 text-2xl" />
          <h3 className="text-xl font-bold text-gray-800">Development Practices & Methodologies</h3>
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
            <span 
              key={skill}
              className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium shadow-sm border border-gray-200 hover:bg-blue-50 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;