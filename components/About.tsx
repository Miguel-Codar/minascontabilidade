import React from 'react';
import { differentials } from '../constants';
import { Check } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Image/Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Médicos em reunião" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-dark/20"></div>
            </div>
            {/* Floating Experience Badge */}
            <div className="absolute -bottom-8 -right-8 bg-brand-red text-white p-8 rounded-xl shadow-xl hidden md:block">
              <p className="text-5xl font-bold mb-1">10+</p>
              <p className="text-sm font-medium uppercase tracking-wide">Anos de<br/>Experiência</p>
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div>
            <span className="text-brand-red font-bold text-sm uppercase tracking-widest mb-2 block">Sobre Nós</span>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Especializados em você
            </h2>
            <div className="space-y-6 text-gray-600 text-lg font-light leading-relaxed mb-10">
              <p>
                Somos uma contabilidade com mais de 10 anos de experiência, especializada em atender médicos e profissionais da saúde em Minas Gerais e em todo o Brasil.
              </p>
              <p>
                Unimos conhecimento técnico, tecnologia e atendimento próximo para simplificar a sua vida financeira e ajudar seu consultório a crescer de forma segura.
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-6 border-b border-gray-100 pb-2">
              Nossos diferenciais
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {differentials.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="text-gray-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;