import React from "react";
import { render, screen } from "@testing-library/react";
import { ExperienceCard } from "../components/ExperienceCard";

const mockExperience = {
  id: "test-experience",
  period: "January 2020 - Present",
  technologies: ["React", "TypeScript", "Jest", "Next.js", "TailwindCSS"],
};

jest.mock("@/contexts/LocaleContext", () => ({
  useLocale: () => ({ locale: "en" }),
}));

jest.mock("@/lib/i18n", () => ({
  getTranslations: () => ({
    experience: {
      months: { January: "January", Present: "Present" },
      exp: {
        "test-experience": {
          position: "Frontend Developer",
          company: "Test Company",
          description: "Worked on amazing projects!",
        },
      },
      viewDetails: "View Details",
    },
  }),
}));

describe("ExperienceCard", () => {
  it("renderiza correctamente los datos principales", () => {
    render(<ExperienceCard experience={mockExperience as any} index={0} />);
    expect(screen.getByText("Frontend Developer")).toBeInTheDocument();
    expect(screen.getByText("Test Company")).toBeInTheDocument();
    expect(screen.getByText("January 2020 - Present")).toBeInTheDocument();
    expect(screen.getByText("Worked on amazing projects!")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("+1")).toBeInTheDocument(); // porque hay más de 4 tecnologías
    expect(screen.getByText(/View Details/)).toBeInTheDocument();
  });
});
