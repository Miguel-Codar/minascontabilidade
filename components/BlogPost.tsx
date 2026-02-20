import React from 'react';
import { blogPosts } from '../constants';
import { User, Clock } from 'lucide-react';

interface Props {
  slug: string;
}

const BlogPost: React.FC<Props> = ({ slug }) => {
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Post não encontrado</h1>
          <a href="#/blog" className="text-brand-red font-semibold">Voltar ao blog</a>
        </div>
      </section>
    );
  }

  return (
    <article className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{post.title}</h1>
        <div className="flex items-center text-xs text-gray-500 gap-4 mb-8">
          <span className="flex items-center gap-1"><User size={14} className="text-brand-red" /> {post.author}</span>
          <span className="flex items-center gap-1"><Clock size={14} className="text-brand-red" /> {post.date}</span>
        </div>
        <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-8" />
        <div className="prose max-w-none prose-p:leading-relaxed prose-p:mb-4">
          {post.content.split('\n').map((para, idx) => (
            <p key={idx} className="text-gray-800">{para.trim()}</p>
          ))}
        </div>
        <div className="mt-10">
          <a href="#/blog" className="inline-block bg-brand-red text-white text-sm font-bold py-2 px-6 rounded-full hover:bg-brand-red-dark transition-colors">
            Voltar ao blog
          </a>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
