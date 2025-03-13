"use client";

import { motion } from "framer-motion";
import {
  Code,
  Database,
  Server,
  GitBranch,
  Cpu,
  Workflow,
  LucideIcon,
} from "lucide-react";
import AnimatedSectionHeader from "./AnimatedSectionHeader";

// Eliminar la interfaz no utilizada
// interface SkillIconProps {
//   icon: LucideIcon;
//   color: string;
// }

const SkillIcon = ({
  icon: Icon,
  color,
}: {
  icon: LucideIcon;
  color: string;
}) => (
  <div className={`p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg`}>
    <Icon className={`w-6 h-6 ${color}`} />
  </div>
);

const skills = [
  {
    icon: Code,
    name: "Desarrollo front-end",
    tech: "React natice, Next.js, HTML, CSS",
    description:
      "Construcción de interfaces de usuario interactivas y receptivas utilizando React Native, Next.js, HTML y CSS. Actualmente, me encuentro en proceso de aprendizaje y mejora en estas tecnologías, enfocándome en crear experiencias de usuario fluidas y atractivas. A través de proyectos prácticos, estoy consolidando mis conocimientos en diseño responsivo, optimización de rendimiento y buenas prácticas de desarrollo front-end.",
    color: "text-blue-500",
  },
  {
    icon: Server,
    name: "Desarrollo Backend",
    tech: "Node.js, Express, Python, ",
    description:
      "Creación de aplicaciones robustas del lado del servidor con foco en la escalabilidad y la arquitectura limpia.",
    color: "text-green-500",
  },
  {
    icon: Database,
    name: "Gestión de bases de datos",
    tech: "MongoDB, Redis, PostgreSQL",
    description:
      "Diseñar e implementar esquemas y consultas de bases de datos eficientes para una gestión óptima de los datos.",
    color: "text-purple-500",
  },
  {
    icon: GitBranch,
    name: "Control de versiones",
    tech: "Git, GitHub, Azure",
    description:
      "Gestionar versiones de código de forma eficiente con Git y colaborar eficazmente a través de GitHub y Azure",
    color: "text-orange-500",
  },
  {
    icon: Cpu,
    name: "Desarrollo de API",
    tech: "REST, Python. FastAPI",
    description:
      "Diseño e implementación de API eficientes para una comunicación de datos fluida.",
    color: "text-red-500",
  },
  {
    icon: Workflow,
    name: "Metodologías ágiles",
    tech: "Scrum",
    description:
      "Working efficiently in agile environments with focus on continuous delivery.",
    color: "text-cyan-500",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900"></div>

      {/* Skill Illustrations */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="skill-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="50"
                cy="50"
                r="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M50 30 L50 70 M30 50 L70 50"
                stroke="currentColor"
                strokeWidth="2"
              />
            </pattern>
          </defs>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#skill-pattern)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Habilidades y experiencia" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <SkillIcon icon={skill.icon} color={skill.color} />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.tech}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
