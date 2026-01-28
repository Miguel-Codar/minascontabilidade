import React from 'react';

const PromoBanner: React.FC = () => {
  return (
    <section className="relative h-[400px] w-full bg-gray-200 mt-12 overflow-hidden flex items-center">
        <div className="absolute inset-0">
             <img 
               src="https://picsum.photos/seed/business-meeting/1920/600" 
               alt="Background" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-white/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 flex justify-end">
            <div className="w-full md:w-1/2 text-right md:pr-12">
                <p className="text-xl text-gray-700 mb-2 font-light">Trocar de contador é muito fácil.</p>
                <h2 className="text-3xl md:text-4xl text-gray-800 font-bold mb-6">
                    Planos a partir de <span className="text-gray-900">R$ 149,00</span> por mês
                </h2>
                <button className="bg-brand-red hover:bg-brand-red-dark text-white font-bold py-3 px-8 rounded-full uppercase text-sm shadow-md transition-colors">
                    Precisa de um contador
                </button>
            </div>
        </div>
    </section>
  );
};

export default PromoBanner;