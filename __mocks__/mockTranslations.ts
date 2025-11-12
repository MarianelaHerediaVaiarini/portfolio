import { ITranslations } from "@/app/interfaces/Translations.interface";

export const mockTranslations: Record <string, ITranslations> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      technologies: "Technologies",
      contact: "Contact",
    },
    hero: {
      name: "Marianela",
      surname: "Heredia Vaiarini",
      subtitle: "Full Stack Developer",
      description:
        "I transform ideas into modern, accessible, and impactful digital products.",
    },
    about: {
      title: "About Me",
      description:
        "I’m a Full Stack Developer driven by curiosity and continuous learning.",
      description2:
        "My goal is to craft experiences that make technology feel simple and human.",
    },
    experience: {
      title: "Experience",
      period: "Period",
      achievements: "Key achievements",
      technologies: "Technologies used",
      viewDetails: "View details",
      back: "Back to experience",
      description: "Description",
      months: { January: "January", Present: "Present" },
      exp: {
        "test-experience": {
          company: "Test Company",
          position: "Frontend Developer",
          description: "Worked on amazing projects!",
          achievements: ["Achievement 1", "Achievement 2"],
        },
      },
    },
    technologies: {
      title: "Technologies",
      categories: {
        language: "Languages",
        frontend: "Frontend",
        backend: "Backend",
        databases: "Databases",
        tools: "Tools",
      },
      levels: {
        advanced: "Advanced",
        intermediate: "Intermediate",
        basic: "Basic",
      },
    },
    contact: {
      title: "Get In Touch",
      subtitle:
        "I’m excited to discover how I can contribute to your project or team",
    },
    footer: {
      rights: "All rights reserved",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      experience: "Experiencia",
      technologies: "Tecnologías",
      contact: "Contacto",
    },
    hero: {
      name: "Marianela",
      surname: "Heredia Vaiarini",
      subtitle: "Desarrolladora Full Stack",
      description:
        "Transformo ideas en productos digitales modernos, accesibles y con impacto real.",
    },
    about: {
      title: "Sobre Mí",
      description:
        "Soy Desarrolladora Full Stack, impulsada por la curiosidad y el aprendizaje continuo.",
      description2:
        "Mi objetivo es crear experiencias que hagan que la tecnología se sienta simple y humana.",
    },
    experience: {
      title: "Experiencia",
      period: "Período",
      achievements: "Logros claves",
      technologies: "Tecnologías utilizadas",
      viewDetails: "Ver detalles",
      back: "Volver a experiencia",
      description: "Descripción",
      months: { January: "Enero", Present: "Actualidad" },
      exp: {
        "test-experience": {
          company: "Test Company",
          position: "Frontend Developer",
          description: "Worked on amazing projects!",
          achievements: ["Logro 1", "Logro 2"],
        },
      },
    },
    technologies: {
      title: "Tecnologías",
      categories: {
        language: "Lenguajes",
        frontend: "Frontend",
        backend: "Backend",
        databases: "Bases de Datos",
        tools: "Herramientas",
      },
      levels: {
        advanced: "Avanzado",
        intermediate: "Intermedio",
        basic: "Básico",
      },
    },
    contact: {
      title: "Ponte en contacto",
      subtitle:
        "Me emociona descubrir cómo puedo aportar valor a tu proyecto o a tu equipo",
    },
    footer: {
      rights: "Todos los derechos reservados",
    },
  },
};
