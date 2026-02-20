import React from 'react';
import { Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white pt-16 pb-6 text-xs relative">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Column 1 */}
        <div>
          <h4 className="font-bold text-white uppercase mb-6">INÍCIO</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-brand-red transition-colors">› Home</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">› A Empresa</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">› Trabalhe Conosco</a></li>
          </ul>
          
          <h4 className="font-bold text-white uppercase mt-8 mb-6">MÍDIA</h4>
           <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-brand-red transition-colors">› Blog</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">› Vídeos</a></li>
          </ul>
          
          <h4 className="font-bold text-white uppercase mt-8 mb-4">MÍDIAS SOCIAIS</h4>
          <div className="flex gap-2">
            <a href="#" className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center hover:opacity-80"><Facebook size={16} /></a>
            <a href="#" className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center hover:opacity-80"><Instagram size={16} /></a>
            <a href="#" className="w-8 h-8 rounded-full bg-brand-red flex items-center justify-center hover:opacity-80"><Linkedin size={16} /></a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-bold text-white uppercase mb-6">CONTABILIDADE</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-brand-red transition-colors">› Imposto de Renda</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">› Médicos</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">› Clínicas Médicas</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">› Advogados</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">› Engenheiros</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">› Construção Civil</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">› Escolas</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">› Imobiliária</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">› Condomínios</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-bold text-white uppercase mb-6">SERVIÇOS</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-brand-red transition-colors">› Consultoria Empresarial</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">› Assessoria Empresarial</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">› Legalização de Empresas</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">› Regularização de Empresas</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">› Simples Nacional</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">› Tabela Simples Nacional</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-bold text-white uppercase mb-6">CONTRATAR</h4>
          <ul className="space-y-2 text-gray-400 mb-8">
            <li><a href="#" className="hover:text-brand-red transition-colors">› Orçamento Abertura de Empresa</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">› Orçamento Assessoria Contábil</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">› Orçamento outros Serviços</a></li>
          </ul>
          
          <h4 className="font-bold text-white uppercase mb-6">REGULARIZAÇÃO DE EMPRESA</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-brand-red transition-colors">› Regularização Fiscal</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">› Regularização Trabalhista</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">› Regularização Contábil</a></li>
            <li><a href="#" className="hover:text-brand-red transition-colors">› Regularização Avançada</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8">
          <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-end gap-6">
              <div className="text-gray-500 max-w-md">
                  <p className="mb-2">Rua Alexandre Mattar 153 A, São Diogo</p>
                  <p className="mb-4">Teófilo Otoni – MG</p>
                  <p>(33) 35210217</p>
                  <p>atendimento@minascontabilidade.com.br</p>
              </div>
              
              <div className="flex flex-col items-center md:items-start">
                  <p className="text-gray-600 mb-2">© Copyright:</p>
                   <div className="flex items-center mb-4 opacity-70 grayscale hover:grayscale-0 transition-all">
                     <img src="/logominas.png" alt="Minas Contabilidade" className="h-10 w-auto" />
                   </div>
              </div>

              <div className="flex flex-col items-end">
                   <p className="text-gray-600 mb-2">Desenvolvido por:</p>
                   <div className="flex items-center gap-2">
                       <div className="w-8 h-8 rounded-full border-2 border-cyan-500 text-cyan-500 flex items-center justify-center font-bold text-lg">P</div>
                       <div className="text-gray-400 leading-none">
                           <div className="text-cyan-500 font-bold tracking-wide">PROMOVA</div>
                           <div className="text-[8px] uppercase">comunicação e marketing</div>
                       </div>
                   </div>
              </div>
          </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 left-6 z-50">
           <div className="bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform">
               <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
           </div>
      </div>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
          <div className="bg-brand-red-dark text-white text-xs py-2 px-4 rounded shadow-lg animate-pulse">
              Fale conosco, nós estamos online! jivochat
          </div>
          <button 
            onClick={scrollToTop}
            className="bg-brand-red hover:bg-brand-red-dark text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors"
          >
              <ArrowUp size={20} />
          </button>
      </div>
    </footer>
  );
};

export default Footer;
