import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { SectionContainer } from '../../components/SectionContainer';
import { FiCalendar, FiUser, FiClock, FiArrowLeft, FiShare2, FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { BlogPost as BlogPostType, blogPosts } from './blog-data';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostType | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);

  useEffect(() => {
    // Buscar el post por su slug
    const foundPost = blogPosts.find(p => p.slug === slug);
    
    if (foundPost) {
      setPost(foundPost);
      
      // Encontrar posts relacionados de la misma categoría (excluyendo el actual)
      const related = blogPosts
        .filter(p => p.category === foundPost.category && p.id !== foundPost.id)
        .slice(0, 3);
      
      setRelatedPosts(related);
    } else {
      // Si no se encuentra el post, redireccionar a la página de blog
      navigate('/blog');
    }
  }, [slug, navigate]);

  if (!post) {
    return (
      <SectionContainer className="py-24 text-center">
        <div className="container mx-auto">
          <h2 className="text-white text-2xl">Cargando artículo...</h2>
        </div>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Botón regresar */}
          <a 
            href="/blog" 
            className="inline-flex items-center text-white/70 hover:text-[#00f2ff] mb-6 transition-colors"
          >
            <FiArrowLeft className="mr-2" />
            Volver al blog
          </a>
          
          {/* Cabecera del post */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-sm text-gray-400 gap-6 mb-6">
              <div className="flex items-center gap-2">
                <FiCalendar />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiUser />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <FiClock />
                <span>{post.readTime} minutos de lectura</span>
              </div>
              <div className="px-3 py-1 bg-[#00f2ff]/10 rounded-full text-[#00f2ff] text-xs">
                {post.category}
              </div>
            </div>
            
            <div className="relative w-full aspect-[16/9] mb-8 rounded-xl overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
          
          {/* Contenido del post */}
          <div className="bg-[#f8f9fb] text-gray-800 rounded-xl p-8 shadow-lg my-8">
            <article className="prose prose-lg max-w-none">
              <div
                className="[&>h1]:text-4xl [&>h1]:font-bold [&>h1]:text-[#0055a3] [&>h1]:mt-12 [&>h1]:mb-8 
                           [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-[#0055a3] [&>h2]:mt-12 [&>h2]:mb-8 
                           [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-[#0055a3] [&>h3]:mt-10 [&>h3]:mb-6 
                           [&>p]:text-gray-700 [&>p]:leading-relaxed [&>p]:mb-10 [&>p]:mt-6 
                           [&>ul]:list-disc [&>ul]:pl-8 [&>ul]:my-8 
                           [&>ol]:list-decimal [&>ol]:pl-8 [&>ol]:my-8 
                           [&>ul>li]:mb-4 [&>ol>li]:mb-4 [&>ul>li]:text-gray-700 [&>ol>li]:text-gray-700 
                           [&>blockquote]:border-l-4 [&>blockquote]:border-[#0055a3] [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-gray-600 [&>blockquote]:my-8 
                           [&>hr]:my-12 [&>hr]:border-gray-300"
                dangerouslySetInnerHTML={{
                  __html: post.content
                }}
              />
            </article>
          </div>
          
          {/* Compartir */}
          <div className="bg-[#f0f4f8] text-gray-800 rounded-xl p-6 my-10 shadow-lg">
            <div className="flex flex-wrap items-center justify-between">
              <div className="font-medium">
                Compartir este artículo:
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-gray-600 hover:text-[#0077cc]">
                  <FiFacebook size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#0077cc]">
                  <FiTwitter size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#0077cc]">
                  <FiLinkedin size={20} />
                </a>
                <a href="#" className="text-gray-600 hover:text-[#0077cc]">
                  <FiShare2 size={20} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Artículos relacionados */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-white mb-8">
                Artículos relacionados
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <a 
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="bg-black/30 rounded-xl overflow-hidden group hover:bg-black/40 transition-all"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    </div>
                    
                    <div className="p-4">
                      <h4 className="text-white font-medium mb-2 line-clamp-2 group-hover:text-[#00f2ff] transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-white/60 text-sm">{relatedPost.date}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default BlogPost;
