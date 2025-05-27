import React from 'react';
import StatCounter from './StatCounter';
import photo3 from '../assets/images/photo3.jpg';
import photo2 from '../assets/images/photo2.jpg';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#101320]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About <span className="text-green-400">Me</span></h2>
          <div className="w-20 h-1 bg-green-400 mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="w-80 h-80 md:w-100 md:h-100 rounded-lg bg-gradient-to-r from-blue-500 to-green-400 absolute -top-4 -left-4 z-0"></div>
              <img 
                src={photo3} 
                alt="Eddie Tashbolotov in graduation" 
                className="w-80 h-80 md:w-100 md:h-100 object-cover rounded-lg relative z-10"
              />
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <h3 className="text-xl md:text-2xl font-bold text-green-400 mb-4">Web Developer & AI Specialist</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With 1.5 years of experience in freelance work on habr.com and various internships, 
              I've developed a strong foundation in creating web applications with AI integration. 
              My passion lies at the intersection of web development and artificial intelligence.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I specialize in developing responsive web applications using React and Django, while also 
              creating standalone AI models using Convolutional Neural Networks (CNN) and machine learning 
              techniques. My goal is to bridge the gap between cutting-edge AI technology and user-friendly 
              web interfaces.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <p className="text-white mb-2">
                  <span className="font-bold text-green-400">Name:</span> Eldar Tashbolotov
                </p>
                <p className="text-white mb-2">
                  <span className="font-bold text-green-400">Experience:</span> 1.5 Years
                </p>
              </div>
              <div>
                <p className="text-white mb-2">
                  <span className="font-bold text-green-400">Email:</span> tashbolotov.el@gmail.com
                </p>
                <p className="text-white mb-2">
                  <span className="font-bold text-green-400">From:</span> Kyrgyzstan
                </p>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 bg-green-400 text-[#121726] font-medium rounded-full hover:bg-green-500 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <StatCounter />
      </div>
    </section>
  );
};

export default About;