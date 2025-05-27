import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#121726]/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex justify-between items-center">
          <a href="#" className="text-green-400 font-cursive text-2xl font-bold">Eldar Tashbolotov</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-white hover:text-green-400 transition-colors">Home</a>
            <a href="#about" className="text-white hover:text-green-400 transition-colors">About Me</a>
            <a href="#projects" className="text-white hover:text-green-400 transition-colors">Projects</a>
            <a href="#skills" className="text-white hover:text-green-400 transition-colors">Skills</a>
            <a href="#contact" className="text-white hover:text-green-400 transition-colors">Contact</a>
          </div>
          
          <a href="#contact" className="hidden md:block px-6 py-2 bg-transparent border border-green-400 text-green-400 rounded-full hover:bg-green-400 hover:text-[#121726] transition-all">
            Hire Me
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#121726] mt-2 p-4 rounded-lg">
            <div className="flex flex-col space-y-3">
              <a href="#" className="text-white hover:text-green-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#about" className="text-white hover:text-green-400 transition-colors" onClick={() => setIsMenuOpen(false)}>About Me</a>
              <a href="#projects" className="text-white hover:text-green-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#skills" className="text-white hover:text-green-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Skills</a>
              <a href="#contact" className="text-white hover:text-green-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <a 
                href="#contact" 
                className="px-6 py-2 bg-transparent border border-green-400 text-green-400 rounded-full hover:bg-green-400 hover:text-[#121726] transition-all text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;