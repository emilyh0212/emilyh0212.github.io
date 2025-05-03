import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <div className="max-w-2xl mx-auto p-4 min-h-screen flex flex-col">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-800 rounded-lg p-6 mb-4"
      >
        <h1 className="text-3xl font-bold mb-2">Emily Han</h1>
        <p className="text-gray-400 mb-4">Computer Science & Finance Junior @ WashU</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-gray-800 rounded-lg p-6 mb-4"
      >
        <p className="text-gray-300">
          Product Manager and technical builder passionate about AI/ML and product execution. 
          Experienced in driving end-to-end development from ideation to launch, 
          turning complex problems into scalable solutions that serve real users.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-auto flex justify-center space-x-4"
      >
        <button className="bg-primary px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors">
          View Projects
        </button>
        <button className="bg-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-600 transition-colors">
          Contact Me
        </button>
      </motion.div>
    </div>
  );
}