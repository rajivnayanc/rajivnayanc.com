import React from 'react';
import ParticlesJsCanvas from './SubComponents/ParticlesJsCanvas';
import {ContainerDiv, Button, TagLineDiv, PCustom, PhotoDiv, StyleImgTag} from './SubComponents/HomePageStyleComponents';
import profilePhoto from '../../../images/profilePic/rajiv.jpg';
import Typed from 'react-typed';
import {Links} from '../../../shared/links';
import {TagLines} from '../../../shared/ProfileInfo';

function HomePage(props) {
    return (
        <>
        <ParticlesJsCanvas theme={props.theme} />
        <ContainerDiv className="container-fluid d-flex flex-column">
            <div style={{height:"3rem"}}  className="row d-none d-sm-flex align-items-center">
                <div className="col-3">
                    <h5>@rajivnayanc</h5>
                </div>
                <div className="col-9 d-flex flex-row justify-content-end align-items-center ml-auto">
                    <Button target="__blank__" href={`mailto:${Links.email}`}>Contact Me</Button>
                    <Button target="__blank__" href={Links.resume}>Resume</Button>
                </div>
            </div>
            <div className="row d-flex flex-row flex-grow-1 align-items-center justify-content-center">
                <div className="col-12 col-sm-8 p-0 h-100">
                   <TagLineDiv>
                       <PCustom color="white" minsize="14px" maxsize="30px" size="6vw" weight="500">Hi, my name is ... </PCustom>
                       <PCustom color="white" minsize="30px" maxsize="70px" size="8vw" weight="700">
                           Rajiv Nayan Choubey 
                        </PCustom>
                        <Typed strings={TagLines}
                            typeSpeed={40}
                            backSpeed={50}
                            loop>
                            <PCustom color="white" minsize="20px" maxsize="50px" size="5vw" weight="400" />
                        </Typed>
                        <div className="d-flex d-sm-none flex-row justify-content-start align-items-center">
                            <Button>Contact Me</Button>
                            <Button>Resume</Button>
                        </div>
                   </TagLineDiv>
                </div>
                <div className="col-12 col-sm-4 col p-0 h-100">
                    <PhotoDiv>
                        <StyleImgTag src={profilePhoto} width="80%" alt="Rajiv Nayan Choubey" />
                    </PhotoDiv>
                </div>
            </div>
        </ContainerDiv>
        </>
    )
}

export default HomePage;
