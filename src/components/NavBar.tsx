// src/components/Navbar.tsx
import React, { useState } from "react";

// Define the structure for navigation links
interface NavLink {
  id: string; // The ID of the section to scroll to
  label: string; // The text displayed in the navigation
}

/**
 * NavigationBar component for the portfolio.
 * Provides sticky navigation with links to different sections and a responsive mobile menu.
 *
 * @returns {JSX.Element} The rendered navigation bar.
 */
const NavBar: React.FC = () => {
  // State to manage the visibility of the mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Define navigation links
  const navLinks: NavLink[] = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
  ];

  // Function to handle smooth scrolling when a navigation link is clicked
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Scroll smoothly to the target element
      element.scrollIntoView({ behavior: "smooth" });
      // Close the mobile menu after clicking a link
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="bg-[#324a56] text-gray-100 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo or Site Title */}
          <div className="flex-shrink-0">
            <a
              href="#hero"
              className="text-2xl font-bold text-gray-100  hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200"
              onClick={() => handleScroll("hero")}
            >
              My Portfolio
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`} // Standard href for accessibility and fallback
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor jump
                    handleScroll(link.id); // Use custom smooth scroll
                  }}
                  className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                // Close Icon (X)
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`} // Standard href for accessibility and fallback
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor jump
                handleScroll(link.id); // Use custom smooth scroll
              }}
              className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
