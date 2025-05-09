import { LucideIcon, Search, BarChart2, Rocket, Target } from 'lucide-react';

export interface WorkflowStepType {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const workflowSteps: WorkflowStepType[] = [
  {
    title: "Descubrimiento",
    description: "Analizamos tus necesidades y objetivos específicos para entender tu visión.",
    icon: Search
  },
  {
    title: "Estrategia",
    description: "Desarrollamos un plan personalizado que se alinea con tus metas.",
    icon: BarChart2
  },
  {
    title: "Implementación",
    description: "Ejecutamos la estrategia con precisión y atención al detalle.",
    icon: Rocket
  },
  {
    title: "Optimización",
    description: "Mejoramos continuamente basándonos en datos y resultados.",
    icon: Target
  }
];