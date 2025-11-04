export interface Technology {
  name: string;
  category: "frontend" | "backend" | "tools" | "databases";
  level: "advanced" | "intermediate" | "basic";
}

export const technologies: Technology[] = [
  // Frontend
  { name: "React", category: "frontend", level: "advanced" },
  { name: "Next.js", category: "frontend", level: "advanced" },
  { name: "TypeScript", category: "frontend", level: "advanced" },
  { name: "JavaScript", category: "frontend", level: "advanced" },
  { name: "HTML5", category: "frontend", level: "advanced" },
  { name: "CSS3", category: "frontend", level: "advanced" },
  { name: "Tailwind CSS", category: "frontend", level: "advanced" },
  { name: "Vue.js", category: "frontend", level: "intermediate" },
  
  // Backend
  { name: "Node.js", category: "backend", level: "advanced" },
  { name: "Express", category: "backend", level: "advanced" },
  { name: "Python", category: "backend", level: "intermediate" },
  { name: "PHP", category: "backend", level: "intermediate" },
  
  // Databases
  { name: "MongoDB", category: "databases", level: "advanced" },
  { name: "PostgreSQL", category: "databases", level: "intermediate" },
  { name: "Firebase", category: "databases", level: "advanced" },
  
  // Tools
  { name: "Git", category: "tools", level: "advanced" },
  { name: "Docker", category: "tools", level: "intermediate" },
  { name: "Figma", category: "tools", level: "intermediate" },
  { name: "Jest", category: "tools", level: "intermediate" },
];

