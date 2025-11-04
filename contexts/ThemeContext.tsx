"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Read theme from DOM (set by inline script) to avoid hydration mismatch
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      // The inline script already set the class, so read it
      return document.documentElement.classList.contains("dark") ? "dark" : "light";
    }
    return "light"; // Server-side default
  });
  const [mounted, setMounted] = useState(false);

  const updateTheme = useCallback((newTheme: Theme) => {
    if (typeof window !== "undefined") {
      const root = document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(newTheme);
      localStorage.setItem("theme", newTheme);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setMounted(true);
      // Ensure state matches what's in localStorage and DOM
      const stored = localStorage.getItem("theme") as Theme | null;
      const domHasDark = document.documentElement.classList.contains("dark");
      
      // Use stored preference, or what's on DOM, or default to light
      const currentTheme = stored || (domHasDark ? "dark" : "light");
      
      // Sync state and DOM - only update if different
      setTheme((prevTheme) => {
        if (prevTheme !== currentTheme) {
          return currentTheme;
        }
        return prevTheme;
      });
      // Ensure DOM is correct
      updateTheme(currentTheme);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once on mount

  const toggleTheme = useCallback(() => {
    if (typeof window === "undefined") return;
    
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      
      // Update DOM immediately
      const root = document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(newTheme);
      
      // Save to localStorage
      localStorage.setItem("theme", newTheme);
      
      return newTheme;
    });
  }, []);
  
  // Sync DOM with theme state whenever it changes
  useEffect(() => {
    if (typeof window !== "undefined" && mounted) {
      const root = document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(theme);
    }
  }, [theme, mounted]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

