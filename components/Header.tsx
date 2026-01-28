import React from 'react';
import { Phone, Clock, Lock, Mail } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="w-full">
      {/* Top Bar */}
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
             <button className="bg-brand-red hover:bg-brand-red-dark text-white font-bold py-1 px-4 rounded text-xs transition-colors">
               QUERO CONTRATAR
             </button>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
             {/* Logo Minas Contabilidade */}
             <div className="flex items-center">
               {/* Icon representation */}
               <div className="mr-2 flex items-end h-10 gap-1">
                  <div className="w-2 h-4 bg-brand-red rounded-t-sm"></div>
                  <div className="w-2 h-6 bg-brand-red rounded-t-sm"></div>
                  <div className="w-2 h-10 bg-brand-red rounded-t-sm"></div>
                  <div className="w-2 h-5 bg-gray-400 rounded-t-sm ml-0.5"></div>
                  <div className="w-2 h-8 bg-gray-400 rounded-t-sm"></div>
               </div>
               
               <div className="flex flex-col justify-center leading-none">
                  <span className="text-4xl font-extrabold text-brand-blue tracking-tighter">MINAS</span>
                  <span className="text-sm font-bold text-brand-blue tracking-[0.2em] uppercase pl-1">Contabilidade</span>
               </div>
             </div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-gray-700">
            <a href="#" className="hover:text-brand-red">Home</a>
            <a href="#" className="hover:text-brand-red flex items-center gap-1">Empresa <span className="text-[10px]">▼</span></a>
            <a href="#" className="hover:text-brand-red flex items-center gap-1">Contabilidade <span className="text-[10px]">▼</span></a>
            <a href="#" className="hover:text-brand-red flex items-center gap-1">Serviços <span className="text-[10px]">▼</span></a>
            <a href="#" className="hover:text-brand-red flex items-center gap-1">Digital <span className="text-[10px]">▼</span></a>
            <a href="#" className="hover:text-brand-red flex items-center gap-1">Contratar <span className="text-[10px]">▼</span></a>
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