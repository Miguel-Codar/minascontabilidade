import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <section className="py-24 bg-brand-gray relative">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
            
            {/* Left Side: Content */}
            <div className="lg:w-5/12 p-10 md:p-12 bg-brand-dark text-white flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6 leading-tight">
                    Receba uma análise personalizada do seu consultório
                </h2>
                <p className="text-gray-400 mb-8 text-lg">
                    Preencha o formulário e descubra como podemos ajudar você a:
                </p>
                
                <ul className="space-y-4 mb-10">
                    <li className="flex items-center gap-3">
                        <CheckCircle2 className="text-brand-red flex-shrink-0" />
                        <span className="font-medium">Pagar menos impostos de forma legal</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <CheckCircle2 className="text-brand-red flex-shrink-0" />
                        <span className="font-medium">Organizar sua contabilidade</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <CheckCircle2 className="text-brand-red flex-shrink-0" />
                        <span className="font-medium">Ter mais clareza financeira</span>
                    </li>
                </ul>

                <div className="mt-auto pt-6 border-t border-gray-700">
                    <p className="text-sm text-gray-500 italic">
                        "Especializados em médicos e profissionais da saúde."
                    </p>
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="lg:w-7/12 p-10 md:p-12 bg-white">
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Nome completo</label>
                        <input 
                            type="text" 
                            id="name" 
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-all bg-gray-50"
                            placeholder="Seu nome"
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">E-mail profissional</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-all bg-gray-50"
                            placeholder="seu@email.com.br"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">WhatsApp com DDD</label>
                        <input 
                            type="tel" 
                            id="phone" 
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-all bg-gray-50"
                            placeholder="(00) 90000-0000"
                        />
                    </div>

                    <div className="pt-4">
                        <button type="submit" className="w-full bg-brand-red hover:bg-brand-red-dark text-white font-bold py-4 rounded-lg text-lg shadow-md transition-all transform hover:-translate-y-1">
                            👉 Quero minha análise gratuita
                        </button>
                    </div>
                    
                    <p className="text-center text-xs text-gray-400 mt-4">
                        Seus dados estão seguros. Não enviamos spam.
                    </p>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;