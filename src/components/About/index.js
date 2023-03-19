// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Navbar />
          {isDarkTheme ? (
            <div className="about-container-2">
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
                className="about-image"
              />
              <h1 className="about-heading-2">About</h1>
            </div>
          ) : (
            <div className="about-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
                className="about-image"
              />
              <h1 className="about-heading">About</h1>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
