import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons for mobile menu

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 py-4 px-6 shadow-md bg-neutral-900">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navItems.map(({ name, path }) => (
              <li key={name}>
                <Link
                  to={path}
                  className="text-neutral-300 hover:text-purple-400 transition-colors duration-300"
                >
                  {name}
                </Link>
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
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                className="text-neutral-300 text-lg hover:text-purple-400 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {name}
              </Link>
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
