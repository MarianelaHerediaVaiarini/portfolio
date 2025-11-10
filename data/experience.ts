export interface Experience {
  id: string;
  period: string;
  technologies: string[];
  image?: string;
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    period: "October 2023 - Present",
    technologies: [
      "TypeScript",
      "C#",
      "Angular",
      ".NET",
      "Tailwind CSS",
      "HTML",
      "Jest",
      "SQL",
      "Bitbucket",
      "Jira",
      "Jenkins",
      "Figma",
      "Scrum",
    ],
  },
  {
    id: "exp-2",
    period: "January 2023 - June 2023",
    technologies: [
      "TypeScript",
      "JavaScript",
      "VueJS",
      "CSS",
      "Git",
      "Figma",
      "Scrum",
    ],
  },
  {
    id: "exp-3",
    period: "July 2022 - January 2023",
    technologies: [
      "TypeScript",
      "JavaScript",
      "Angular",
      "Vue.js",
      "React",
      "Node",
      "NextJS",
      "PostgreSQL",
      "HTML",
      "CSS",
      "Git",
      "Figma",
    ],
  },
];
