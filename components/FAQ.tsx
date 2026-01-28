import React, { useState } from 'react';
import { faqs } from '../constants';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-center text-3xl text-gray-700 uppercase mb-12 font-normal">PERGUNTAS E RESPOSTAS</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded shadow-sm overflow-hidden">
              <button 
                onClick={() => toggle(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                   <HelpCircle size={18} className="text-brand-red" />
                   <span className="text-sm font-semibold text-gray-800">{faq.question}</span>
                </div>
                {openIndex === index ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 pt-2">
                    <p className="text-sm text-gray-600 leading-relaxed pl-8">
                        {faq.answer}
                    </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;