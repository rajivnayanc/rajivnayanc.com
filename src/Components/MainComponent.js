import React from 'react'
import MainContent from './ContentComponent/MainContent';
import Navbar from './NavBar/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
function MainComponent() {
    return (
        <Router>
            <div>
                <Navbar/>
                <MainContent/>
            </div>
        </Router>
    )
}

export default MainComponent;
