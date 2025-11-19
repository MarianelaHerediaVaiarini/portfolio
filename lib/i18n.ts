import type { ITranslations } from "@/app/interfaces/Translations.interface";

export type Locale = "en" | "es";

export const translations: Record<Locale, ITranslations> = {
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
        "I’m a Full Stack Developer driven by curiosity and continuous learning. I enjoy transforming ideas into real, user-centered solutions that combine efficiency, functionality, and purpose. I’m motivated by developing products that optimize processes and create impact, within teams where innovation, collaboration, and continuous improvement are key values.",
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
      months: {
        January: "January",
        February: "February",
        March: "March",
        April: "April",
        May: "May",
        June: "June",
        July: "July",
        August: "August",
        September: "September",
        October: "October",
        November: "November",
        December: "December",
        Present: "Present",
      },
      exp: {
        "exp-1": {
          company: "Digital Preventor",
          position: "Senior Full-Stack Developer",
          description:
            "Develop and deliver end-to-end web solutions as a Full-Stack Developer using Angular, .NET, and TypeScript. I collaborate closely with cross-functional teams to align technical decisions with business goals and contribute to a scalable and reusable component architecture.",
          achievements: [
            "Improved user experience and platform performance.",
            "Collaborated effectively with cross-functional teams, ensuring quality and scalability.",
            "Implemented an AI-powered Assistant feature.",
            "Applied Clean Code principles and up-to-date technologies.",
            "Reduced platform load times by optimizing frontend performance and API consumption.",
            "Designed and implemented scalable architectures, reducing technical debt and improving maintainability.",
            "Actively participated in requirement definition with product and stakeholders, contributing to strategic roadmap decisions.",
            "Automated key processes through scripts, tests, or pipelines, improving team efficiency and reducing human errors.",
            "Provided mentorship and technical guidance to other developers, promoting best practices and standards.",
            "Owned end-to-end delivery of features: design, development, testing, deployment, and monitoring.",
            "Integrated external services and APIs to expand product capabilities.",
          ],
        },
        "exp-2": {
          company: "Evaluar",
          position: "Frontend Developer",
          description:
            "Development and implementation of modern, dynamic interfaces for a human resources management platform. Focused on enhancing usability, data visualization, and overall user experience within an agile environment.",
          achievements: [
            "Development of new features aimed at improving system usability and efficiency.",
            "Design and implementation of analytics pages with interactive charts to support data-driven decision-making.",
            "Optimization of the user experience through intuitive, consistent, and user-centered interfaces.",
          ],
        },
        "exp-3": {
          company: "Startup Promptear",
          position: "Full-Stack Developer",
          description:
            "Development of scalable web applications and seamless integration between frontend and backend within an AI-focused ecosystem. Actively involved in technical, functional, and design decisions, applying best development practices and ensuring high-quality, efficient solutions.",
          achievements: [
            "Developed the official website of a local government, delivering a modern and smooth user experience.",
            "Integrated an e-commerce platform with Mercado Libre’s API, improving product and sales management.",
            "Contributed to the design and implementation of scalable, high-performance solutions.",
            "Applied best coding practices to ensure efficiency, quality, and maintainability.",
          ],
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
        "Soy Desarrolladora Full Stack, impulsada por la curiosidad y el aprendizaje continuo. Disfruto transformar ideas en soluciones reales centradas en las personas, combinando eficiencia, funcionalidad y propósito. Me motiva desarrollar productos que optimicen procesos y generen impacto, trabajando en equipos donde la innovación, la colaboración y la mejora constante sean pilares fundamentales.",
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
      months: {
        January: "Enero",
        February: "Febrero",
        March: "Marzo",
        April: "Abril",
        May: "Mayo",
        June: "Junio",
        July: "Julio",
        August: "Agosto",
        September: "Septiembre",
        October: "Octubre",
        November: "Noviembre",
        December: "Diciembre",
        Present: "Actualidad",
      },
      exp: {
        "exp-1": {
          company: "Digital Preventor",
          position: "Desarrolladora Full-Stack Senior",
          description:
            "Desarrollo y doy soluciones web de end-to-end como Full-Stack Developer utilizando Angular, .NET y TypeScript. Colaboro estrechamente con equipos multidisciplinarios para alinear las decisiones técnicas con los objetivos del negocio y contribuyo a una arquitectura de componentes escalable y reutilizable.",
          achievements: [
            "Mejora de la experiencia de usuario y el rendimiento de la plataforma.",
            "Colaboración efectiva con equipos multidisciplinarios, asegurando calidad y escalabilidad.",
            "Implementación de una funcionalidad de Asistente con IA.",
            "Aplicación de principios de Clean Code y tecnologías actualizadas.",
            "Reducción del tiempo de carga de la plataforma mediante optimización del rendimiento del frontend y del consumo de APIs.",
            "Diseño e implementación de arquitecturas escalables, reduciendo deuda técnica y mejorando la mantenibilidad.",
            "Participación activa en la definición de requerimientos con producto y stakeholders, contribuyendo a decisiones estratégicas del roadmap.",
            "Automatización de procesos clave mediante scripts, tests o pipelines, mejorando la eficiencia del equipo y reduciendo errores humanos.",
            "Mentoría y guía técnica a otros desarrolladores, promoviendo buenas prácticas y estándares.",
            "Responsabilidad end-to-end en el ciclo completo de funcionalidades: diseño, desarrollo, pruebas, despliegue y monitoreo.",
            "Integración de servicios externos y APIs para ampliar las capacidades del producto.",
          ],
        },
        "exp-2": {
          company: "Evaluar",
          position: "Desarrolladora Frontend",
          description:
            "Desarrollo e implementación de interfaces modernas y dinámicas para una plataforma de gestión de recursos humanos. Enfoque en mejorar la usabilidad, visualización de datos y experiencia de usuario en un entorno ágil.",
          achievements: [
            "Desarrollo de nuevas funcionalidades orientadas a mejorar la usabilidad y eficiencia del sistema.",
            "Diseño e implementación de páginas de estadísticas con gráficos interactivos para facilitar decisiones basadas en datos.",
            "Optimización de la experiencia de usuario mediante la creación de interfaces intuitivas, consistentes y centradas en el usuario.",
          ],
        },
        "exp-3": {
          company: "Startup Promptear",
          position: "Desarrolladora Full-Stack",
          description:
            "Desarrollo de aplicaciones web escalables e integración fluida entre frontend y backend en un ecosistema enfocado en IA. Participación activa en decisiones técnicas, funcionales y de diseño, aplicando buenas prácticas y asegurando soluciones eficientes y de calidad.",
          achievements: [
            "Desarrollo del sitio web oficial de un gobierno local, logrando una experiencia moderna y fluida.",
            "Integración de una plataforma e-commerce con la API de Mercado Libre, mejorando la gestión de productos y ventas.",
            "Contribución en el diseño e implementación de soluciones escalables y de alto rendimiento.",
            "Aplicación de buenas prácticas para garantizar eficiencia, calidad y mantenibilidad.",
          ],
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
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale];
}
