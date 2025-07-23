import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NAVIGATION_LINKS } from "../constants";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };
  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50">
        {/* Desktop Menu */}
        <div className="mx-auto hidden items-center justify-center rounded-lg max-w-sm gap-6 bg-black/20 backdrop-blur-lg lg:flex">
          <div className="flex justify-evenly gap-6">
            <a href="#">
              <img src={logo} alt="logo" width={80} />
            </a>
          </div>
          <div>
            <ul className="flex items-center gap-4 ">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    <div className="text-sm hover:text-yellow-400 hover:scale-125 transition ease-in-out hover:-translate-y-1 duration-300 delay-150">
                      {item.label}
                    </div>
                  </a>
                </li>
              ))}
              <div className="text-sm hover:text-yellow-400 hover:scale-125 transition ease-in-out hover:-translate-y-1 duration-300 delay-150">
                <a href="https://drive.google.com/file/d/19hO85YffJD6itHgNjiSMJLkgimi2uSVn/view?usp=sharing">
                  Resume
                </a>
              </div>
            </ul>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="rounded-lg backdrop-blur-md lg:hidden">
          <div className="flex justify-between items-center">
            <div>
              <a href="#">
                <img src={logo} alt="logo" width={80} className="m-2" />
              </a>
            </div>
            <div className="flex items-center">
              <button
                className="focus:outline-none lg:hidden"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="m-2 h-6 w-5" />
                ) : (
                  <FaBars className="m-2 h-6 w-5" />
                )}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="block w-full text-xl font-semibold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <div className="block w-full text-xl font-semibold">
                <a href="https://drive.google.com/file/d/19hO85YffJD6itHgNjiSMJLkgimi2uSVn/view?usp=sharing">
                  Resume
                </a>
              </div>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
