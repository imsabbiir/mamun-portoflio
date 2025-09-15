"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const menuItems = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "works", label: "Works" },
  { id: "testimonial", label: "Testimonial" },
  { id: "pricing", label: "Pricing" },
  { id: "contact", label: "Contact" },
];

function Header() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const navHeight = 80;
    const sections = menuItems
      .map((i) => document.getElementById(i.id))
      .filter(Boolean);

    const setInitialActive = () => {
      const y = window.scrollY;
      const current = sections.find(
        (s) => s.offsetTop - navHeight <= y && s.offsetTop + s.offsetHeight > y
      );
      if (current) setActive(current.id);
      else setActive("home");
    };

    setInitialActive();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      {
        root: null,
        rootMargin: `-${navHeight}px 0px -55% 0px`,
        threshold: 0.2,
      }
    );

    sections.forEach((s) => observer.observe(s));

    const onScroll = () => {
      setInitialActive();

      if (window.scrollY > 150) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`w-full h-20 flex fixed top-0 left-0 z-50 items-center main-bg transition-all duration-500 ${
        sticky
          ? "fixed top-0 left-0 z-50 shadow-md transform translate-y-0"
          : "relative shadow-none"
      }`}
    >
      <div className="w-[90%] md:w-[85%] mx-auto flex justify-between items-center bg-[#03756a] rounded-full px-6 py-2">
        {/* Logo */}
        <div className="text-xl font-black text-[#faa811]">Mamun.</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          <ul className="flex gap-5">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  className={`transition-colors duration-200 hover:text-[#faa811] ${
                    active === item.id ? "text-[#faa811]" : "text-white/90"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#03756a] shadow-lg md:hidden">
          <ul className="flex flex-col items-center py-6 gap-6">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={`#${item.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block transition-colors duration-200 hover:text-[#faa811] ${
                    active === item.id ? "text-[#faa811]" : "text-white/90"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
