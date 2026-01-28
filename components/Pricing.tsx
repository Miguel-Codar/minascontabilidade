import React from 'react';
import { pricingPlans } from '../constants';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-brand-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl text-gray-700 uppercase mb-16 font-light">
          ENCONTRE O PLANO IDEAL PARA FACILITAR A SUA ROTINA
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-end">
          {pricingPlans.map((plan, index) => (
            <div 
                key={index} 
                className={`bg-white rounded-lg shadow-lg overflow-hidden flex flex-col ${plan.isPopular ? 'border-2 border-brand-red transform -translate-y-4' : 'border border-gray-100'}`}
            >
              {plan.isPopular && (
                <div className="bg-brand-red text-white text-center py-2 font-bold text-sm uppercase">
                  Mais Escolhido
                </div>
              )}
              
              <div className="p-8 text-center bg-gray-50 border-b border-gray-100">
                <h3 className="text-gray-600 uppercase font-semibold text-lg tracking-widest mb-4">{plan.name}</h3>
                <p className="text-xs text-gray-500 mb-2">MENSALIDADES A PARTIR DE</p>
                <div className="flex justify-center items-start text-brand-red font-bold leading-none">
                    <span className="text-xl mt-2 mr-1">R$</span>
                    <span className="text-6xl">{plan.price}</span>
                </div>
                {plan.isPopular && <p className="text-xs text-gray-400 mt-2 line-through">de R$ 599 por</p>}
                
                <p className="text-xs text-gray-500 mt-4 px-4 leading-relaxed">
                   Faturamento até {index === 0 ? '10' : index === 1 ? '20' : '30'}K - Praticidade e economia para quem trabalha sozinho(a).
                </p>
                
                <button className="mt-6 bg-brand-red hover:bg-brand-red-dark text-white font-bold py-2 px-6 rounded-full text-xs uppercase w-full transition-colors">
                    Escolher este plano
                </button>
                
                <p className="text-[10px] text-brand-red font-bold mt-4 uppercase">
                    Contabilidade Completa Inclusa
                </p>
              </div>

              <div className="p-8 bg-white flex-grow">
                 <p className="text-xs font-bold text-brand-red mb-4 uppercase tracking-wide">Incluso no plano:</p>
                 <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                            <Check size={16} className="text-brand-red mr-2 flex-shrink-0" />
                            {feature}
                        </li>
                    ))}
                 </ul>
              </div>
              
              <div className="py-4 bg-gray-50 text-center border-t border-gray-100">
                  <button className="text-xs text-gray-500 hover:text-gray-800 flex items-center justify-center gap-1 w-full">
                      MAIS DETALHES DO PLANO <span>▼</span>
                  </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;