import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed w-full z-50 top-0 bg-black border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <Link href="/" className="text-white text-xl font-bold">
          EIGENCULTURE
        </Link>
        <nav className="flex gap-4">
          <Link 
            href="/about" 
            className="text-white/70 hover:text-white transition-colors"
          >
            Motivations
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 