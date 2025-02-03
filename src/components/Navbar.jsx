import React from "react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Skills", path: "/skills" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <ul className="flex flex-col md:flex-row md:space-x-8">
        {navItems.map(({ name, path }) => (
          <li key={name}>
            <Link to={path} className="block p-2 hover:text-blue-400">
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;