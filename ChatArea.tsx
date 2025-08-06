import React from 'react';
import { Mic, Paperclip, Send } from 'lucide-react';

export default function ChatArea() {
  return (
    <div className="flex-1 flex flex-col justify-between bg-black relative">
      <div className="p-10 text-center text-lg">
        <h1 className="text-2xl font-semibold mb-2 orbitron">How can I help you today?</h1>
        <p className="text-gray-400 orbitron">Start a conversation with XenonAI</p>
      </div>
      <div className="w-full px-6 pb-6">
        <div className="flex items-center bg-gray-900 rounded-xl px-4 py-3">
          <button className="mr-3 text-gray-400 hover:text-white transition-transform hover:scale-110">
            <Mic size={18} />
          </button>
          <input
            type="text"
            placeholder="Ask anything to Xenon..."
            className="flex-1 bg-transparent outline-none text-white"
          />
          <button className="ml-3 text-gray-400 hover:text-white transition-transform hover:scale-110">
            <Paperclip size={18} />
          </button>
          <button className="ml-3 bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition-transform hover:scale-110">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}