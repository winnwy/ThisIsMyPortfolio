import React from "react";
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <section className="border-b border-neutral-900 pb-20">
      <div className="container mx-auto px-8">
        <h1 className="my-10 text-center text-4xl font-bold text-neutral-300">
          Get in Touch
        </h1>
        <div className="text-center">
          <ul className="space-y-4">
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-purple-400 transition-colors duration-300"
              >
                ✉️ Email: {CONTACT.email}
              </a>
            </li>
            <li>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-purple-400 transition-colors duration-300"
              >
                🐙 GitHub: winnwy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
