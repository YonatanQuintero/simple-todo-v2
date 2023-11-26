import { useTheme } from "../../context/ThemeContext"

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()
  return (
    <button className="btn btn-link nav-link my-0 mx-auto" onClick={toggleTheme}>
      <p className="text-info">
        {theme === "light" ? <i className="bi bi-brightness-high"></i> : <i className="bi bi-moon-stars"></i>}
      </p>
    </button>
  )
}

export default ThemeToggle
