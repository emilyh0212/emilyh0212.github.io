import { motion } from 'framer-motion';

export default function ProjectsSection() {
  const projects = [
    {
      title: "Project 1",
      description: "Description of your first project",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    // Add more projects here
  ];

  return (
    <section className="py-20 px-4">
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
          >
            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-gray-600 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <a 
              href={project.link}
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}