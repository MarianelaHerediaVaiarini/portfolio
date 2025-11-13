import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { LanguageSelector } from "@/components/LanguageSelector";

const mockSetLocale = jest.fn();

jest.mock("@/contexts/LocaleContext", () => ({
  useLocale: () => ({
    locale: "en",
    setLocale: mockSetLocale,
  }),
}));

jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

describe("LanguageSelector", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the component with current language", () => {
    render(<LanguageSelector />);
    
    const button = screen.getByRole("button", { name: /select language/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("EN");
  });

  it("displays dropdown menu when button is clicked", () => {
    render(<LanguageSelector />);
    
    const button = screen.getByRole("button", { name: /select language/i });
    fireEvent.click(button);
    
    const enOption = screen.getByRole("button", { name: "EN" });
    const esOption = screen.getByRole("button", { name: "ES" });
    
    expect(enOption).toBeInTheDocument();
    expect(esOption).toBeInTheDocument();
  });

  it("hides dropdown menu when button is clicked again", () => {
    render(<LanguageSelector />);
    
    const button = screen.getByRole("button", { name: /select language/i });
    
    fireEvent.click(button);
    expect(screen.getByRole("button", { name: "EN" })).toBeInTheDocument();
    
    fireEvent.click(button);
    expect(screen.queryByRole("button", { name: "EN" })).not.toBeInTheDocument();
  });

  it("changes language when an option is selected", () => {
    render(<LanguageSelector />);
    
    const button = screen.getByRole("button", { name: /select language/i });
    fireEvent.click(button);
    
    const esOption = screen.getByRole("button", { name: "ES" });
    fireEvent.click(esOption);
    
    expect(mockSetLocale).toHaveBeenCalledWith("es");
    expect(mockSetLocale).toHaveBeenCalledTimes(1);
  });

  it("closes dropdown after selecting a language", () => {
    render(<LanguageSelector />);
    
    const button = screen.getByRole("button", { name: /select language/i });
    fireEvent.click(button);
    
    const esOption = screen.getByRole("button", { name: "ES" });
    fireEvent.click(esOption);
    
    expect(screen.queryByRole("button", { name: "ES" })).not.toBeInTheDocument();
  });

  it("closes dropdown when clicking outside", () => {
    render(<LanguageSelector />);
    
    const button = screen.getByRole("button", { name: /select language/i });
    fireEvent.click(button);
    
    expect(screen.getByRole("button", { name: "EN" })).toBeInTheDocument();
    
    const overlay = document.querySelector(".fixed.inset-0");
    expect(overlay).toBeInTheDocument();
    
    if (overlay) {
      fireEvent.click(overlay);
    }
    
    expect(screen.queryByRole("button", { name: "EN" })).not.toBeInTheDocument();
  });

  it("highlights the current language in the dropdown", () => {
    render(<LanguageSelector />);
    
    const button = screen.getByRole("button", { name: /select language/i });
    fireEvent.click(button);
    
    const options = screen.getAllByRole("button");
    const enOption = options.find(opt => opt.textContent === "EN" && opt !== button);
    
    expect(enOption).toHaveClass("bg-gray-100", "dark:bg-gray-800", "font-medium");
  });

  it("renders both language options", () => {
    render(<LanguageSelector />);
    
    const button = screen.getByRole("button", { name: /select language/i });
    fireEvent.click(button);
    
    const allButtons = screen.getAllByRole("button");
    const languageButtons = allButtons.filter(btn => 
      btn.textContent === "EN" || btn.textContent === "ES"
    );
    
    expect(languageButtons.length).toBeGreaterThanOrEqual(2);
  });
});