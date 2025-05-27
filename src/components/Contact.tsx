import React from 'react';
import { Mail, Github as GitHub, Linkedin, ExternalLink, MapPin, Phone, Clock, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center bg-[#121726] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-400 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Create Something <span className="text-green-400">Amazing</span> Together</h2>
          <div className="w-24 h-1 bg-green-400 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            I'm always excited to connect with fellow developers, potential clients, and tech enthusiasts. 
            Whether you have a project in mind, need technical expertise, or just want to discuss the latest in web development and AI, 
            I'm here to help turn ideas into reality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-[#1a1f35] p-8 rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <span className="bg-green-400/20 p-2 rounded-lg mr-3">
                <Mail size={24} className="text-green-400" />
              </span>
              Contact Information
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-green-400/20 p-3 rounded-lg mr-4">
                  <Mail size={24} className="text-green-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Email</h4>
                  <a href="mailto:tashbolotov.el@gmail.com" className="text-gray-300 hover:text-green-400 transition-colors">
                    tashbolotov.el@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-400/20 p-3 rounded-lg mr-4">
                  <MapPin size={24} className="text-green-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Location</h4>
                  <p className="text-gray-300">Bishkek, Kyrgyzstan</p>
                  <p className="text-gray-400 text-sm mt-1">Available for remote work worldwide</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-400/20 p-3 rounded-lg mr-4">
                  <Clock size={24} className="text-green-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Availability</h4>
                  <p className="text-gray-300">Full-time | Contract | Freelance</p>
                  <p className="text-gray-400 text-sm mt-1">Flexible hours, adapting to your timezone</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-400/20 p-3 rounded-lg mr-4">
                  <Calendar size={24} className="text-green-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Response Time</h4>
                  <p className="text-gray-300">Usually within 8 hours</p>
                  <p className="text-gray-400 text-sm mt-1">Available for urgent consultations</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-[#1a1f35] p-8 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Professional Networks</h3>
              <p className="text-gray-300 mb-6">
                Connect with me on professional platforms where I share insights, contribute to projects, and engage with the tech community.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://github.com/E1dar821" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center bg-[#2a304a] px-6 py-4 rounded-lg text-white hover:bg-green-400 hover:text-[#121726] transition-all duration-300 transform hover:-translate-y-1"
                >
                  <GitHub size={24} className="mr-3" />
                  <div>
                    <div className="font-medium">GitHub</div>
                    <div className="text-sm opacity-75">Check out my code</div>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/eldar-tashbolotov-ten" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center bg-[#2a304a] px-6 py-4 rounded-lg text-white hover:bg-green-400 hover:text-[#121726] transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Linkedin size={24} className="mr-3" />
                  <div>
                    <div className="font-medium">LinkedIn</div>
                    <div className="text-sm opacity-75">Professional network</div>
                  </div>
                </a>
                
                <a 
                  href="https://www.upwork.com/freelancers/~01f54e5c157f7d9014?mp_source=share" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center bg-[#2a304a] px-6 py-4 rounded-lg text-white hover:bg-green-400 hover:text-[#121726] transition-all duration-300 transform hover:-translate-y-1"
                >
                  <ExternalLink size={24} className="mr-3" />
                  <div>
                    <div className="font-medium">Upwork</div>
                    <div className="text-sm opacity-75">Hire me for projects</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-[#1a1f35] p-8 rounded-xl shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">Why Work With Me?</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Dedicated to delivering high-quality, scalable solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Strong focus on clean code and best practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Experience in both frontend and AI integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  <span>Excellent communication and project management skills</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;