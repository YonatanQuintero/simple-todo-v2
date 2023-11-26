import { createContext, useEffect, useState, useContext } from "react"

export const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("todo-theme") || "light")
  useEffect(() => {
    localStorage.setItem("todo-theme", theme)
    document.documentElement.setAttribute("data-bs-theme", theme)
  }, [theme])
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}
