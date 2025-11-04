export interface Contact {
  type: "email" | "linkedin" | "github" | "phone" | "twitter" | "portfolio";
  value: string;
  icon?: string;
  url?: string;
}

export const contacts: Contact[] = [
  {
    type: "email",
    value: "your-email@example.com",
    url: "mailto:your-email@example.com",
  },
  {
    type: "linkedin",
    value: "linkedin.com/in/your-profile",
    url: "https://linkedin.com/in/your-profile",
  },
  {
    type: "github",
    value: "github.com/your-username",
    url: "https://github.com/your-username",
  },
  {
    type: "phone",
    value: "+1 234 567 8900",
    url: "tel:+12345678900",
  },
  {
    type: "portfolio",
    value: "www.your-portfolio.com",
    url: "https://www.your-portfolio.com",
  },
];

