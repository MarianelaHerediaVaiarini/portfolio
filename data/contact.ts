export interface Contact {
  type: "email" | "linkedin" | "github" | "phone" | "twitter" | "portfolio";
  value: string;
  icon?: string;
  url?: string;
}

export const contacts: Contact[] = [
  {
    type: "email",
    value: "marianelaherediavaiarini@gmail.com",
    url: "mailto:marianelaherediavaiarini@gmail.com",
  },
  {
    type: "linkedin",
    value: "linkedin.com/in/marianela-heredia-vaiarini-3244a3334",
    url: "https://www.linkedin.com/in/marianela-heredia-vaiarini-3244a3334/"
  },
  {
    type: "github",
    value: "github.com/MarianelaHerediaVaiarini",
    url: "https://github.com/MarianelaHerediaVaiarini",
  },
  {
    type: "phone",
    value: "+34 602 437 385",
    url: "tel:+34602437385",
  },
  {
    type: "portfolio",
    value: "www.your-portfolio.com",
    url: "https://www.your-portfolio.com",
  },
];

