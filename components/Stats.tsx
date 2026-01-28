import React from 'react';
import { stats } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-2xl font-light text-gray-400 uppercase tracking-widest mb-16">Números que falam por nós</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center p-6 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
              <span className="text-5xl md:text-6xl font-extrabold text-brand-red mb-4 block">{stat.value}</span>
              <p className="text-gray-300 text-lg font-medium max-w-[200px]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;