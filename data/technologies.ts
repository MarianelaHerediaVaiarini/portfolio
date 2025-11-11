export interface Technology {
  name: string;
  category: "frontend" | "backend" | "tools" | "databases" | "language";
  level: "advanced" | "intermediate" | "basic";
}

export const technologies: Technology[] = [
  //Languages
  { name: "TypeScript", category: "language", level: "advanced" },
  { name: "JavaScript", category: "language", level: "advanced" },
  { name: "C#", category: "language", level: "advanced" },

  // Frontend
  { name: "Angular", category: "frontend", level: "advanced" },
  { name: "Vue.js", category: "frontend", level: "advanced" },
  { name: "React", category: "frontend", level: "advanced" },
  { name: "Next.js", category: "frontend", level: "advanced" },
  { name: "Tailwind CSS", category: "frontend", level: "advanced" },
  { name: "HTML5", category: "frontend", level: "advanced" },
  { name: "CSS3", category: "frontend", level: "advanced" },

  // Backend
  { name: ".NET", category: "backend", level: "advanced" },
  { name: "Node.js", category: "backend", level: "advanced" },
  { name: "Express", category: "backend", level: "advanced" },
  { name: "NestJS", category: "backend", level: "advanced" },

  // Databases
  { name: "SQL", category: "databases", level: "advanced" },
  { name: "PostgreSQL", category: "databases", level: "advanced" },

  // Tools
  { name: "Jenkins", category: "tools", level: "advanced" },
  { name: "Clarity", category: "tools", level: "advanced" },
  { name: "Docker", category: "tools", level: "advanced" },
  { name: "Figma", category: "tools", level: "advanced" },
  { name: "Jest", category: "tools", level: "advanced" },
  { name: "Cypress", category: "tools", level: "advanced" },
  { name: "Git", category: "tools", level: "advanced" },
  { name: "GitHub", category: "tools", level: "advanced" },
  { name: "Bitbucket", category: "tools", level: "advanced" },
  { name: "Jira", category: "tools", level: "advanced" },
];
