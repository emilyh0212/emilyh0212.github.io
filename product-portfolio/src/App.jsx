import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ChatInterface from './components/ChatInterface'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <AnimatePresence mode='wait'>
          <Routes>
            <Route path="/" element={<ChatInterface />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  )
}

export default App