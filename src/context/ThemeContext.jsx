import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark' ? true : false)
    const [isContrastMode, setIsContrastMode] = useState(localStorage.getItem('contrast-mode') === 'h-contrast' ? true : false)

    const toggleTheme = () => {

        updateTheme(
            { 
                darkMode: !isDarkMode, 
                contrastMode: false }
        )
        localStorage.removeItem('contrast-mode')
    }

    const toggleContrast = () => {
        updateTheme(
            { 
                darkMode: isDarkMode, 
                contrastMode: !isContrastMode 
            })

        
    }

    const updateTheme = (props) => {
        const {darkMode, contrastMode} = props

        setIsDarkMode(darkMode)
        setIsContrastMode(contrastMode)

        document.documentElement.setAttribute('data-theme', contrastMode ? 'h-contrast': darkMode ? 'dark' : 'light')

        localStorage.setItem('theme', darkMode ? 'dark' : 'light')
        !contrastMode ? localStorage.setItem('contrast-mode', 'h-contrast') : localStorage.removeItem('contrast-mode')
    }   

    return (
        <ThemeContext.Provider value={{ isDarkMode, isContrastMode, toggleTheme, toggleContrast, updateTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
