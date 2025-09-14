import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#section-about-me", label: "About me" },
  { href: "#section-skills", label: "Skills" },
  { href: "#section-projects", label: "Projects" },
  { href: "#section-experience", label: "Experience" },
  { href: "#section-contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-gray-400 shadow-[0_4px_2px_-1px_rgba(0,0,0,0.1)] sticky top-0 bg-white z-10">

      <div className="flex justify-between items-center p-4 text-section-title">
        <h1 className="text-lg  font-semibold">
          Patrycja Domańska - portfolio
        </h1>

        <ul className="hidden md:flex flex-row gap-6 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-gray-600"> {link.label}</a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 pb-4 bg-white shadow-inner text-section-title pt-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-gray-600 "
                onClick={() => setIsOpen(false)} 
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    
    </nav>
  );
};

export default Navbar;