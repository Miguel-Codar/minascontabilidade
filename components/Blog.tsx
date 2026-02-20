import React from 'react';
import { blogPosts } from '../constants';
import { User, Clock } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      {/* Testimonial Area */}
      <div className="w-full bg-gray-900 h-[400px] mb-20 relative overflow-hidden flex items-center justify-center text-center">
          <div 
             className="absolute inset-0 bg-cover bg-center opacity-40" 
             style={{ backgroundImage: "url('https://picsum.photos/seed/office-bg/1920/600')" }}
          ></div>
          <div className="relative z-10 container mx-auto px-4">
             <div className="w-20 h-20 rounded-full bg-gray-300 mx-auto mb-6 border-4 border-white/20 overflow-hidden">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
             </div>
             <h3 className="text-white font-bold text-xl mb-1">Cris Oliveira</h3>
             <p className="text-gray-400 text-xs uppercase mb-6">Diretora da Fafest</p>
             <div className="max-w-2xl mx-auto">
                 <p className="text-gray-300 italic text-lg leading-relaxed">
                    “ São muito comprometidos, esforçados, sempre tive um bom atendimento e acima de tudo são rápidos e pontuais. Super indico a empresa de contabilidade em recife para todos meus amigos. ”
                 </p>
             </div>
             <div className="flex justify-center gap-2 mt-8">
                 <div className="w-2 h-2 rounded-full bg-white/50"></div>
                 <div className="w-2 h-2 rounded-full bg-brand-red"></div>
                 <div className="w-2 h-2 rounded-full bg-white/50"></div>
                 <div className="w-2 h-2 rounded-full bg-white/50"></div>
             </div>
          </div>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl text-gray-700 uppercase mb-16 font-light">ÚLTIMAS DO BLOG</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
                <div key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
                    <div className="h-48 overflow-hidden relative group">
                        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        <div className="absolute top-4 left-4">
                           <span className="bg-brand-red text-white text-[10px] font-bold px-2 py-1 uppercase rounded-sm">Artigo</span>
                        </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-lg font-bold text-gray-800 mb-4 leading-tight min-h-[50px]">{post.title}</h3>
                        
                        <div className="flex items-center text-[10px] text-gray-500 gap-4 mb-4">
                            <span className="flex items-center gap-1"><User size={12} className="text-brand-red"/> {post.author}</span>
                            <span className="flex items-center gap-1"><Clock size={12} className="text-brand-red"/> {post.date}</span>
                        </div>
                        
                        <p className="text-xs text-gray-600 mb-6 flex-grow leading-relaxed">
                            {post.excerpt}
                        </p>
                        
                        <div className="text-right">
                             <a href={`#/blog/${post.slug}`} className="inline-block bg-brand-red text-white text-xs font-bold py-2 px-6 rounded-full hover:bg-brand-red-dark transition-colors">
                                 Leia mais
                             </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="mt-20 bg-gray-100 py-16">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl">
              <div className="md:w-1/2">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Cadastre-se em nossa newsletter!</h3>
                  <p className="text-xs text-gray-600">Receba mensalmente nossos artigos relacionados a dicas de carreira, recrutamento e mercado.</p>
              </div>
              <div className="md:w-1/2 w-full flex flex-col gap-3">
                  <input type="text" placeholder="Digite seu nome" className="w-full p-3 rounded-full border border-gray-300 text-sm focus:outline-none focus:border-brand-red" />
                  <div className="flex flex-col sm:flex-row gap-3">
                      <input type="email" placeholder="Digite seu e-mail" className="w-full p-3 rounded-full border border-gray-300 text-sm focus:outline-none focus:border-brand-red" />
                      <button className="bg-brand-red text-white font-bold py-3 px-8 rounded-full text-sm uppercase hover:bg-brand-red-dark transition-colors whitespace-nowrap">
                          Cadastre-se
                      </button>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};

export default Blog;
