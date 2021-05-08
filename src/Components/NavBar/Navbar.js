import React, { useState} from 'react'
import logo from '../../images/logowithBg.png';
import {Link, NavLink} from 'react-router-dom';
import {Links} from '../../shared/links';
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
    return (
        <div id="navbarContainer" className="navbar">
            {/* Header with Brand Name */}
            <div className="logo">
                <Link className="nav-link logo-link" to = "/">
                    <span className="link-text logo-text">@rajivnayanc</span>
                    <img src={logo} className="logoImg" alt="logo"/>

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
                        <NavLink onClick={hideNavBarMenu} to="/experience" className="nav-link">
                            <i className="fa fa-briefcase"></i>
                            <span className="link-text">Experience</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink onClick={hideNavBarMenu} to="/projects" className="nav-link">
                            <i className="fa fa-tasks"></i>
                            <span className="link-text">Projects</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink onClick={hideNavBarMenu} to="/publications" className="nav-link">
                            <i className="fa fa-file"></i>
                            <span className="link-text">Publications</span>
                        </NavLink>
                    </li>
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
                    <li className="nav-item">
                        <a rel="noreferrer" target="_blank" href={Links.github} className="nav-link">
                            <i className="fab fa-github"></i>
                            <span className="link-text">Github</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a rel="noreferrer" target="_blank" href={Links.linkedin} className="nav-link">
                            <i className="fab fa-linkedin"></i>
                            <span className="link-text">LinkedIn</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a rel="noreferrer" target="_blank" href={Links.twitter} className="nav-link">
                            <i className="fab fa-twitter"></i>
                            <span className="link-text">Twitter</span>
                        </a>
                    </li>
                </ul>
            </div>
            

        </div>
    )
}

export default NavBar;
