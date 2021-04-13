import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import HomePage from './HomePageComponent/HomePage';
import AboutPage from './AboutPageComponent/AboutPage';
import EducationPage from './EducationPageComponent/EducationPage';
import ExperiencePage from './ExperiencePageComponent/ExperiencePage';
import ProjectsPage from './ProjectsPageComponent/ProjectsPage';
import PublicationsPage from './PublicationsPageComponent/PublicationsPage';
import {Error404} from './ErrorPageComponents/Errors';

function MainContent(props) {
    const theme = props.theme;
    return (
        <section className="main-content">
            <Switch>
                <Route exact path="/">
                    <Redirect to ="/home" />
                </Route>
                <Route path="/home" exact component={()=><HomePage theme={theme} />} />
                <Route path="/about-us" exact component={()=><AboutPage theme={theme} />} />
                <Route path="/education" exact component={()=><EducationPage theme={theme} />} />
                <Route path="/experience" exact component={()=><ExperiencePage theme={theme} />} />
                <Route path="/projects" exact component={()=><ProjectsPage theme={theme} />} />
                <Route path="/publications" exact component={()=><PublicationsPage theme={theme} />} />
                <Route path="/error404" component={Error404} />
                <Redirect to="/error404" />
            </Switch>
        </section>
    )
}

export default MainContent;
