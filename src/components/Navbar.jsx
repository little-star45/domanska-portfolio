import { useState } from "react"
import { Menu, X } from "lucide-react"

import LightModeIcon from '../assets/navbar/sun.svg'
import DarkModeIcon from '../assets/navbar/moon.svg'
import EyeOpenIcon from '../assets/navbar/eyeOpen.svg'
import EyeClosedIcon from '../assets/navbar/eyeClose.svg'

import { useTheme } from '../hooks/useTheme.jsx'

const navLinks = [
  { href: "#section-about-me", label: "About me" },
  { href: "#section-skills", label: "Skills" },
  { href: "#section-projects", label: "Projects" },
  { href: "#section-experience", label: "Experience" },
  { href: "#section-contact", label: "Contact" },
]

const Navbar = () => {
  const { toggleTheme, isDarkMode, toggleContrast, isContrastMode } = useTheme()

  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="shadow-gray-400 shadow-[0_4px_2px_-1px_rgba(0,0,0,0.1)] sticky top-0 bg-white z-10 dark:text-[#213547] h-contrast:bg-h-contrast">

      <div className="flex justify-between items-center p-4 text-section-title">
        <h1 className="text-lg  font-semibold">
          Patrycja Domańska - portfolio
        </h1>

        <section className="flex flex-row gap-6 justify-center items-center align-baseline">
          <ul className="hidden lg:flex flex-row gap-6 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-gray-600 h-contrast:hover:text-yellow-h-contrast"> {link.label}</a>
            </li>
          ))}
        </ul>
        <button className="lg:hidden text-black h-contrast:text-yellow-h-contrast cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <button onClick={toggleTheme} className={`cursor-pointer border-2 rounded-full text-black ${isDarkMode ? 'bg-gray-300 hover:bg-white' : 'bg-white hover:bg-gray-300 '} h-contrast:bg-yellow-h-contrast h-contrast:hover:bg-amber-500`}>
          <img 
            src={isDarkMode ? DarkModeIcon : LightModeIcon} 
            alt="theme icon" className="w-6 h-6 m-1" 
            // stroke="#0f283a" 
            // strokeWidth={4}
          />
        </button>
        <button onClick={toggleContrast} className="cursor-pointer border-2 rounded-full text-black hover:bg-yellow-h-contrast h-contrast:bg-yellow-h-contrast h-contrast:hover:bg-amber-500">
          <img 
            src={isContrastMode ? EyeClosedIcon : EyeOpenIcon}
            alt="theme icon" className="w-6 h-6 m-1"
            // stroke="#0f283a"
            // strokeWidth={4}
          />
        </button>
        
        </section>
      </div>

      {isOpen && (
        <ul className="lg:hidden flex flex-col items-center gap-4 pb-4 bg-white shadow-inner text-section-title pt-4 h-contrast:bg-h-contrast h-contrast:border-yellow-h-contrast h-contrast:border-4 h-contrast:rounded-b-lg">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-gray-600 h-contrast:hover:text-yellow-h-contrast" onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}

    </nav>
  )
}

export default Navbar