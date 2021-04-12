import React from 'react';

import {ContainerDiv, Button, TagLineDiv, PCustom, PhotoDiv, StyleImgTag} from './SubComponents/HomePageStyleComponents';
import profilePhoto from '../../../images/profilePic/rajiv.png';

function HomePage() {
    return (
        <ContainerDiv className="container-fluid d-flex flex-column">
            <div style={{height:"3rem"}}  className="row d-none d-sm-flex align-items-center">
                <div className="col-3">
                    <h5>@rajivnayanc</h5>
                </div>
                <div className="col-9 d-flex flex-row justify-content-end align-items-center ml-auto">
                    <Button>Contact Me</Button>
                    <Button>Resume</Button>
                </div>
            </div>
            <div className="row d-flex flex-row flex-grow-1 align-items-center justify-content-center">
                <div className="col-12 col-sm-8 p-0 h-100">
                   <TagLineDiv>
                       <PCustom color="white" minsize="14px" maxsize="18px" size="5vw">Hi, my name is ... </PCustom>
                       <PCustom color="white" minsize="20px" maxsize="40px" size="50% + 4vw" weight="700">
                           Rajiv Nayan Choubey 
                        </PCustom>
                       <PCustom color="white" minsize="20px" maxsize="40px" size="5vw" weight="200">
                           A Software Developer 
                        </PCustom>
                   </TagLineDiv>
                </div>
                <div className="col-4 d-none d-sm-flex col p-0 h-100">
                    <PhotoDiv>
                        <StyleImgTag src={profilePhoto} width="80%" alt="Rajiv Nayan Choubey" />
                    </PhotoDiv>
                </div>
            </div>
        </ContainerDiv>
    )
}

export default HomePage;
