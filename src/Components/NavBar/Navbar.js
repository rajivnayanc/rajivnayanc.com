import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { Links } from '../../shared/links';
import { NavLinksList } from './NavLinksList';
import './navbarstyles.css';

function NavBar(props) {
    const [navMenuExpanded, setNavMenuExpanded] = useState(false);

    const handleDocClick = (e) => {
        const navbarContainer = document.getElementById('navbarContainer');
        if (e.target !== navbarContainer && !navbarContainer.contains(e.target)) {
            setNavMenuExpanded(false);
            document.removeEventListener('click', handleDocClick, true);
        }
    }

    const toggleNavBarMenu = (e) => {
        e.preventDefault();
        if (!navMenuExpanded) {
            document.addEventListener('click', handleDocClick, true);
        }
        setNavMenuExpanded(!navMenuExpanded);
    }

    const hideNavBarMenu = () => {
        setNavMenuExpanded(false);
    }

    // Logo color handled by CSS fill/stroke now, but keeping prop if needed for other logic
    // const logoColor = props.theme === "light" ? "#222" : "#abc"; 

    const NavLinksComponents = NavLinksList.map((data, ind) => (
        <li key={ind} className="nav-item">
            {data.external ? (
                <a onClick={hideNavBarMenu} href={data.path} target="_blank" rel="noopener noreferrer" className="nav-link">
                    <i className={data.icon}></i>
                    <span className="link-text">{data.name}</span>
                </a>
            ) : (
                <NavLink onClick={hideNavBarMenu} to={data.path} className="nav-link" activeClassName="active">
                    <i className={data.icon}></i>
                    <span className="link-text">{data.name}</span>
                </NavLink>
            )}
        </li>
    ));

    const SocialMediaLinks = Links.socialmedia.map((data, ind) => (
        <li key={ind} className="nav-item">
            <a rel="noreferrer" target="_blank" href={data.link} className="nav-link">
                <i className={data.icon}></i>
                <span className="link-text">{data.name}</span>
            </a>
        </li>
    ));

    return (
        <nav id="navbarContainer" className="navbar">
            {/* Header with Brand Name */}
            <div className="logo">
                <div className="logo-left">
                    <Link className="logo-link" to="/">
                        <Logo className="logoImg" alt="logo" />
                    </Link>
                </div>
                <div className="logo-center">
                    <Link className="logo-link" to="/">
                        <span className="logo-text">{props.brandName || "rajivnayanc"}</span>
                    </Link>
                </div>
                <div className="logo-right header-controls">
                    <button onClick={toggleNavBarMenu} className="toggleButton">
                        <i className="fa fa-bars"></i>
                    </button>
                </div>
            </div>

            {/* Collapsible NavBar */}
            <div className={`navbar-menu${navMenuExpanded ? ' active-menu' : ''}`}>
                <ul className="navbar-nav">
                    {NavLinksComponents}

                    {/* Theme Toggle */}
                    <li onClick={() => props.setTheme()} className="nav-item theme-toggle-item" style={{ cursor: "pointer", marginTop: 'auto' }}>
                        <div className="nav-link">
                            <i className={`fas fa-${props.theme === "light" ? "sun" : "moon"}-o theme-toggle-icon`}
                                style={{ color: props.theme === 'dark' ? 'var(--accent-primary)' : 'var(--text-primary)' }}></i>
                            <span className="link-text">{props.theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
                        </div>
                    </li>
                </ul>

                {/* Social Links inside menu so they show on mobile */}
                <div className="navbar-social_links">
                    <ul className="navbar-nav social-nav">
                        {SocialMediaLinks}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
