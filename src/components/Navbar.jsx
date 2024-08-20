// src/components/Navbar.js
import React, { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", text: "About" },
    { href: "#experience", text: "Experience" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 " : "bg-transparent"}`}>
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
            Lewis Micheni
          </a>
          
          {/* Mobile menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <a key={index} href={item.href} className="text-white hover:text-blue-400 transition-colors">
                {item.text}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            {navItems.map((item, index) => (
              <a key={index} href={item.href} className="block py-2 text-white hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                {item.text}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;