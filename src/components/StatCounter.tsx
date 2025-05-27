import React from 'react';
import { stats } from '../data/stats';

const StatCounter: React.FC = () => {
  return (
    <div className="mt-20 py-8 px-4 md:px-10 bg-[#1a1f35] rounded-2xl">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(stat => (
          <div key={stat.id} className="text-center">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-400 mb-2">{stat.value}</h3>
            <p className="text-gray-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatCounter;