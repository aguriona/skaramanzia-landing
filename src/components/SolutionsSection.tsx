import React from 'react';
import { motion } from 'framer-motion';
import { SectionContainer } from './SectionContainer';
import { TrendingUp, ShieldCheck, Clock, Workflow, Target, BarChart3 } from 'lucide-react';

type Feature = {
  title: string;
  description: string;
  icon: React.ElementType;
};

const features: Feature[] = [
  {
    title: 'Incrementa tu Productividad',
    description:
      'Automatiza hasta el 80% de tareas repetitivas y libera tiempo para actividades estratégicas que generen mayor valor.',
    icon: TrendingUp,
  },
  {
    title: 'Reduce Errores Humanos',
    description:
      'Nuestros sistemas de IA eliminan prácticamente los errores manuales, garantizando mayor precisión en tus operaciones.',
    icon: ShieldCheck,
  },
  {
    title: 'Disponibilidad 24/7',
    description:
      'Tus procesos automatizados funcionan sin descanso, proporcionando servicio continuo a tus clientes y optimizando recursos.',
    icon: Clock,
  },
  {
    title: 'Automatización inteligente',
    description:
      'Aumenta tu productividad y reduce costos con nuestra automatización impulsada por IA.',
    icon: Workflow,
  },
  {
    title: 'Campañas que venden',
    description:
      'Convierte más visitantes en clientes con nuestras campañas altamente segmentadas.',
    icon: Target,
  },
  {
    title: 'Decisiones basadas en datos',
    description:
      'Toma decisiones más inteligentes y basadas en datos sólidos.',
    icon: BarChart3,
  },
];

export const SolutionsSection = () => {
  return (
    <SectionContainer id="soluciones" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Encabezado centrado */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
           Soluciones Inteligentes para tu Negocio
          </h2>
          <p className="mt-4 text-lg text-white/70 leading-relaxed">
          Combinamos la potencia de la IA con estrategias probadas de marketing digital.
          </p>
        </motion.div>

        {/* Grilla de soluciones */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group text-center"
              >
                <div className="mx-auto w-14 h-14 rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-300 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-white/70 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
};