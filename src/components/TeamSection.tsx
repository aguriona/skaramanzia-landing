import React from 'react';
import { motion } from 'framer-motion';
import { SectionContainer } from './SectionContainer';

export const TeamSection = () => {
  return (
    <SectionContainer id="equipo" className="py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-around gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 order-1"
          >
            <h2 className="text-4xl font-bold text-white">
              Nuestro Equipo
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              Un equipo multidisciplinario de profesionales apasionados por la tecnología, la innovación y el marketing digital.
            </p>
            
            <div className="space-y-5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="h-1.5 w-1.5 mt-2.5 rounded-full bg-[#00f2ff] flex-shrink-0" />
                <p className="text-white/90">
                  <span className="text-[#00f2ff] font-medium">Desarrollo tecnológico de vanguardia</span> respaldado por programadores full-stack con amplia experiencia en las tecnologías más recientes y efectivas del mercado.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="flex items-start gap-3"
              >
                <div className="h-1.5 w-1.5 mt-2.5 rounded-full bg-[#00f2ff] flex-shrink-0" />
                <p className="text-white/90">
                  <span className="text-[#00f2ff] font-medium">Estrategia de contenidos y comunidad</span> orientada a crear conexiones significativas con tu audiencia, aumentando el engagement y la fidelización de clientes.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="flex items-start gap-3"
              >
                <div className="h-1.5 w-1.5 mt-2.5 rounded-full bg-[#00f2ff] flex-shrink-0" />
                <p className="text-white/90">
                  <span className="text-[#00f2ff] font-medium">Optimización de campañas publicitarias</span> para maximizar el retorno de inversión, utilizando datos analíticos para tomar decisiones estratégicas y mejorar constantemente los resultados.
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Imagen del equipo - A la derecha */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video rounded-xl overflow-hidden max-w-lg order-2"
          >
            <div className="w-full h-full rounded-xl overflow-hidden relative flex items-center justify-center bg-black/40">
              {/* Contenedor para la imagen */}
              <div className="w-[80%] h-[80%] relative rounded-lg overflow-hidden">
                <img 
                  src="/robots.jpg" 
                  alt="Nuestro Equipo" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Si la imagen no existe, mostrar un placeholder
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80';
                  }}
                />
                
                {/* Borde con iluminación */}
                <div className="absolute inset-0 border border-[#00f2ff]/30 rounded-lg" />
                
                {/* Efectos de iluminación */}
                <div className="absolute inset-0 rounded-lg shadow-[0_0_15px_rgba(0,242,255,0.2)]" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00f2ff]/5 via-transparent to-transparent mix-blend-overlay" />
              </div>
              
              {/* Resplandor cyan */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl animate-blob animation-delay-2000" />
              <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl animate-blob animation-delay-4000" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0B0B1E]/80 via-transparent to-transparent" />
            <div className="absolute inset-0 border border-[#00f2ff]/20 rounded-xl" />
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
};
