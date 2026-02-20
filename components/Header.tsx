import React from 'react';
import { Phone, Clock, Lock, Mail } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full">
      <div className="bg-[#4a4a4a] text-xs text-gray-200 py-2">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6">
            <span className="flex items-center gap-2">
              <Mail size={14} className="text-brand-red" /> 
              atendimento@minascontabilidade.com.br
            </span>
            <span className="flex items-center gap-2">
              <Phone size={14} className="text-brand-red" />
              (33) 35210217
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-brand-red" />
              Seg-Sex 8:00 - 18:00
            </span>
          </div>
          <div className="mt-2 md:mt-0">
             <a href="#contato" className="inline-block bg-brand-red hover:bg-brand-red-dark text-white font-bold py-1 px-4 rounded text-xs transition-colors">
               QUERO CONTRATAR
             </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="#/" className="flex items-center gap-3">
             <img src="/logominas.png" alt="Minas Contabilidade" className="h-12 w-auto" />
          </a>
          
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-gray-700">
            <a href="#/" className="hover:text-brand-red">Home</a>
            <a href="#/blog" className="hover:text-brand-red">Blog</a>
            <a href="#contato" className="hover:text-brand-red">Contato</a>
            <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-brand-red border-l pl-4 border-gray-300">
              <Lock size={14} />
              Área Restrita
            </a>
          </nav>

          {/* Mobile Menu Icon (Placeholder) */}
          <div className="lg:hidden">
             <button className="text-gray-600">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
             </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
