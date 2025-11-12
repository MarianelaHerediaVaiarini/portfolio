import { IProject } from "@/app/interfaces/Project.interface";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image?: string;
  url?: string;
  repository?: string;
  features: string[];
}

export const projects: IProject[] = [
  {
    id: "proj-1",
    title: "E-commerce Platform",
    description:
      "Complete e-commerce platform with shopping cart, payments, and admin panel.",
    longDescription:
      "A complete e-commerce platform built with Next.js and Stripe. Includes authentication system, shopping cart, payment processing, admin panel, and inventory management. Optimized for performance and SEO.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "MongoDB",
      "Tailwind CSS",
    ],
    url: "https://example-ecommerce.com",
    repository: "https://github.com/user/ecommerce",
    features: [
      "Secure payment processing",
      "Complete admin panel",
      "Advanced search system",
      "Responsive design",
      "SEO optimized",
    ],
  },
  {
    id: "proj-2",
    title: "Analytics Dashboard",
    description:
      "Interactive dashboard for data visualization and real-time business metrics.",
    longDescription:
      "Modern dashboard built with React and D3.js to visualize complex data. Allows users to create custom charts, export reports, and receive real-time alerts.",
    technologies: ["React", "D3.js", "TypeScript", "Node.js", "Express"],
    url: "https://example-dashboard.com",
    repository: "https://github.com/user/dashboard",
    features: [
      "Interactive visualizations",
      "Report export",
      "Real-time alerts",
      "Customizable charts",
      "Multi-user with permissions",
    ],
  },
  {
    id: "proj-3",
    title: "Task Management App",
    description:
      "Web application for task management with real-time synchronization and team collaboration.",
    longDescription:
      "Modern task management application built with React and Firebase. Allows creating task lists, sharing with team, setting reminders, and organizing by projects.",
    technologies: ["React", "Firebase", "Material-UI", "JavaScript"],
    url: "https://example-tasks.com",
    repository: "https://github.com/user/task-app",
    features: [
      "Real-time synchronization",
      "Team collaboration",
      "Reminders",
      "Project organization",
      "Dark mode",
    ],
  },
];
