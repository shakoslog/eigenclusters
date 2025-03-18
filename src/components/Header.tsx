import React from 'react';

const Header = () => {
  return (
    <header className="border-b border-white/20 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold">EIGENCULTURE</h1>
        <nav className="flex gap-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white"
          >
            GitHub
          </a>
          <a 
            href="#about" 
            className="text-white/70 hover:text-white"
          >
            About
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header; 