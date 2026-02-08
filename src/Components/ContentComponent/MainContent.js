import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './HomePageComponent/HomePage';
import AboutPage from './AboutPageComponent/AboutPage';
import EducationPage from './EducationPageComponent/EducationPage';
import ExperiencePage from './ExperiencePageComponent/ExperiencePage';
import ProjectsPage from './ProjectsPageComponent/ProjectsPage';
import PublicationsPage from './PublicationsPageComponent/PublicationsPage';
import { Error404 } from './ErrorPageComponents/Errors';
import SideSocialLinks from './SideSocialLinks';
import ScrollToTop from './ScrollToTop';

const MainSection = styled.section`
    min-height: 100vh;
    padding: 2rem;
    transition: margin-left 0.3s ease;
    
    @media only screen and (max-width: 600px) {
        margin-left: 0;
        margin-top: 5rem; /* Space for top navbar */
        padding: 1rem;
        padding-bottom: 5rem;
    }

    @media only screen and (min-width: 601px) {
        margin-left: 5rem;
        max-width: calc(100vw - 5rem);
    }
`;

function MainContent(props) {
    const theme = props.theme;
    return (
        <MainSection>
            <ScrollToTop />
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route path="/home" exact component={() => <HomePage theme={theme} />} />
                <Route path="/about-me" exact component={() => <AboutPage theme={theme} />} />
                <Route path="/education" exact component={() => <EducationPage theme={theme} />} />
                <Route path="/experience" exact component={() => <ExperiencePage theme={theme} />} />
                <Route path="/projects" exact component={() => <ProjectsPage theme={theme} />} />
                <Route path="/publications" exact component={() => <PublicationsPage theme={theme} />} />
                <Route path="/error404" component={Error404} />
                <Redirect to="/error404" />
            </Switch>
            <SideSocialLinks />
        </MainSection>
    )
}

export default MainContent;
