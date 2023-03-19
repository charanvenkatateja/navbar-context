// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickThemeChanging = () => {
        toggleTheme()
      }

      return (
        <>
          {isDarkTheme ? (
            <nav className="nav-container-2">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                className="logo-img"
                alt="website logo"
              />
              <ul className="routes-cont">
                <Link to="/">
                  <li className="route-heading-2">Home</li>
                </Link>
                <Link to="/about">
                  <li className="route-heading-2">About</li>
                </Link>
              </ul>
              <button
                className="button"
                data-testid="theme"
                type="button"
                onClick={onClickThemeChanging}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                  className="logo-img-2"
                />
              </button>
            </nav>
          ) : (
            <nav className="nav-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                className="logo-img"
                alt="website logo"
              />
              <ul className="routes-cont">
                <Link to="/">
                  <li className="route-heading">Home</li>
                </Link>
                <Link to="/about">
                  <li className="route-heading">About</li>
                </Link>
              </ul>
              <button
                className="button"
                data-testid="theme"
                type="button"
                onClick={onClickThemeChanging}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="theme"
                  className="logo-img-2"
                />
              </button>
            </nav>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
