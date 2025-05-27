import React from 'react';
import { skills } from '../data/skills';
import { Brain, Code, Database, LayoutGrid, Server, Sparkles } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain size={36} className="text-green-400" />;
      case 'Code':
        return <Code size={36} className="text-green-400" />;
      case 'Database':
        return <Database size={36} className="text-green-400" />;
      case 'LayoutGrid':
        return <LayoutGrid size={36} className="text-green-400" />;
      case 'Server':
        return <Server size={36} className="text-green-400" />;
      case 'Sparkles':
        return <Sparkles size={36} className="text-green-400" />;
      default:
        return <Code size={36} className="text-green-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#101320]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My <span className="text-green-400">Skills</span></h2>
          <div className="w-20 h-1 bg-green-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I've developed expertise in various technologies, focusing on web development
            and artificial intelligence integration.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map(skill => (
            <div 
              key={skill.id} 
              className="bg-[#1a1f35] p-8 rounded-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-green-400/10"
            >
              <div className="mb-4">{getIcon(skill.icon)}</div>
              <h3 className="text-xl font-bold text-white mb-3">{skill.name}</h3>
              <div className="w-12 h-1 bg-green-400 mb-4"></div>
              
              <p className="text-gray-300">
                {getSkillDescription(skill.name)}
              </p>
            </div>
          ))}
        </div>
        
      
        </div>
      
    </section>
  );
};

const getSkillDescription = (skillName: string): string => {
  switch (skillName) {
    case 'Frontend Development':
      return 'Building responsive and interactive user interfaces using React, TypeScript, and modern CSS frameworks.';
    case 'Backend (Django)':
      return 'Developing robust server-side applications with Django, creating RESTful APIs and database integrations.';
    case 'Machine Learning':
      return 'Implementing ML algorithms and models for data analysis, prediction, and pattern recognition.';
    case 'React & React Native':
      return 'Creating cross-platform applications that provide native experiences on web and mobile.';
    case 'AI Model Integration':
      return 'Connecting AI models with web applications to create intelligent user experiences.';
    case 'Database Design':
      return 'Designing efficient database schemas and query optimizations for application performance.';
    default:
      return '';
  }
};

export default Skills;