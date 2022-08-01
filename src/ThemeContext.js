import { createContext, useState } from "react";

const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const toggleThemme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    const value = {
        theme,
        toggleThemme
    }
    return <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>

}
export { ThemeContext, ThemeProvider }