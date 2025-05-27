import React from 'react';
import { Mail, Github as GitHub, Linkedin, ExternalLink, MapPin, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#121726]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In <span className="text-green-400">Touch</span></h2>
          <div className="w-20 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out to me for collaboration, job opportunities, or just to say hello!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-[#1a1f35] p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-green-400/20 p-3 rounded-lg mr-4">
                  <Mail size={24} className="text-green-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
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
                  <h4 className="text-white font-medium mb-1">Location</h4>
                  <p className="text-gray-300">Kyrgyzstan</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-400/20 p-3 rounded-lg mr-4">
                  <Phone size={24} className="text-green-400" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Available via</h4>
                  <p className="text-gray-300">Email, LinkedIn, Upwork</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mt-10 mb-6">Social Profiles</h3>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/E1dar821" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center bg-[#2a304a] px-4 py-3 rounded-lg text-white hover:bg-green-400 hover:text-[#121726] transition-colors"
              >
                <GitHub size={20} className="mr-2" />
                GitHub
              </a>
              
              <a 
                href="https://www.linkedin.com/in/eldar-tashbolotov-ten" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center bg-[#2a304a] px-4 py-3 rounded-lg text-white hover:bg-green-400 hover:text-[#121726] transition-colors"
              >
                <Linkedin size={20} className="mr-2" />
                LinkedIn
              </a>
              
              <a 
                href="https://www.upwork.com/freelancers/~01f54e5c157f7d9014?mp_source=share" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center bg-[#2a304a] px-4 py-3 rounded-lg text-white hover:bg-green-400 hover:text-[#121726] transition-colors"
              >
                <ExternalLink size={20} className="mr-2" />
                Upwork
              </a>
            </div>
          </div>
          
          <div className="bg-[#1a1f35] p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
            
            <form action="https://formsubmit.co/tashbolotov.el@gmail.com" method="POST">
              <input type="hidden" name="_captcha" value="false" />
              <div className="mb-4">
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  className="w-full bg-[#2a304a] border border-[#3a4056] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-400"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  className="w-full bg-[#2a304a] border border-[#3a4056] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-400"
                  placeholder="Your email"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-white mb-2">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  className="w-full bg-[#2a304a] border border-[#3a4056] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-400"
                  placeholder="Subject"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={5}
                  className="w-full bg-[#2a304a] border border-[#3a4056] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-400"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-green-400 text-[#121726] font-medium rounded-lg hover:bg-green-500 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;