import React from 'react';
import { Download } from 'lucide-react';
import FloatingElements from './FloatingElements';
import photo1 from '../assets/images/photo1.jpg';
import photo2 from '../assets/images/photo2.jpg';
import photo3 from '../assets/images/photo3.jpg';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-[#121726] flex items-center overflow-hidden pt-16">
      <FloatingElements />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 z-10">
            <div className="text-green-400 font-bold mb-4 flex items-center">
            
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Hi, you can call me <span className="text-green-400">Eddie</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-8">
              Web Developer & AI Specialist
            </h2>
           
          </div>
          
          <div className="lg:w-1/2 z-10 relative">
            <div className="w-80 h-80 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-400 to-green-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            
            <img 
              src={photo1} 
              alt="Eddie Tashbolotov" 
              className="w-80 h-90 md:w-100 md:h-100 object-cover rounded-full border-4 border-[#121726] relative z-10 mx-auto"
            />
            
            <div className="absolute top-0 right-0 bg-[#2563EB] p-3 rounded-full z-20 animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M12 18v-6"></path><path d="M8 18v-1"></path><path d="M16 18v-3"></path><path d="M20 18v-8"></path><path d="M4 18v-2"></path>
                <path d="M4 10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></path>
              </svg>
            </div>
            
            <div className="absolute bottom-0 left-0 bg-green-400 p-3 rounded-full z-20 animate-pulse">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#121726]">
                <path d="M12 6C6.5 6 2 8.5 2 12s4.5 6 10 6c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 7.012 17.461 6 12 6z"></path>
                <circle cx="7.5" cy="11.5" r="1.5"></circle>
                <circle cx="12" cy="11.5" r="1.5"></circle>
                <circle cx="16.5" cy="11.5" r="1.5"></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <a 
          href="#about" 
          className="w-10 h-10 flex items-center justify-center rounded-full border border-green-400 text-green-400 animate-bounce"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero