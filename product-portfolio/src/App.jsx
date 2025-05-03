import React from 'react';
import { chatScript } from './data/chatScript';

function App() {
  return (
    <div className="min-h-screen bg-background text-white p-6 font-mono">
      <h1 className="text-2xl font-bold text-primary mb-6">👾 Emily's AI Chat Portfolio</h1>
      
      {chatScript.map((msg, index) => (
        <div key={index} className={`mb-4 ${msg.type === 'emily' ? 'text-left' : 'text-right'}`}>
          <div className="bg-accent text-primary px-4 py-2 rounded-lg max-w-md inline-block">
            {msg.text}
          </div>

          {/* Render buttons if present */}
          {msg.buttons && (
            <div className="mt-2 space-x-2">
              {msg.buttons.map((btn, idx) => (
                <button
                  key={idx}
                  className="bg-primary text-black px-3 py-1 rounded hover:bg-white transition"
                >
                  {btn}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;