import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "@/components/Header";
import { mockTranslations } from "@/__mocks__/mockTranslations";

jest.mock("@/contexts/LocaleContext", () => ({
  useLocale: () => ({ locale: "en" }),
}));

jest.mock("@/lib/i18n", () => ({
  getTranslations: () => mockTranslations.en,
}));

jest.mock("@/components/ThemeToggle", () => ({
  ThemeToggle: () => <div data-testid="theme-toggle">ThemeToggle</div>,
}));

jest.mock("@/components/LanguageSelector", () => ({
  LanguageSelector: () => (
    <div data-testid="language-selector">LanguageSelector</div>
  ),
}));

describe("Header", () => {
  it("renders correctly the main structure", () => {
    render(<Header />);

    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });

  it("renders ThemeToggle component", () => {
    render(<Header />);

    const themeToggle = screen.getByTestId("theme-toggle");
    expect(themeToggle).toBeInTheDocument();
  });

  it("renders LanguageSelector component", () => {
    render(<Header />);

    const languageSelector = screen.getByTestId("language-selector");
    expect(languageSelector).toBeInTheDocument();
  });

  it("renders both ThemeToggle and LanguageSelector components", () => {
    render(<Header />);

    const themeToggle = screen.getByTestId("theme-toggle");
    const languageSelector = screen.getByTestId("language-selector");

    expect(themeToggle).toBeInTheDocument();
    expect(languageSelector).toBeInTheDocument();
  });

  it("applies correct CSS classes to header", () => {
    render(<Header />);

    const header = screen.getByRole("banner");
    expect(header).toHaveClass("fixed", "top-0", "left-0", "right-0", "z-50");
  });
});
