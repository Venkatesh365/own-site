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
        <img
            className="website-logo"
            src="https://res.cloudinary.com/pevv-ccbp-tech/image/upload/v1651476543/Screenshot_26_ybmbqt.png"
            alt="website logo"
          />
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
          <Link to="/upload" className="nav-link">
            <li>Upload</li>
          </Link>
          <Link to="/profile" className="nav-link">
            <li>Profile</li>
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
          <Link to="/upload">
          <li className="nav-menu-item-mobile">
              <img
                src="https://www.any-maze.com/wp-content/uploads/2020/06/upload2-300x300.png"
                alt="nav cart"
                className="nav-bar-image"
              />
            </li>
          </Link>
          <Link to="/profile">
            
          <li className="nav-menu-item-mobile">
              <img
                src="https://www.freeiconspng.com/thumbs/profile-icon-png/user-icon-png-person-user-profile-icon-20.png"
                alt="nav cart"
                className="nav-bar-image"
              />
            </li>
          </Link>
          
        </ul>
      </div>
    </nav>
  )
}
export default withRouter(Header)
