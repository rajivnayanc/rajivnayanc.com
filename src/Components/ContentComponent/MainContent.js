import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import HomePage from './HomePageComponent/HomePage';
import AboutPage from './AboutPageComponent/AboutPage';
import EducationPage from './EducationPageComponent/EducationPage';
import ExperiencePage from './ExperiencePageComponent/ExperiencePage';
import ProjectsPage from './ProjectsPageComponent/ProjectsPage';
import PublicationsPage from './PublicationsPageComponent/PublicationsPage';
import {Error404} from './ErrorPageComponents/Errors';

function MainContent() {
    return (
        <section className="main-content">
            <Switch>
                <Route exact path="/">
                    <Redirect to ="/home" />
                </Route>
                <Route path="/home" exact component={HomePage} />
                <Route path="/about-us" exact component={AboutPage} />
                <Route path="/education" exact component={EducationPage} />
                <Route path="/experience" exact component={ExperiencePage} />
                <Route path="/projects" exact component={ProjectsPage} />
                <Route path="/publications" exact component={PublicationsPage} />
                <Route path="/error404" component={Error404} />
                <Redirect to="/error404" />
            </Switch>
        </section>
    )
}

export default MainContent;
