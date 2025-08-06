import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ChatArea from './ChatArea';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <Sidebar toggleTheme={toggleTheme} theme={theme} />
      <div className={`flex-1 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <ChatArea />
      </div>
    </div>
  );
}
