import './index.css'

const Header = () => (
  <nav className="navbar">
    <img
      className="logo"
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
    />
    <div className="container">
      <ul className="ul-ordered-nav">
        <li className="home-name">Home</li>
        <li className="home-name">Products</li>
        <li className="home-name">Cart</li>
      </ul>
      <div>
        <button type="button" className="logout-button">
          Logout
        </button>
      </div>
    </div>
  </nav>
)
export default Header
