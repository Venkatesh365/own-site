import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwtToken')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <Link to="/">
         
        </Link>
        <ul className="nav-menu">
          <Link to="/" className="nav-link">
            <li>Home</li>
          </Link>
          <Link to="/products" className="nav-link">
            <li>Products</li>
          </Link>
          <Link to="/cart" className="nav-link">
            <li>Cart</li>
          </Link>
        </ul>
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogout}
        >
          Logout
        </button>
        <button
          type="button"
          className="logout-mobile-btn"
          onClick={onClickLogout}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="logout icon"
            className="logout-icon"
          />
        </button>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <Link to="/">
            <li className="nav-menu-item-mobile">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="nav-bar-image"
              />
            </li>
          </Link>
          <Link to="/products">
            <li className="nav-menu-item-mobile">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
                alt="nav products"
                className="nav-bar-image"
              />
            </li>
          </Link>
          <Link to="/cart">
            <li className="nav-menu-item-mobile">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
                alt="nav cart"
                className="nav-bar-image"
              />
            </li>
          </Link>
          <li className="nav-menu-item-mobile">
              <img
                src="data:image/png;base64,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"
                alt="nav cart"
                className="nav-bar-image"
              />
            </li>
          
        </ul>
      </div>
    </nav>
  )
}
export default withRouter(Header)
