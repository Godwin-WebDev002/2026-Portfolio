"use client";

import { useState, useEffect } from "react";
import { cn } from "../../lib/utils";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "What I Do", href: "#what-i-do" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
];

export function Nav() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="glass px-6 py-2 rounded-full flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={cn(
              "text-sm sm:text-lg font-medium transition-colors hover:text-primary",
              activeSection === item.href.slice(1)
                ? "text-muted-foreground"
                : "text-primary"
            )}
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
