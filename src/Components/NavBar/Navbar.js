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
            <NavLink onClick={hideNavBarMenu} to={data.path} className="nav-link" activeClassName="active">
                <i className={data.icon}></i>
                <span className="link-text">{data.name}</span>
            </NavLink>
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
                <Link className="logo-link" to="/">
                    <Logo className="logoImg" alt="logo" />
                    <span className="logo-text">rajivnayanc</span>
                </Link>

                {/* Mobile Theme Toggle */}
                <div className="d-flex d-sm-none mobile-theme-toggle" onClick={(e) => { e.preventDefault(); props.setTheme() }}>
                    <i className={`fas fa-${props.theme === "light" ? "sun" : "moon"}-o theme-toggle-icon`}
                        style={{ color: props.theme === 'dark' ? 'var(--accent-primary)' : 'var(--text-primary)' }}></i>
                </div>

                <button onClick={toggleNavBarMenu} className="toggleButton">
                    <i className="fa fa-bars"></i>
                </button>
            </div>

            {/* Collapsible NavBar */}
            <div className={`navbar-menu${navMenuExpanded ? ' active-menu' : ''}`}>
                <ul className="navbar-nav">
                    {NavLinksComponents}

                    {/* Desktop Theme Toggle */}
                    <li onClick={() => props.setTheme()} className="nav-item d-none d-sm-flex" style={{ cursor: "pointer", marginTop: 'auto' }}>
                        <div className="nav-link">
                            <i className={`fas fa-${props.theme === "light" ? "sun" : "moon"}-o theme-toggle-icon`}
                                style={{ color: props.theme === 'dark' ? 'var(--accent-primary)' : 'var(--text-primary)' }}></i>
                            <span className="link-text">{props.theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
                        </div>
                    </li>
                </ul>
            </div>

            {/* Large Screen nav Social Links */}
            <div className="navbar-social_links">
                <ul className="navbar-nav">
                    {SocialMediaLinks}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
