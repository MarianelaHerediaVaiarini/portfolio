export interface ITranslations {
  nav: {
    home: string;
    about: string;
    experience: string;
    technologies: string;
    contact: string;
  };
  hero: {
    name: string;
    surname: string;
    subtitle: string;
    description: string;
  };
  about: {
    title: string;
    description: string;
    description2: string;
  };
  experience: {
    title: string;
    period: string;
    achievements: string;
    technologies: string;
    viewDetails: string;
    back: string;
    description: string;
    months: Record<string, string>;
    exp: Record<
      string,
      {
        company: string;
        position: string;
        description: string;
        achievements: string[];
      }
    >;
  };
  technologies: {
    title: string;
    categories: Record<string, string>;
    levels: Record<string, string>;
  };
  contact: {
    title: string;
    subtitle: string;
  };
  footer: {
    rights: string;
  };
}
