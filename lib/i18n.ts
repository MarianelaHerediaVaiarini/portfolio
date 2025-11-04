export type Locale = "en" | "es";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      technologies: "Technologies",
      contact: "Contact",
    },
    hero: {
      title: "Marianela Heredia Vaiarini",
      subtitle: "Full Stack Developer",
      cta: "View My Work",
      description: "I'm passionate about creating clean, intuitive, and purposeful digital experiences. I combine design and development to build modern, accessible, and user-centered products.",
    },
    about: {
      title: "About Me",
      description:
        "I'm a passionate web developer with expertise in modern technologies. I enjoy creating beautiful, functional applications that provide great user experiences.",
    },
    experience: {
      title: "Experience",
      period: "Period",
      achievements: "Key Achievements",
      technologies: "Technologies Used",
      viewDetails: "View Details",
    },
    projects: {
      title: "Projects",
      viewDetails: "View Details",
      visitSite: "Visit Site",
      viewCode: "View Code",
      features: "Features",
    },
    technologies: {
      title: "Technologies",
      categories: {
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
      subtitle: "Let's work together on your next project",
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
      projects: "Proyectos",
      technologies: "Tecnologías",
      contact: "Contacto",
    },
    hero: {
      title: "Marianela Heredia Vaiarini",
      subtitle: "Desarrolladora Full Stack",
      description: "Me apasiona crear experiencias digitales limpias, intuitivas y con propósito. Combino diseño y desarrollo para construir productos modernos, accesibles y centrados en el usuario.",
      cta: "Ver Mi Trabajo",
    },
    about: {
      title: "Sobre Mí",
      description:
        "Soy un desarrollador web apasionado con experiencia en tecnologías modernas. Disfruto creando aplicaciones hermosas y funcionales que brindan excelentes experiencias de usuario.",
    },
    experience: {
      title: "Experiencia",
      period: "Período",
      achievements: "Logros Clave",
      technologies: "Tecnologías Utilizadas",
      viewDetails: "Ver Detalles",
    },
    projects: {
      title: "Proyectos",
      viewDetails: "Ver Detalles",
      visitSite: "Visitar Sitio",
      viewCode: "Ver Código",
      features: "Características",
    },
    technologies: {
      title: "Tecnologías",
      categories: {
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
      title: "Ponte En Contacto",
      subtitle: "Trabajemos juntos en tu próximo proyecto",
    },
    footer: {
      rights: "Todos los derechos reservados",
    },
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}

