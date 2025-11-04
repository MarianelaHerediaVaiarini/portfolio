export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
  image?: string;
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    company: "Tech Solutions Inc.",
    position: "Senior Frontend Developer",
    period: "2022 - Present",
    description: "Developed and maintained modern web applications using React, Next.js, and TypeScript. Led the frontend team and worked on reusable component architecture.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    achievements: [
      "Improved application performance by 40%",
      "Implemented consistent design system",
      "Mentored 3 junior developers"
    ],
  },
  {
    id: "exp-2",
    company: "Digital Agency",
    position: "Frontend Developer",
    period: "2020 - 2022",
    description: "Developed user interfaces for multiple clients, working with multidisciplinary teams to create impactful digital experiences.",
    technologies: ["React", "JavaScript", "CSS3", "Git", "Figma"],
    achievements: [
      "Completed 15+ successful projects",
      "Reduced loading time by 30%",
      "Implemented agile methodologies"
    ],
  },
  {
    id: "exp-3",
    company: "Startup XYZ",
    position: "Junior Web Developer",
    period: "2019 - 2020",
    description: "First professional experience developing web applications. Learned best practices and collaborated on projects of various sizes.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Vue.js", "PHP"],
    achievements: [
      "Completed first full-stack project",
      "Learned to work in a team",
      "Improved debugging skills"
    ],
  },
];

