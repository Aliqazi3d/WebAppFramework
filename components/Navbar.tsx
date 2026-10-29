"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";

const links = [["/", "Home"], ["/animals", "Animals"], ["/events", "Events"], ["/voucher", "Voucher"]];

export default function Navbar() {
  const path = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const isActive = (href: string) => (href === "/" ? path === "/" : path.startsWith(href));

  return (
    <nav aria-label="Main" className="sticky top-0 z-10 flex items-center justify-between bg-brand px-4 py-3 text-white">
      <span className="hidden font-display font-bold sm:block">Alder Brook</span>
      <ul className="flex gap-4 md:gap-8">
        {links.map(([href, label]) => (
          <li key={href}>
            <Link href={href} aria-current={isActive(href) ? "page" : undefined}
              className="px-1 py-2 hover:underline aria-[current=page]:font-bold aria-[current=page]:text-accent">
              {label}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        aria-label="Toggle dark mode" className="min-h-11 min-w-11">
        <span className="dark:hidden">🌙</span><span className="hidden dark:inline">☀️</span>
      </button>
    </nav>
  );
}
