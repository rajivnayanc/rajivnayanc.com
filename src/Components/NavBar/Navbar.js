import React, { useState} from 'react'
import logo from '../../images/logowithBg.png';
function NavBar() {
    const [navMenuExpanded, setNavMenuExpanded] = useState(false);
    
    return (
        <div className="navbar">
            {/* Header with Brand Name */}
            <div className="logo">
                <a href="/" className="nav-link logo-link">
                    <span className="link-text logo-text">@rajivnayanc</span>
                    <img src={logo} className="logoImg" alt="logo"/>
                    <button
                        onClick = {(e)=>{
                            e.preventDefault();
                            setNavMenuExpanded(!navMenuExpanded);
                        }}
                        className="toggleButton">
                            <i className = "fa fa-bars"></i>
                    </button>
                </a>
            </div>

            {/* Collapsable NavBar */}
            <div className={`navbar-menu${navMenuExpanded?' active-menu':''}`}>
                <ul className="navbar-nav">
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
                    
                </ul>
            </div>

            {/* Large Screen nav Social Links */}
            <div className="navbar-social_links">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <i className="fa fa-twitter"></i>
                            <span className="link-text">Twitter</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <i className="fa fa-facebook"></i>
                            <span className="link-text">Facebook</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <i className="fa fa-instagram"></i>
                            <span className="link-text">Instagram</span>
                        </a>
                    </li>
                </ul>
            </div>
            

        </div>
    )
}

export default NavBar;
