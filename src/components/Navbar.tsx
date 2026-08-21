"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Netrani Scuba", href: "/netrani-scuba-diving" },
    { name: "Intro Scuba", href: "/intro-scuba-diving" },
    { name: "Blog", href: "/blog" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex flex-col pointer-events-none">
      {/* Top Contact Bar */}
      <div 
        className={`bg-[#002B5B] text-white text-[10px] md:text-xs font-semibold py-2 px-6 md:px-12 tracking-wider relative z-50 border-b border-white/5 transition-all duration-500 pointer-events-auto ${
          isScrolled ? "h-0 py-0 opacity-0 -translate-y-full overflow-hidden" : "h-auto opacity-100 translate-y-0"
        }`}
      >
        <div className="max-w-[1600px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6 md:gap-8">
            <a
              href="mailto:murudeshwar.scuba.dive@gmail.com"
              className="flex items-center gap-2 hover:text-[#00D4FF] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5 text-[#00D4FF]"
                aria-hidden="true"
              >
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              </svg>
              <span className="truncate max-w-[150px] sm:max-w-none text-gray-300 font-medium">
                murudeshwar.scuba.dive@gmail.com
              </span>
            </a>
            <a
              href="tel:+917829975777"
              data-cta="call"
              data-cta-label="top_banner_call"
              className="hidden sm:flex items-center gap-2 hover:text-[#00D4FF] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5 text-[#00D4FF]"
                aria-hidden="true"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
              </svg>
              <span className="text-gray-300 font-medium">Call +91 78299 75777</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="tel:+917829975777"
              data-cta="call"
              data-cta-label="top_banner_call_mobile"
              className="sm:hidden flex items-center gap-2 hover:text-[#00D4FF] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5 text-[#00D4FF]"
                aria-hidden="true"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
              </svg>
              <span className="text-gray-300 font-medium">+91 78299 75777</span>
            </a>
            <a
              href="tel:+917829975777"
              data-cta="call"
              data-cta-label="top_banner_call_secondary"
              className="hidden sm:flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-0.5 rounded-full hover:bg-white/15 transition-all text-gray-200 text-[10px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5 text-[#00D4FF]"
                aria-hidden="true"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
              </svg>
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <div 
        className={`w-full transition-all duration-500 ease-out pointer-events-auto ${
          isScrolled 
            ? "py-2 px-4 md:px-8 max-w-5xl mx-auto mt-4 rounded-full glass-panel-heavy shadow-2xl shadow-black/85 border border-white/15" 
            : "bg-gradient-to-b from-black/90 via-black/40 to-transparent pt-4 pb-12 px-6 md:px-12"
        }`}
      >
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          <Link
            className="flex flex-col leading-none z-50 hover:opacity-90 transition-opacity"
            href="/"
          >
            <span className="text-xl md:text-2xl font-black tracking-widest text-white font-display">
              MURUDESHWAR
            </span>
            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.25em] text-[#00D4FF] uppercase">
              - SCUBA DIVE -
            </span>
          </Link>

          {/* Desktop Navigation Link Menu */}
          <div className="hidden xl:flex items-center gap-10 text-xs font-semibold uppercase tracking-widest">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  className={`relative py-1.5 transition-colors duration-300 font-display ${
                    isActive
                      ? "text-[#00D4FF]"
                      : "text-gray-300 hover:text-white"
                  } after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#00D4FF] after:origin-right hover:after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                    isActive ? "after:scale-x-100" : ""
                  }`}
                  href={link.href}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4 z-50">
            <a
              href="tel:+917829975777"
              data-cta="call"
              data-cta-label="navbar_call"
              className="hidden md:inline-flex items-center gap-2 bg-[#00D4FF] text-black text-xs font-bold py-2.5 px-6 rounded-full uppercase tracking-widest hover:bg-[#80e9ff] transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5"
                aria-hidden="true"
              >
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
              </svg>
              Call Now
            </a>
            <button
              onClick={toggleMenu}
              className="xl:hidden text-white hover:text-[#00D4FF] transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-7 h-7"
                aria-hidden="true"
              >
                {isOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <path d="M4 5h16"></path>
                    <path d="M4 12h16"></path>
                    <path d="M4 19h16"></path>
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer Menu */}
      <div
        className={`fixed inset-0 bg-[#00111F]/98 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out xl:hidden pointer-events-auto ${
          isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
        }`}
      >
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              onClick={() => setIsOpen(false)}
              className={`text-xl font-bold uppercase tracking-widest transition-colors font-display ${
                isActive ? "text-[#00D4FF]" : "text-gray-300 hover:text-white"
              }`}
              href={link.href}
            >
              {link.name}
            </Link>
          );
        })}
        <a
          href="tel:+917829975777"
          className="mt-6 bg-[#00D4FF] text-black font-bold py-3.5 px-8 rounded-full uppercase tracking-widest text-xs hover:bg-[#80e9ff] transition-all hover:scale-105 shadow-[0_0_20px_rgba(0,212,255,0.3)]"
        >
          Call desk: +91 78299 75777
        </a>
      </div>
    </nav>
  );
}


