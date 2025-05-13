import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiUsers, FiRefreshCw, FiZap } from 'react-icons/fi';
import { SectionContainer } from '../SectionContainer';

const StatCard = ({ icon, value, label, description }: { 
  icon: React.ReactNode, 
  value: string, 
  label: string, 
  description: string 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative backdrop-blur-sm bg-black/20 border border-[#00f2ff]/20 rounded-xl p-8 h-full flex flex-col items-center text-center hover:bg-black/30 hover:border-[#00f2ff]/30 transition-all duration-300"
    >
      <div className="text-5xl text-[#00f2ff] mb-6">
        {icon}
      </div>
      <h3 className="text-4xl font-bold mb-3 text-white">
        {value}
      </h3>
      <h4 className="text-xl font-medium text-[#00f2ff] mb-4">
        {label}
      </h4>
      <p className="text-white/80">
        {description}
      </p>
      <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-full bg-[#00f2ff]/5 blur-xl" />
    </motion.div>
  );
};

export const StatisticsSection = () => {
  const statistics = [
    {
      icon: <FiZap className="w-full h-full" />,
      value: "90%",
      label: "Expectativa de inmediatez",
      description: "De los prospectos esperan respuesta inmediata; sin ella, abandonan y buscan alternativas."
    },
    {
      icon: <FiRefreshCw className="w-full h-full" />,
      value: "60%",
      label: "Tiempo en tareas repetitivas",
      description: "Del tiempo diario de agentes destinado a responder preguntas básicas y repetitivas."
    },
    {
      icon: <FiUsers className="w-full h-full" />,
      value: "5x",
      label: "Incremento de leads",
      description: "Las inmobiliarias pueden multiplicar hasta por 5 sus leads cualificados con nuestros asistentes IA."
    },
    {
      icon: <FiClock className="w-full h-full" />,
      value: "90%",
      label: "Ahorro de tiempo",
      description: "En gestión de mensajes, permitiendo al equipo centrarse en actividades de alto valor."
    }
  ];

  return (
    <SectionContainer id="estadisticas" className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            El Poder de los Números
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            La automatización con IA no es solo una tendencia, es una necesidad competitiva respaldada por datos contundentes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statistics.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StatCard 
                icon={stat.icon} 
                value={stat.value} 
                label={stat.label} 
                description={stat.description} 
              />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-medium text-[#00f2ff] mb-4">
            ¿Por qué automatizar con Skaramanzia?
          </h3>
          
          <p className="text-lg text-white/80 max-w-4xl mx-auto mt-4">
            Nuestra solución de IA no reemplaza a tu equipo humano, lo potencia con atención personalizada disponible 24/7.
          </p>
        </motion.div>
      </div>
    </SectionContainer>
  );
};

export default StatisticsSection;
