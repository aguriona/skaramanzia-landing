import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionContainer } from '../components/SectionContainer';
import { FiArrowRight, FiCalendar, FiUser, FiClock } from 'react-icons/fi';
import { blogPosts } from './blog/blog-data';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const categories = ['Todos', 'Marketing Digital', 'Inteligencia Artificial', 'Tecnología'];

  const filteredPosts = selectedCategory === 'Todos' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <SectionContainer id="blog" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            Blog
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Últimas ideas, tendencias y análisis sobre marketing digital, 
            inteligencia artificial y estrategias de negocio.
          </p>
          
          {/* Categorías */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category 
                    ? 'bg-[#00f2ff] text-black' 
                    : 'bg-black/30 text-white/80 hover:bg-black/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-black/30 backdrop-blur-sm border border-[#00f2ff]/10 rounded-xl overflow-hidden group hover:border-[#00f2ff]/30 transition-all"
            >
              <div className="relative overflow-hidden h-52">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-4 right-4 bg-[#00f2ff] text-black text-xs font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-xs text-gray-400 mb-3 gap-4">
                  <div className="flex items-center gap-1">
                    <FiCalendar size={12} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiUser size={12} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiClock size={12} />
                    <span>{post.readTime} min</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-400 text-sm mb-5 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <a 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-[#00f2ff] hover:text-white group-hover:translate-x-1 transition-all"
                >
                  Leer más <FiArrowRight className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Si no hay posts en la categoría seleccionada */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-white text-xl mb-2">No hay artículos en esta categoría</h3>
            <p className="text-white/70">Intenta seleccionando otra categoría o vuelve más tarde</p>
          </div>
        )}
      </div>
    </SectionContainer>
  );
};

export default Blog;
