import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Alder Brook Wildlife Centre",
  description: "Wildlife rescue, events and conservation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-stone-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
        <Providers>
          <Navbar />
          <main className="mx-auto max-w-4xl p-4 md:p-8">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
