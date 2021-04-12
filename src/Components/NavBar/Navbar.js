import React, { useState} from 'react'
import logo from '../../images/logowithBg.png';
import {Link, NavLink} from 'react-router-dom';

import './navbarstyles.css';

function NavBar() {
    const [navMenuExpanded, setNavMenuExpanded] = useState(false);
    const toggleNavBarMenu = (e)=>{
        e.preventDefault();
        setNavMenuExpanded(!navMenuExpanded);
    }

    const hideNavBarMenu = (e)=>{
        setNavMenuExpanded(false);
    }
    return (
        <div className="navbar">
            {/* Header with Brand Name */}
            <div className="logo">
                <Link className="nav-link logo-link" to = "/">
                    <span className="link-text logo-text">@rajivnayanc</span>
                    <img src={logo} className="logoImg" alt="logo"/>
                    <button onClick = {toggleNavBarMenu} className="toggleButton">
                            <i className = "fa fa-bars"></i>
                    </button>
                </Link>
            </div>

            {/* Collapsable NavBar */}
            <div className={`navbar-menu${navMenuExpanded?' active-menu':''}`}>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink onClick={hideNavBarMenu} to="/home" className="nav-link">
                            <i className="fa fa-home"></i>
                            <span className="link-text">Home</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink onClick={hideNavBarMenu} to="/about-us" className="nav-link">
                            <i className="fa fa-info"></i>
                            <span className="link-text">About Me</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink onClick={hideNavBarMenu} to="/education" className="nav-link">
                            <i className="fa fa-book"></i>
                            <span className="link-text">Education</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink onClick={hideNavBarMenu} to="/experience" className="nav-link" activeStyle>
                            <i className="fa fa-briefcase"></i>
                            <span className="link-text">Experience</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink onClick={hideNavBarMenu} to="/projects" className="nav-link" activeStyle>
                            <i className="fa fa-tasks"></i>
                            <span className="link-text">Projects</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink onClick={hideNavBarMenu} to="/publications" className="nav-link" activeStyle>
                            <i className="fa fa-file"></i>
                            <span className="link-text">Publications</span>
                        </NavLink>
                    </li>
                    
                </ul>
            </div>

            {/* Large Screen nav Social Links */}
            <div className="navbar-social_links">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a rel="noreferrer" target="_blank" href="https://github.com/rajivnayanc" className="nav-link">
                            <i className="fa fa-github"></i>
                            <span className="link-text">Github</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/rajivnayanc/" className="nav-link">
                            <i className="fa fa-linkedin"></i>
                            <span className="link-text">LinkedIn</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a rel="noreferrer" target="_blank" href="https://twitter.com/rajivnayanc" className="nav-link">
                            <i className="fa fa-twitter"></i>
                            <span className="link-text">Twitter</span>
                        </a>
                    </li>
                </ul>
            </div>
            

        </div>
    )
}

export default NavBar;
