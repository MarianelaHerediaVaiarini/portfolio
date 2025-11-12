import React from "react";
import { render, screen } from "@testing-library/react";
import { ExperienceDetail } from "@/components/ExperienceDetail";
import { mockExperienceDetail } from "../__mocks__/mockExperienceDetail";
import { mockTranslations } from "../__mocks__/mockTranslations";

jest.mock("@/contexts/LocaleContext", () => ({
  useLocale: () => ({ locale: "en" }),
}));

jest.mock("@/lib/i18n", () => ({
  getTranslations: () => mockTranslations.en,
}));

describe("ExperienceDetail", () => {
  it("renders correctly the main data", () => {
    render(<ExperienceDetail experience={mockExperienceDetail as any} />);
    expect(screen.getByText("Frontend Developer")).toBeInTheDocument();
    expect(screen.getByText("Test Company")).toBeInTheDocument();
    expect(screen.getByText("January 2020 - Present")).toBeInTheDocument();
    expect(screen.getByText("Worked on amazing projects!")).toBeInTheDocument();
  });
});
