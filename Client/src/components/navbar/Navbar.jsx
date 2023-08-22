import React from 'react'
import "./Navbar.css"

function Navbar() {

  return (
    <header className="header" data-header>
      <div className="container">

        <div className='logo-name'>
          <img className='comp-logo' src="images/logo.png" alt="" />
          <img className='comp-logo1'  src="images/logoName.png" alt="" />
          {/*<a href="#" className="logo">ZIPLINE</a>*/}
        </div>

        <nav className="navbar" data-navbar>

          <ul className="navbar-list">

            <li className="navbar-item">
              <a href="/" className="navbar-link" data-nav-link>
                <span>Home</span>

                <ion-icon name="chevron-forward"></ion-icon>
              </a>
            </li>

            <li className="navbar-item">
              <a href="about" className="navbar-link" data-nav-link>
                <span>About</span>

                <ion-icon name="chevron-forward"></ion-icon>
              </a>
            </li>

            <li className="navbar-item">
              <a href="#service" className="navbar-link" data-nav-link>
                <span>Service</span>

                <ion-icon name="chevron-forward"></ion-icon>
              </a>
            </li>

            <li className="navbar-item">
              <a href="blog" className="navbar-link" data-nav-link>
                <span>Blog</span>

                <ion-icon name="chevron-forward"></ion-icon>
              </a>
            </li>

            <li className="navbar-item">
              <a href="contact" className="navbar-link" data-nav-link>
                <span>Contact</span>

                <ion-icon name="chevron-forward"></ion-icon>
              </a>
            </li>

          </ul>

        </nav>

        {/* <div className="header-contact">

        <div>
          <p className="contact-label">Free Call In U.S.A</p>

          <a href="tel:12345678910" className="contact-number">1 234 567 8910</a>
        </div>

        <div className="contact-icon">
          <ion-icon name="call-outline"></ion-icon>
        </div>

      </div> */}

        <button className="nav-open-btn" aria-label="Open menu" data-nav-toggler>
          <ion-icon name="menu-outline"></ion-icon>
        </button>

        <div className="overlay" data-nav-toggler data-overlay></div>

      </div>
    </header>
  )
}

export default Navbar