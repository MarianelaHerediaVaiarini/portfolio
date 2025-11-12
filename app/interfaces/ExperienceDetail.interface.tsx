export interface IExperience {
    company: string;
    position: string;
    period: string;
    description: string;
    achievements: string[];
    technologies: string[];
    image?: string;
}
export interface IExperienceDetail {
  id: string;
  period: string;
  technologies: string[];
  image?: string;
}