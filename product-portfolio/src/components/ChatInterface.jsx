import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState('');
  const [showNameInput, setShowNameInput] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const initialMessages = [
    {
      type: 'bot',
      content: 'Hi, I\'m Emily! 👋'
    },
    {
      type: 'bot',
      content: 'I\'m a Computer Science & Finance Junior at WashU, passionate about building AI/ML solutions and driving product execution.'
    },
    {
      type: 'user-input',
      content: 'What\'s your name?'
    }
  ];

  useEffect(() => {
    if (currentMessageIndex < initialMessages.length) {
      const timer = setTimeout(() => {
        setMessages(prev => [...prev, initialMessages[currentMessageIndex]]);
        setCurrentMessageIndex(prev => prev + 1);
        
        if (initialMessages[currentMessageIndex].type === 'user-input') {
          setShowNameInput(true);
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [currentMessageIndex]);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (userName.trim()) {
      setMessages(prev => [
        ...prev,
        {
          type: 'user',
          content: `Hi Emily! Nice meeting you, I'm ${userName}`
        }
      ]);
      setShowNameInput(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4 min-h-screen flex flex-col">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
        <h1 className="text-4xl font-bold text-gray-900">Emily Han</h1>
        <p className="text-xl text-gray-600 mt-2">Computer Science & Finance</p>
      </div>
      
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${
              message.type === 'bot' 
                ? 'bg-gray-100 text-gray-800' 
                : message.type === 'user' 
                ? 'bg-blue-500 text-white ml-auto'
                : 'bg-gray-100 text-gray-800'
            } rounded-lg p-4 max-w-[80%] shadow-sm`}
          >
            {message.content}
          </motion.div>
        ))}
      </div>

      {showNameInput && (
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-gray-200 pt-4"
          onSubmit={handleNameSubmit}
        >
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Type your name..."
              className="flex-1 bg-transparent outline-none"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <button 
              type="submit" 
              className="ml-2 text-blue-500 font-medium"
            >
              Send
            </button>
          </div>
        </motion.form>
      )}
    </div>
  );
}