import Logo from '../../images/logo.svg'

import './Navbar.css'

const Navbar = () => {
  return (
    <>
        <nav className="nav">
            <div className="nav-left">
                <a className="nav-item">
                    <img src={Logo} alt="Bulma logo" />
                </a>
            </div>
            <div className="nav-right">
                <a className="nav-item" href='#'>
                    <span className="links">
                        About
                    </span>
                </a>
                <a className="nav-item" href='#'>
                    <span className="links">
                        Careers
                    </span>
                </a>
                <a className="nav-item" href='#'>
                    <span className="links">
                        Events
                    </span>
                </a>
                <a className="nav-item" href='#'>
                    <span className="links">
                        Products
                    </span>
                </a>
                <a className="nav-item" href='#'>
                    <span className="links">
                        Support
                    </span>
                </a>
            </div>
        </nav>
    </>
  )
}

export default Navbar