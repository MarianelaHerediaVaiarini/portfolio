import React from "react";
import { render, screen } from "@testing-library/react";
import { ExperienceCard } from "../components/ExperienceCard";
import { mockExperienceDetail } from "../__mocks__/mockExperienceDetail";
import { mockTranslations } from "../__mocks__/mockTranslations";

jest.mock("@/contexts/LocaleContext", () => ({
  useLocale: () => ({ locale: "en" }),
}));

jest.mock("@/lib/i18n", () => ({
  getTranslations: () => mockTranslations.en,
}));

jest.mock("next/link", () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
});

describe("ExperienceCard", () => {
  it("renders correctly the main data", () => {
    render(
      <ExperienceCard experience={mockExperienceDetail as any} index={0} />
    );
    expect(screen.getByText("Frontend Developer")).toBeInTheDocument();
    expect(screen.getByText("Test Company")).toBeInTheDocument();
    expect(screen.getByText("January 2020 - Present")).toBeInTheDocument();
    expect(screen.getByText("Worked on amazing projects!")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("+1")).toBeInTheDocument();
    expect(screen.getByText("View details →")).toBeInTheDocument();
  });

   it("has correct link to experience detail", () => {
    render(
      <ExperienceCard experience={mockExperienceDetail as any} index={0} />
    );
    
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `/experience/${mockExperienceDetail.id}`);
  });

  it("link wrapp all card content", () => {
    render(
      <ExperienceCard experience={mockExperienceDetail as any} index={0} />
    );
    
    const link = screen.getByRole("link");
    
    expect(link).toContainElement(screen.getByText("Frontend Developer"));
    expect(link).toContainElement(screen.getByText("Test Company"));
    expect(link).toContainElement(screen.getByText("View details →"));
  });
});
