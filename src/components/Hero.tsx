// Hero.tsx
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FeatureSection } from './FeatureSection';
import { SectionContainer } from './SectionContainer';
import { TypewriterText } from './TypewriterText';

export const Hero = () => {
  const changingWords = [
    'Tecnología',
    'Innovación',
    'IA',
    'Marketing',
    'Automatización'
  ];

  return (
    <SectionContainer className="min-h-screen overflow-hidden mt-20 lg:mt-0">
      <div className="container mx-auto px-4 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative p-8 rounded-2xl bg-black/30 backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(0,242,255,0.1)] max-w-6xl mx-auto"
        >
          <div className="grid lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3 space-y-8">
              <motion.h1 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="text-white">Transformamos</span>
                <br />
                <span className="text-white"> tu Negocio con </span>
                <br />
                <TypewriterText 
                  words={changingWords}
                  className="text-[#00f2ff] drop-shadow-[0_0_8px_rgba(0,242,255,0.3)]"
                />
              </motion.h1>

              <motion.p className="text-lg text-white/80 leading-relaxed mb-8">
                Diseñamos soluciones que revolucionan tu flujo de trabajo, 
                combinando la eficiencia de la IA con estrategias de marketing 
                digital para impulsar un crecimiento real y medible.
              </motion.p>
            </div>

            <div className="lg:col-span-2">
              <motion.div
                className="relative aspect-square rounded-full overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
            <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-black/50 to-blue-900/20">
              <motion.div 
                className="w-3/4 h-3/4 relative rounded-full flex items-center justify-center"
                animate={{ 
                  boxShadow: ['0 0 15px rgba(0, 242, 255, 0.2)', '0 0 25px rgba(0, 242, 255, 0.4)', '0 0 15px rgba(0, 242, 255, 0.2)'] 
                }}
                style={{
                  background: 'linear-gradient(145deg, rgba(0,0,0,0.8), rgba(0,42,75,0.4))'
                }}
              >
                  <div className="w-full h-full relative flex items-center justify-center">
                    <img 
                      src="/samurai-w.jpg" 
                      alt="Tecnología" 
                      className="object-contain rounded-full"
                      style={{ 
                        filter: 'brightness(1.05) contrast(1.05)',
                      }}
                    />
                  </div>
              </motion.div>
            </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <FeatureSection />
      </div>
    </SectionContainer>
  );
};