export interface IProject {
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
