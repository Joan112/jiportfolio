"use client";

import { Briefcase, Calendar, MapPin, Globe } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSectionHeader from "./AnimatedSectionHeader";

export default function Experience() {
  const experiences = [
    {
      company: "Coppel",
      location: "Hibrido",
      period: "2023 - Present",
      role: "Dev Sr (Back)",
      responsibilities: [
        "Desarrollé microservicios escalables utilizando Python y FastAPI, optimizando la gestión de datos y mejorando la eficiencia de nuestras aplicaciones.",
        "Implementé soluciones Bbackend robustas para el chatbot de WhatsApp.",
        "Migración de datos de PostgreSQL a MongoDB, optimizando la estructura de la base de datos.",
        "Implementación de pruebas unitarias con pytest y unittest para garantizar la calidad del código.",
        "Integración de APIGEE para los servicios de Canales Conversacionales",
      ],
    },
    {
      company: "Afore Coppel",
      location: "Culiacan",
      period: "2018 - 2023",
      role: "Dev Junior, Culiacan",
      responsibilities: [
        "Adquirí una valiosa experiencia en el desarrollo y mantenimiento de software, contribuyendo a la mejora de los procesos internos y a la satisfacción de los clientes.",
        "Desarrollo y mantenimiento de software.",
        "Desarrollé habilidades en resolución de problemas y optimización de código, aplicando mis conocimientos en proyectos desafiantes.",
        "Corrección de errores y optimización de programas",
        "Desarrollo de utilerias para el área de Operaciones",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Experiencia Profecianal" />
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
            >
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-blue-200 dark:bg-blue-700 rounded-bl-full z-0 opacity-50 
                transition-transform duration-300 group-hover:scale-110"
              ></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">
                  {exp.company === "Freelance" ? (
                    <Globe className="w-6 h-6 mr-2 text-blue-500" />
                  ) : null}
                  {exp.company}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  {exp.location}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.period}
                </p>
                <p className="text-xl font-medium mb-4 dark:text-gray-200 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2" />
                  {exp.role}
                </p>
                <ul className="list-none space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="text-gray-700 dark:text-gray-300 flex items-start"
                    >
                      <span className="text-blue-500 mr-2">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 -mb-32 -mr-32 opacity-20">
        <Image
          src="/placeholder.svg?height=256&width=256"
          alt="Decorative background"
          width={256}
          height={256}
        />
      </div>
    </section>
  );
}
