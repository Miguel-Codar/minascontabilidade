import React from 'react';
import { howItWorksSteps } from '../constants';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 text-center mb-16">
         <h2 className="text-4xl font-bold text-brand-dark mb-4">Contabilidade simples, do jeito que deveria ser</h2>
         <p className="text-gray-600 text-lg max-w-2xl mx-auto">
           Sem complicação, sem linguagem difícil e sem dor de cabeça.
         </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gray-200 -z-10"></div>

            {howItWorksSteps.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                    <div className="w-24 h-24 rounded-full bg-white border-4 border-brand-red flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform bg-gray-50">
                        <span className="text-3xl font-extrabold text-brand-red">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed px-4">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;