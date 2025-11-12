export type ContactType =
  | "email"
  | "linkedin"
  | "github"
  | "phone"
  | "twitter"
  | "portfolio";

export interface IContact {
  type: ContactType;
  value: string;
  icon?: string;
  url?: string;
}
