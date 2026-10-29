"use client";
import { ThemeProvider } from "next-themes";

// next-themes handles dark mode, system preference and saving the choice
export default function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider attribute="class" defaultTheme="system" enableSystem>{children}</ThemeProvider>;
}
