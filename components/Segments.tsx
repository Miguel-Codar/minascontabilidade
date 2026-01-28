import React from 'react';
import { segments } from '../constants';

const Segments: React.FC = () => {
  return (
    <section className="relative py-20 bg-gray-50 z-20">
      <div className="container mx-auto px-4">
        {/* Header content (kept from previous version to maintain context, though reference focuses on cards) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-red font-bold text-sm uppercase tracking-widest mb-3">Nossos Serviços</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">Soluções completas para a rotina do seu consultório</h3>
          <p className="text-gray-600 text-lg font-light leading-relaxed">
             Atendemos médicos, clínicas e profissionais da saúde com uma contabilidade prática.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((segment, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.1)] transition-all duration-300 flex flex-col items-center text-center group"
            >
              {/* Icon Area */}
              <div className="mb-6">
                <segment.Icon 
                  size={56} 
                  strokeWidth={1.5}
                  className="text-gray-800 fill-brand-red/10 group-hover:text-brand-red transition-colors duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {segment.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed mb-8 flex-grow">
                {segment.description}
              </p>

              {/* Button */}
              <button className="bg-brand-red hover:bg-brand-red-dark text-white font-bold py-3 px-6 rounded-full text-sm w-full shadow-md transition-colors duration-300">
                Solicitar Orçamento
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Segments;