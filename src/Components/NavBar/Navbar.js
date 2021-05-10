import React, { useState} from 'react'
import {ReactComponent as Logo} from '../../images/logo.svg';
import {Link, NavLink} from 'react-router-dom';
import {Links} from '../../shared/links';
import {NavLinksList} from './NavLinksList';
import './navbarstyles.css';

function NavBar(props) {
    const [navMenuExpanded, setNavMenuExpanded] = useState(false);
    const handleDocClick = (e)=>{
        const navbarContainer = document.getElementById('navbarContainer');
        if (e.target !== navbarContainer && !navbarContainer.contains(e.target)) {
            setNavMenuExpanded(false);
            document.removeEventListener('click', handleDocClick, true);
        }
    }
    const toggleNavBarMenu = (e)=>{
        e.preventDefault();
        if(!navMenuExpanded){
            document.addEventListener('click', handleDocClick, true);
        }
        setNavMenuExpanded(!navMenuExpanded);
    }

    const hideNavBarMenu = (e)=>{
        setNavMenuExpanded(false);
    }
    const logoColor = props.theme==="light"?"#222":"#abc";
    const NavLinksComponents = NavLinksList.map((data, ind)=>(
        <li key={ind} className="nav-item">
            <NavLink onClick={hideNavBarMenu} to={data.path} className="nav-link">
                <i className={data.icon}></i>
                <span className="link-text">{data.name}</span>
            </NavLink>
        </li>
    ));
    
    const SocialMediaLinks = Links.socialmedia.map((data,ind)=>(
        <li key={ind} className="nav-item">
            <a rel="noreferrer" target="_blank" href={data.link} className="nav-link">
                <i className={data.icon}></i>
                <span className="link-text">{data.name}</span>
            </a>
        </li>
    ));

    return (
        <div id="navbarContainer" className="navbar">
            {/* Header with Brand Name */}
            <div className="logo">
                <Link className="nav-link logo-link" to = "/">
                    <span className="link-text logo-text">@rajivnayanc</span>
                    {/* <img src={logo} className="logoImg" alt="logo"/> */}
                    <Logo fill={logoColor} stroke={logoColor} className="logoImg" alt="logo"/>

                    <span onClick={(e)=>{e.preventDefault();props.setTheme()}} className="d-flex d-sm-none ml-auto">
                        
                    <i style={{cursor:"pointer" ,color:`${props.theme==='dark'?'yellow':'var(--text-secondary)'}`}} 
                    className={`fas fa-${props.theme==="light"?"sun":"moon"}-o`}></i>
                    </span>
                    

                    <button onClick = {toggleNavBarMenu} className="toggleButton">
                            <i className = "fa fa-bars"></i>
                    </button>
                </Link>
            </div>

            {/* Collapsable NavBar */}
            <div className={`navbar-menu${navMenuExpanded?' active-menu':''}`}>
                <ul className="navbar-nav">
                    {NavLinksComponents}
                    <li onClick={(e)=>props.setTheme()} style={{cursor:"pointer"}} className="nav-item d-none d-sm-flex">
                        <div style={{marginLeft:"2rem", marginTop:"2rem"}}>
                            <i style={{color:`${props.theme==='dark'?'yellow':'var(--text-secondary)'}`}} className={`fas fa-${props.theme==="light"?"sun":"moon"}-o`}></i>
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
            

        </div>
    )
}

export default NavBar;
