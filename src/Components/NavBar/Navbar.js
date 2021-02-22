import React from 'react'
import logo from '../../images/logowithBg.png';
function NavBar() {
    return (
        <div className="navbar">
            <ul className="navbar-nav">
                <li className="logo">
                    <a href="/" className="nav-link logo-link">
                        <span className="link-text logo-text">@rajivnayanc</span>
                        <img src={logo} className="logoImg" alt="logo"/>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link active">
                        <i className="fa fa-info"></i>
                        <span className="link-text">About</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link">
                        <i className="fa fa-globe"></i>
                        <span className="link-text">Globe</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link">
                        <i className="fa fa-circle"></i>
                        <span className="link-text">Circle</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link">
                        <i className="fa fa-square"></i>
                        <span className="link-text">Square</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link">
                        <i className="fa fa-spinner"></i>
                        <span className="link-text">Spinner</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link">
                        <i className="fa fa-github"></i>
                        <span className="link-text">Github</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link">
                        <i className="fa fa-twitter"></i>
                        <span className="link-text">Twitter</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;
