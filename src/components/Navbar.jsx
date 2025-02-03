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
    <nav className="fixed w-full top-0 left-0 text-white p-4">
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