import React from 'react';

const BpoPromo: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
       <div className="container mx-auto px-4">
           <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col lg:flex-row relative">
               <div className="p-12 lg:w-1/2 z-10">
                   <h2 className="text-3xl font-normal text-gray-800 mb-2">
                       BPO Financeiro + Contador a partir de <span className="font-bold">R$ 599 por mês.</span>
                   </h2>
                   <p className="text-gray-600 italic mb-6 text-sm">
                       A contabilidade da sua empresa aliada ao BPO financeiro de forma prática, segura e econômica.
                   </p>
                   
                   <div className="space-y-4 mb-8">
                       <p className="flex items-start text-gray-700 text-sm">
                           <span className="text-brand-red font-bold mr-2">✔</span>
                           Tenha sua gestão financeira integrada com a contabilidade em tempo real.
                       </p>
                       <p className="flex items-start text-gray-700 text-sm">
                           <span className="text-brand-red font-bold mr-2">✔</span>
                           Economize horas de trabalho, produtividade e dinheiro, dois blends em um combo fantástico.
                       </p>
                   </div>
                   
                   <div className="flex flex-col sm:flex-row gap-4">
                       <button className="bg-brand-red hover:bg-brand-red-dark text-white font-bold py-3 px-6 rounded-full text-xs uppercase transition-colors">
                           Combo Premium
                       </button>
                       <button className="bg-brand-red hover:bg-brand-red-dark text-white font-bold py-3 px-6 rounded-full text-xs uppercase transition-colors">
                           Ver planos e preços
                       </button>
                   </div>
               </div>
               
               {/* Triangle / Image Container */}
               <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-0">
                   <div className="absolute inset-0 bg-gray-200 overflow-hidden" style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}>
                        <img src="https://picsum.photos/seed/businessman/800/600" alt="Professional" className="w-full h-full object-cover" />
                   </div>
               </div>
           </div>
       </div>
    </section>
  );
};

export default BpoPromo;