// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <>
          <Navbar />
          {isDarkTheme ? (
            <div className="not-found-cont-2">
              <img
                className="not-img"
                alt="not found"
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              />
              <h1 className="not-heading-2">Lost Your Way?</h1>
              <p className="not-para-2">
                we cannot seem to find the page you are looking for?
              </p>
            </div>
          ) : (
            <div className="not-found-cont">
              <img
                className="not-img"
                alt="not found"
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              />
              <h1 className="not-heading">Lost Your Way?</h1>
              <p className="not-para">
                we cannot seem to find the page you are looking for?
              </p>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
