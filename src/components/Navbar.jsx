import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for mobile menu

const navItems = [
  { name: "Home", id: "about" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = 64; 
      const yOffset = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: yOffset, behavior: "smooth" });
    }
    setIsOpen(false);
  };


  return (
    <>
      <nav className="fixed top-0 w-full z-50 py-4 px-6 shadow-md bg-neutral-900">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map(({ name, id }) => (
              <li key={id}>
                <button
                  onClick={() => scrollToSection(id)}
                  className="text-neutral-300 hover:text-purple-400 transition-colors duration-300"
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Icon */}
          <button
            className="md:hidden text-neutral-300 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
      {/* Mobile Navigation */}
      <div
        className={`fixed top-8 left-0 w-full bg-neutral-900 py-6 transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden`}
      >
        <ul className="flex flex-col items-center space-y-4">
          {navItems.map(({ name, id }) => (
            <li key={id}>
              <button
                onClick={() => scrollToSection(id)}
                className="text-neutral-300 text-lg hover:text-purple-400 transition-colors duration-300"
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Add margin to body so content isn't hidden under navbar */}
      <div className="mt-20"></div>
    </>
  );
};

export default Navbar;
