import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ChatInterface() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState('');
  const [showNameInput, setShowNameInput] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
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
      
      setTimeout(() => {
        setMessages(prev => [...prev, {
          type: 'bot',
          content: `Hey ${userName}, it's nice meeting you! Thanks for taking the time to learn about me.`
        }]);
      }, 1000);

      setTimeout(() => {
        setMessages(prev => [...prev, {
          type: 'bot',
          content: 'From here, I\'ll let you pick what you want to learn about:'
        }]);
        setShowOptions(true);
      }, 2000);
    }
  };

  const options = ['About', 'Projects', 'Contact', 'Fun Facts'];

  const handleOptionClick = (option) => {
    setMessages(prev => [...prev, {
      type: 'user',
      content: option
    }]);
    setShowOptions(false);
  
    setTimeout(() => {
      if (option === 'About') {
        setMessages(prev => [...prev, {
          type: 'bot',
          content: "Hey, I'm Emily! I'm a product person who loves building things that make people's lives a little easier and more fun. I started Quture, an AI-powered secondhand fashion app, and I'm currently working on Pose, a photography coaching app that helps people feel confident in front of the camera. I've worked on strategy and product at Mastercard and Recurrency, and I'm also a Bessemer Product Fellow. With a background in finance and computer science from WashU, I love turning scrappy ideas into real products people actually enjoy using."
        }]);
        setTimeout(() => {
          setMessages(prev => [...prev, {
            type: 'bot',
            content: 'Would you like to learn more about my projects or other aspects of my background?'
          }]);
          setShowOptions(true);
        }, 1000);
      } else if (option === 'Fun Facts') {
        setMessages(prev => [...prev, {
          type: 'bot',
          content: "🍱 I've built a 20,000+ following on Little Red Book (小红书) sharing food contents.\n\n🏸 I'm a 6-time national badminton champion — Played for Team USA for World Juniors.\n\n🥇 Former varsity golf captain, still chasing the perfect swing and sunrise tee times.\n\n🎶 My playlists live somewhere between EDM, house, and techno — always down for a good beat drop.\n\n🥢 10 week streak on Beli, ranked over 150 restaurants."
        }]);
        setTimeout(() => {
          setMessages(prev => [...prev, {
            type: 'bot',
            content: 'Would you like to learn more about other aspects of my background?'
          }]);
          setShowOptions(true);
        }, 1000);
      } else if (option === 'Projects') {
        setMessages(prev => [...prev, {
          type: 'bot',
          content: "👗 Quture\nAn AI-powered secondhand fashion platform that makes it easy to discover, define, and exchange unique pieces — all in one seamless experience. Think Depop meets Pinterest, with personalized feeds, virtual wardrobes, and a smarter way to thrift. Check out the details here: https://emilyhan0212.wixsite.com/website\n\n📸 Pose\nA real-time photography coaching app that helps anyone look their best on camera. With live pose suggestions, shot feedback, and inspiration overlays, Pose makes every photoshoot feel like working with a creative director — all from your phone."
        }]);
        setTimeout(() => {
          setMessages(prev => [...prev, {
            type: 'bot',
            content: 'Would you like to learn more about my experience or other aspects of my background?'
          }]);
          setShowOptions(true);
        }, 1000);
      }
      
      // Add exit chat option
      setTimeout(() => {
        setMessages(prev => [...prev, {
          type: 'bot',
          content: 'Would you like to exit the chat and view my full portfolio?'
        }]);
        setShowOptions(false);
        setTimeout(() => {
          setMessages(prev => [...prev, {
            type: 'system',
            content: 'Exit Chat'
          }]);
        }, 1000);
      }, 1000);
    }, 1000);
  };

  const handleExitChat = () => {
    setMessages(prev => [...prev, {
      type: 'system',
      content: 'Redirecting to portfolio...'
    }]);
    
    setTimeout(() => {
      navigate('/portfolio');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-['Inter']">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center bg-indigo-600">
          <div className="text-white">
            <h1 className="text-4xl font-bold font-['Poppins']">Emily Han</h1>
            <p className="text-xl opacity-90 mt-2 font-['Inter']">everything product</p>
          </div>
          <button 
            onClick={handleExitChat}
            className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors backdrop-blur-sm"
          >
            Exit Chat
          </button>
        </div>
        
        <div className="h-[600px] flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
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
                    ? 'bg-indigo-600 text-white ml-auto'
                    : message.type === 'system'
                    ? 'bg-gray-200 text-gray-800 text-center cursor-pointer hover:bg-gray-300'
                    : 'bg-gray-100 text-gray-800'
                } rounded-lg p-4 max-w-[80%] shadow-sm`}
              >
                {message.content}
              </motion.div>
            ))}

            {showOptions && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="ml-auto"
              >
                <div className="bg-indigo-600 text-white rounded-lg p-4 space-y-2">
                  {options.map((option, index) => (
                    <button
                      key={index}
                      className="block w-full text-left hover:bg-white/20 px-3 py-2 rounded transition-colors"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {showNameInput && (
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border-t border-gray-200 p-4"
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
                  className="ml-2 text-blue-500 font-medium hover:text-blue-600 transition-colors"
                >
                  Send
                </button>
              </div>
            </motion.form>
          )}
        </div>
      </div>
    </div>
  );
}