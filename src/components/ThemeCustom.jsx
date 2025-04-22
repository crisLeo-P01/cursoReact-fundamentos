import { useState, createContext, useContext } from "react";

// ------ USECONTEXT PARA CAMBIAR DE COLOR EL BOTON
const ThemeContext = createContext()

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

function ThemeButton() {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <button 
        onClick={toggleTheme}
        style={{
            backgroundColor: theme === 'light' ? '#FFF' : '#333',
            color: theme === 'light' ? '#000' : '#FFF',
            padding: 3,
        }}>
            Cambiar tema
        </button>
    )
}

const ThemeCustom = () => {
    return (
        <ThemeProvider>
            <ThemeButton></ThemeButton>
        </ThemeProvider>
    )
}

export default ThemeCustom