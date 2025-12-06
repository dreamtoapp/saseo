"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

interface HeaderProps {
  lang?: "en" | "ar";
}

const navItems = [
  { id: "what-is", label: "ما هو Modonty" },
  { id: "how-it-works", label: "كيف يعمل" },
  { id: "why-different", label: "لماذا مختلف" },
  { id: "target-audience", label: "لمن" },
  { id: "pricing", label: "الأسعار" },
  { id: "why-strong", label: "لماذا قوي" },
];

export function Header({ lang = "ar" }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className={`sticky top-0 z-50 w-full border-b bg-white shadow-sm transition-shadow ${isScrolled ? "shadow-md" : ""}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo1.webp"
              alt="Logo"
              width={200}
              height={45}
              className="h-12 w-auto"
              priority
            />
            <span className="text-2xl md:text-3xl font-bold">
              <span className="text-brand-primary">M</span>
              <span className="text-gray-800">odonty</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="text-sm lg:text-base text-gray-700 hover:text-brand-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <select
              onChange={(e) => {
                const id = e.target.value;
                if (id) {
                  const element = document.getElementById(id);
                  if (element) {
                    const offset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }
              }}
              className="text-sm text-gray-700 border border-gray-300 rounded-md px-3 py-2 bg-white"
            >
              <option value="">القائمة</option>
              {navItems.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}


