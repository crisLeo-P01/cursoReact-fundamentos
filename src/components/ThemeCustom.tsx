import { useState, createContext, useContext } from "react";

type ThemeContentType = {
    theme: string;
    toggleTheme: () => void;
};

// Proveer un valor inicial vacío y manejar el caso undefined
const ThemeContext = createContext<ThemeContentType | undefined>(undefined);

function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

function ThemeButton() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("ThemeButton must be used within a ThemeProvider");
    }

    const { theme, toggleTheme } = context;

    return (
        <button
            onClick={toggleTheme}
            style={{
                backgroundColor: theme === "light" ? "#FFF" : "#333",
                color: theme === "light" ? "#000" : "#FFF",
                padding: 3,
            }}
        >
            Cambiar tema
        </button>
    );
}

const ThemeCustom = () => {
    return (
        <ThemeProvider>
            <ThemeButton />
        </ThemeProvider>
    );
};

export default ThemeCustom;
