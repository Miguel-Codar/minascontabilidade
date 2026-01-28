import React from 'react';
import { ChevronRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full py-20 md:py-32 bg-gray-900 overflow-hidden min-h-[700px] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-30 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent z-0"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center text-left">
        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-red/20 border border-brand-red/30 text-brand-red text-xs font-bold tracking-wider mb-6 uppercase">
            Contabilidade especializada para médicos
          </span>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            Sua contabilidade <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              sem dor de cabeça e sem burocracia
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl font-light">
            Cuidamos da parte contábil, fiscal e financeira do seu consultório para você focar no que realmente importa: seus pacientes, sua agenda e o crescimento do seu negócio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-brand-red hover:bg-brand-red-dark text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              Falar no WhatsApp <ChevronRight size={20} />
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-dark font-bold py-4 px-8 rounded-full text-lg transition-all flex items-center justify-center">
              Conhecer Serviços
            </button>
          </div>

          {/* Quick Proofs */}
          <div className="border-t border-gray-700/50 pt-8 flex flex-col md:flex-row gap-6 md:gap-12 text-gray-400 text-sm font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-brand-red" size={18} />
              <span>10+ anos de experiência no mercado</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-brand-red" size={18} />
              <span>345+ clientes atendidos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-brand-red" size={18} />
              <span>99% de satisfação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;