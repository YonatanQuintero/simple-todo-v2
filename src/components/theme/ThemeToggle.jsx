import { useTheme } from "../../context/ThemeContext"

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <button className="btn btn-primary" onClick={toggleTheme}>
      {theme}
    </button>
  )
}

export default ThemeToggle
