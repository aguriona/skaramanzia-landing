import React from 'react';
import { motion } from 'framer-motion';
import { SectionContainer } from './SectionContainer';

const features = [
  {
    title: 'Automatización inteligente:',
    description: 'Aumenta tu productividad y reduce costos con nuestra automatización impulsada por IA.',
  },
  {
    title: 'Campañas que venden:',
    description: 'Convierte más visitantes en clientes con nuestras campañas altamente segmentadas.',
  },
  {
    title: 'Decisiones basadas en datos:',
    description: 'Toma decisiones más inteligentes y basadas en datos sốlidos.',
  },
];

export const SolutionsSection = () => {
  return (
    <SectionContainer id="soluciones" className="py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-around gap-8">
          {/* Imagen - Ahora a la izquierda */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video rounded-xl overflow-hidden max-w-lg order-2 lg:order-1"
          >
            <div className="w-full h-full rounded-xl overflow-hidden relative flex items-center justify-center bg-black/40">
              {/* Contenedor más pequeño para la imagen */}
              <div className="w-[80%] h-[80%] relative rounded-lg overflow-hidden">
                <img 
                  src="/object.jpg" 
                  alt="Objeto 3D" 
                  className="w-full h-full object-cover"
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

          {/* Contenido de texto - Ahora a la derecha */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <h2 className="text-4xl font-bold text-white">
              Soluciones Inteligentes para tu Negocio
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Nuestras soluciones combinan la potencia de la IA con estrategias 
              probadas de marketing digital.
            </p>
            <ul className="space-y-4">
              {features.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  className="flex flex-col items-start gap-3"
                >
                  <div className="flex items-center gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#00f2ff]" />
                      <span className="text-white/90 font-bold">{item.title}</span>                
                  </div>
                  <span className="text-white/90">{item.description}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
};