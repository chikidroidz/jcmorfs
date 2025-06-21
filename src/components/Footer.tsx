import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

interface FooterProps {
  name: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  navLinks?: { label: string; href: string }[];
}

const Footer: React.FC<FooterProps> = ({
  name,
  linkedin,
  github,
  twitter,
  navLinks,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" text-gray-300 py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Copyright */}
        <div className="text-sm text-center md:text-left">
          &copy; {currentYear} {name}. All rights reserved.
        </div>

        {/* Center: Navigation links (optional) */}
        {navLinks && navLinks.length > 0 && (
          <nav className="flex gap-4 text-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        {/* Right: Social links */}
        <div className="flex gap-4 text-xl">
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedin />
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaGithub />
            </a>
          )}
          {twitter && (
            <a
              href={twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaTwitter />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
