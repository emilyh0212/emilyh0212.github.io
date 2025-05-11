import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Portfolio() {
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [messages, setMessages] = useState([{
    type: 'bot',
    content: "Hi! 👋 I'm Emily, a product builder passionate about AI and technology.\n\nWhat's your name?"
  }]);
  const [userInput, setUserInput] = useState('');
  const [userName, setUserName] = useState('');
  const [stage, setStage] = useState('name');

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    // Add user message
    setMessages(prev => [...prev, {
      type: 'user',
      content: userInput
    }]);

    // Clear input
    const currentInput = userInput;
    setUserInput('');

    // Handle different chat stages
    if (stage === 'name') {
      setUserName(currentInput);
      setTimeout(() => {
        setMessages(prev => [...prev, {
          type: 'bot',
          content: `Nice to meet you, ${currentInput}! 😊\n\nI'd love to tell you more about Emily. What would you like to know?\n\n• About Emily\n• Projects (Quture, Pose, Cat vs Environment)\n• Skills & Experience\n• Achievements\n• Contact Info`
        }]);
        setStage('topic');
      }, 1000);
      return;
    }

    // Handle topic selection
    const input = currentInput.toLowerCase();
    let response = "I'm not sure about that. Would you like to know about Emily's projects, experience, or achievements?";

    if (input.includes('about')) {
      response = `Emily is a product builder and AI enthusiast who combines technical expertise with creative problem-solving. She's passionate about creating innovative solutions that enhance human experiences, especially in the areas of AI/ML, mobile development, and game design.\n\nWould you like to know more about her projects or experience?`;
    } else if (input.includes('project')) {
      response = "Emily has worked on several exciting projects:\n\n• Quture - AI-powered fashion platform\n• Pose - Photography coaching app\n• Cat vs Environment - Fun arcade game\n\nWhich one would you like to learn more about?";
    } else if (input.includes('skills') || input.includes('experience')) {
      response = "Emily's expertise includes:\n\n• Product Management\n• AI/ML Development\n• Mobile App Development\n• Game Design\n• Full-stack Development\n\nShe's also:\n• A Bessemer Product Fellow\n• Worked at Mastercard and Recurrency\n• Built a 20,000+ following on Little Red Book";
    } else if (input.includes('achievements')) {
      response = "Here are some of Emily's notable achievements:\n\n🏆 Bessemer Product Fellow\n💼 Product & Strategy at Mastercard and Recurrency\n🍱 20,000+ followers on Little Red Book\n🏸 6-time national badminton champion\n🥇 Former varsity golf captain";
    } else if (input.includes('contact')) {
      response = "You can connect with Emily through:\n\n• LinkedIn: /in/emilyh0212\n• GitHub: @emilyh0212\n• Email: [Contact through LinkedIn]\n\nFeel free to reach out!";
    }

    // Add bot response with delay
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        content: response
      }]);
    }, 1000);
  };
  const projects = [
    {
      title: 'Quture',
      description: 'An AI-powered secondhand fashion platform that makes it easy to discover, define, and exchange unique pieces — all in one seamless experience. Think Depop meets Pinterest, with personalized feeds, virtual wardrobes, and a smarter way to thrift.',
      link: 'https://emilyhan0212.wixsite.com/website',
      downloadLink: 'https://linktr.ee/reyquture',
      image: '/images/Thumbnail.jpg',  // Updated to use the new thumbnail
      tags: ['AI/ML', 'Product', 'Fashion']
    },
    {
      title: 'Pose',
      description: 'A real-time photography coaching app that helps anyone look their best on camera. With live pose suggestions, shot feedback, and inspiration overlays, Pose makes every photoshoot feel like working with a creative director — all from your phone.',
      link: 'https://silver-floss-e13.notion.site/Pose-Feature-Canvas-1d89a7fa99dc80c882a5e7da041d9391',
      image: '/images/posethumb.png',
      tags: ['AI/ML', 'Mobile', 'Photography']
    },
    {
      title: 'Cat vs Environment',
      description: 'A fast-paced arcade game where players control a cat dodging obstacles and collecting treasures. Features include power-ups, dynamic difficulty scaling, and various game mechanics like double jump and dash abilities.',
      link: 'https://bombim21.itch.io/cat-vs-environment?secret=cKBXxlj2b7VLgyJbTYTtJ6glH4',
      image: '/images/game.png',  // This is already correctly set
      tags: ['Game Development', 'Unity', 'C#']
    }
  ];

  const achievements = [
    "🏆 Bessemer Product Fellow",
    "🍱 20,000+ followers on Little Red Book (小红书)",
    "🏸 6-time national badminton champion — Team USA World Juniors",
    "🥇 Former varsity golf captain"
  ];

  const funFacts = [
    "⭐️ 4.97 Uber rating",
    {
      text: "🍜 Rated 100+ restaurants on Beli",
      link: "https://beliapp.co/app/ehan0212"
    },
    "✈️ United Airlines Gold Member",
    "As you can tell, I'm extremely passionate about fashion and food!"
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/emilyh0212/',
      icon: 'linkedin'
    },
    {
      name: 'Email',
      url: 'mailto:your.email@example.com',
      icon: 'email'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/emilyh0212',
      icon: 'github'
    }
  ];

  return (
    <div className="min-h-screen bg-[#171c28] text-white">
      {/* Navigation */}
      <nav className="py-4 px-8 flex justify-between items-center">
        <div className="text-2xl font-cursive">&lt; Emily Han /&gt;</div>
        <div className="flex space-x-6">
          <a href="#education" className="hover:text-[#64ffda] transition-colors">Education</a>
          <a href="#skills" className="hover:text-[#64ffda] transition-colors">Skills</a>
          <a href="#experience" className="hover:text-[#64ffda] transition-colors">Work Experiences</a>
          <a href="#projects" className="hover:text-[#64ffda] transition-colors">Projects</a>
          <a href="#achievements" className="hover:text-[#64ffda] transition-colors">Achievements</a>
          <a href="#contact" className="hover:text-[#64ffda] transition-colors">Contact Me</a>
        </div>
      </nav>

      {/* Chat Interface */}
      <div className={`fixed bottom-4 right-4 z-50 ${isChatOpen ? 'w-96 h-[500px]' : 'w-auto h-auto'}`}>
        <div className="bg-[#1a1a1a] rounded-lg shadow-xl overflow-hidden">
          {/* Chat Header */}
          <div className="flex justify-between items-center p-4 bg-[#252525] border-b border-[#333]">
            <h3 className="text-lg font-semibold font-['JetBrains_Mono']">Chat with Emily's AI</h3>
            <button
              onClick={() => setIsChatOpen(!isChatOpen)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {isChatOpen ? '−' : '+'}
            </button>
          </div>
          
          {/* Chat Content */}
          {isChatOpen && (
            <div className="flex flex-col h-[440px]">
              <div className="flex-1 p-4 overflow-y-auto">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-4 ${message.type === 'user' ? 'text-right' : ''}`}
                  >
                    <div
                      className={`inline-block p-3 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-[#252525] text-gray-300'
                      }`}
                    >
                      <p className="whitespace-pre-wrap font-['JetBrains_Mono']">{message.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Chat Input */}
              <div className="p-4 border-t border-[#333]">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type your message..."
                    className="flex-1 bg-[#252525] text-white rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 font-['JetBrains_Mono']"
                  />
                  <button 
                    onClick={handleSendMessage}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors font-['JetBrains_Mono']"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between mb-20 px-4"
        >
          {/* Text Content */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="md:w-1/2 text-left"
          >
            <motion.h1 
              className="text-6xl md:text-7xl font-bold mb-4 text-[#ccd6f6] font-['Poppins']"
            >
              Emily Han
            </motion.h1>
            <motion.p 
              className="text-xl text-[#8892b0] font-['Inter'] mb-4"
            >
              Product Builder
            </motion.p>
            
            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex space-x-6 mb-8"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors text-2xl"
                >
                  <FontAwesomeIcon 
                    icon={
                      link.name === 'GitHub' ? faGithub :
                      link.name === 'LinkedIn' ? faLinkedin :
                      faEnvelope
                    }
                    size="2x"
                  />
                </a>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 max-w-xl text-lg leading-relaxed"
            >
              I'm a product builder and AI enthusiast passionate about creating innovative solutions that enhance human experiences. With a background spanning AI/ML, mobile development, and game design, I blend technical expertise with creative problem-solving to build products that matter.
            </motion.p>
          </motion.div>

          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0"
          >
            <img
              src="/images/profilepic.JPG"
              alt="Emily Han"
              className="w-80 h-80 rounded-full object-cover shadow-xl"
            />
          </motion.div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-6xl font-light mb-16 text-white">Education</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#171c28] p-8 rounded-xl text-gray-300 border-none"
          >
            <div className="flex items-start gap-8">
              <img 
                src="/images/Washington University Seal.png" 
                alt="Washington University in St. Louis Logo" 
                className="w-32 h-32 object-contain"
              />
              <div>
                <h3 className="text-3xl font-bold mb-2 text-white">Washington University in St. Louis</h3>
                <p className="text-xl mb-2 text-gray-300">Bachelor of Science</p>
                <p className="text-xl mb-2 text-gray-300">Major: Computer Science, Finance</p>
                <p className="text-xl mb-4 text-gray-300">Expected Graduation: May 2025</p>
                <p className="text-xl mb-4 text-gray-300">GPA: 3.8</p>
                <div className="space-y-2 text-gray-400">
                  <p>• Dean's List: All Semesters</p>
                  <p>• Managerial Statistics Teaching Assistant</p>
                  <p>• Co-Founder, WashU Financial Analysis Club</p>
                  <p>• McKelvey Build Fellowship</p>
                  <p>• WashU Product Management</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#0A1929] rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl border border-blue-900/20"
              >
                {project.image && (
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 text-blue-300">{project.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="bg-blue-900/30 px-4 py-1.5 rounded-full text-sm text-blue-300 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors font-medium flex items-center"
                    >
                      View Project <span className="ml-2">→</span>
                    </a>
                    {project.downloadLink && (
                      <a
                        href={project.downloadLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-400 hover:text-purple-300 transition-colors font-medium flex items-center"
                      >
                        Download <span className="ml-2">→</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#0A1929] p-6 rounded-xl text-gray-300 hover:transform hover:scale-105 transition-all duration-300 border border-blue-900/20"
              >
                {achievement}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Facts Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Fun Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {funFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#0A1929] p-6 rounded-xl text-gray-300 hover:transform hover:scale-105 transition-all duration-300 border border-blue-900/20"
              >
                {typeof fact === 'string' ? (
                  fact
                ) : (
                  <a 
                    href={fact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {fact.text}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Blog Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Blog</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#0A1929] p-8 rounded-xl text-gray-300 hover:transform hover:scale-105 transition-all duration-300 border border-blue-900/20"
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-300">As a College Student: How I'm Learning to Handle Rejections</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A personal reflection on dealing with rejection in college, from internship applications to personal growth. I share my journey of understanding that rejection doesn't mean you're not good enough - sometimes it just means "not now" or "not here."
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-blue-900/30 px-4 py-1.5 rounded-full text-sm text-blue-300 font-medium">Personal Growth</span>
              <span className="bg-blue-900/30 px-4 py-1.5 rounded-full text-sm text-blue-300 font-medium">College Life</span>
              <span className="bg-blue-900/30 px-4 py-1.5 rounded-full text-sm text-blue-300 font-medium">Career</span>
            </div>
            <a
              href="https://medium.com/@emilyhan0212/as-a-college-student-how-im-learning-to-handle-rejections-51c2e0a2f61f"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium flex items-center"
            >
              Read More <span className="ml-2">→</span>
            </a>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}