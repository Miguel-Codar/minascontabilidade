import React from 'react';
import { extraServices } from '../constants';

const ExtraServices: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center mb-16">
           <h2 className="text-3xl text-gray-700 uppercase mb-12">SOLUÇÕES INTELIGENTES</h2>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {extraServices.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
              <div className="bg-gray-800 text-white p-3 rounded-full flex-shrink-0">
                <service.Icon size={24} />
              </div>
              <div className="text-left">
                  <h3 className="text-lg font-bold text-brand-red mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <button className="bg-brand-red hover:bg-brand-red-dark text-white font-semibold py-2 px-6 rounded-full text-xs transition-colors">
                    Solicitar Orçamento
                  </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Careers Banner */}
      <div className="mt-20 relative w-full h-[300px] bg-gradient-to-r from-red-900 to-red-800 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12 text-white relative z-10">
              <div className="text-center md:text-left">
                 <div className="flex flex-col items-center border-b pb-4 mb-4 border-white/30">
                     <span className="uppercase text-sm tracking-widest mb-2">Trabalhe Conosco</span>
                     <div className="text-5xl font-script text-white">Equipe de Sucesso</div>
                 </div>
              </div>
              <div className="text-center md:text-left">
                  <p className="text-sm mb-6 max-w-md">Conheça nossas vagas e oportunidades para transformar sua carreira profissional!</p>
                  <button className="border border-white text-white hover:bg-white hover:text-brand-red font-bold py-2 px-8 rounded-full text-xs uppercase transition-colors">
                      Envie seu Currículo
                  </button>
              </div>
          </div>
      </div>
    </section>
  );
};

export default ExtraServices;