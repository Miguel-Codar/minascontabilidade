import React from 'react';
import { blogPosts } from '../constants';
import { User, Clock } from 'lucide-react';

const BlogList: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <a key={post.slug} href={`#/blog/${post.slug}`} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden flex flex-col">
              <div className="h-48 overflow-hidden relative group">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-lg font-bold text-gray-800 mb-3 leading-tight">{post.title}</h2>
                <div className="flex items-center text-[10px] text-gray-500 gap-4 mb-3">
                  <span className="flex items-center gap-1"><User size={12} className="text-brand-red" /> {post.author}</span>
                  <span className="flex items-center gap-1"><Clock size={12} className="text-brand-red" /> {post.date}</span>
                </div>
                <p className="text-sm text-gray-600 flex-grow">{post.excerpt}</p>
                <div className="mt-4 text-right">
                  <span className="inline-block bg-brand-red text-white text-xs font-bold py-2 px-6 rounded-full">
                    Leia mais
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
