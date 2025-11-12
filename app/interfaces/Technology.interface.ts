export type TechnologyCategory =
  | "frontend"
  | "backend"
  | "tools"
  | "databases"
  | "language";
export type TechnologyLevel = "advanced" | "intermediate" | "basic";

export interface ITechnology {
  name: string;
  category: TechnologyCategory;
  level: TechnologyLevel;
}
