import React from 'react';
import ParticlesJsCanvas from './SubComponents/ParticlesJsCanvas';
import { ContainerDiv, StyledButton as Button, TagLineDiv, PCustom, PhotoDiv, StyleImgTag, TypedText } from './SubComponents/HomePageStyleComponents';
import profilePhoto from '../../../images/profilePic/rajiv.jpg';
import Typed from 'react-typed';
import { Links } from '../../../shared/links';
import { TagLines } from '../../../shared/ProfileInfo';

function HomePage(props) {
    return (
        <>
            <ParticlesJsCanvas theme={props.theme} />
            <ContainerDiv className="container-fluid d-flex flex-column">

                <div className="row d-flex flex-row flex-grow-1 align-items-center justify-content-center">
                    <div className="col-12 col-sm-8 p-0 h-100">
                        <TagLineDiv>
                            <PCustom color="var(--accent-secondary)" minsize="1rem" maxsize="1.5rem" size="4vw" weight="500">
                                Hi, my name is
                            </PCustom>
                            <PCustom className="highlight" color="var(--text-primary)" minsize="2.5rem" maxsize="4.5rem" size="7vw" weight="700">
                                Rajiv Nayan Choubey
                            </PCustom>
                            <Typed strings={TagLines}
                                typeSpeed={40}
                                backSpeed={50}
                                loop>
                                <TypedText />
                            </Typed>

                            <div className="d-flex flex-row justify-content-start align-items-center mt-4">
                                <Button target="__blank__" href={`mailto:${Links.email}`}>Contact Me</Button>
                                <Button target="__blank__" href={Links.resume}>Resume</Button>
                            </div>
                        </TagLineDiv>
                    </div>
                    <div className="col-12 col-sm-4 col p-0 h-100">
                        <PhotoDiv>
                            <StyleImgTag src={profilePhoto} alt="Rajiv Nayan Choubey" />
                        </PhotoDiv>
                    </div>
                </div>
            </ContainerDiv>
        </>
    )
}

export default HomePage;
