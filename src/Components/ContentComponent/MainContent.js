import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import styled from 'styled-components';
import HomePage from './HomePageComponent/HomePage';
import AboutPage from './AboutPageComponent/AboutPage';
import EducationPage from './EducationPageComponent/EducationPage';
import ExperiencePage from './ExperiencePageComponent/ExperiencePage';
import ProjectsPage from './ProjectsPageComponent/ProjectsPage';
import PublicationsPage from './PublicationsPageComponent/PublicationsPage';
import {Error404} from './ErrorPageComponents/Errors';

const MainSection = styled.section`
    min-height: 100vh;
    padding: 1rem;
    @media only screen and (max-width:600px){
        margin-left: 0rem;
        margin-top:3rem
    }

    @media only screen and (min-width:600px){
        margin-left: 5rem;
    }
`;

function MainContent(props) {
    const theme = props.theme;
    return (
        <MainSection>
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
        </MainSection>
    )
}

export default MainContent;
