import React, {useState} from 'react'
import MainContent from './ContentComponent/MainContent';
import Navbar from './NavBar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
function MainComponent() {
    const [theme, setTheme] = useState('dark');
    window.onload = function(){
        const localTheme = localStorage.getItem("theme");
        if(localTheme!==null){
                setTheme(localTheme);
                setBodyTheme(localTheme);
        }
    }
    const setBodyTheme = (themeName)=>{
        document.body.className = themeName;
    }
    setBodyTheme(theme);
    const toggleTheme = ()=>{
        if(theme ==='dark'){
            setTheme('light');
            setBodyTheme('light');
            localStorage.setItem("theme", "light");
        }else{
            setTheme('dark');
            setBodyTheme('dark');
            localStorage.setItem("theme", "dark");
        }
    }
    return (
        <Router>
            <div>
                <Navbar setTheme={toggleTheme} theme={theme}/>
                <MainContent theme={theme}/>
            </div>
        </Router>
    )
}

export default MainComponent;
