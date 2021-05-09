import React from 'react'
import {ContainerDiv, ImgTag, Tag, TableStyled} from './AboutPageStyleComponents';
import coderSVG from './images/icon.svg';
import {Links} from '../../../shared/links';
import {aboutMeContent, skillSets} from '../../../shared/ProfileInfo';
function AboutPage() {
    
    // Layout Construction
    const TextContent = (<>
        <h4>{aboutMeContent.heading}</h4>
        {aboutMeContent.content.map((text, ind)=><p dangerouslySetInnerHTML={{__html:`${text}`}} key = {ind}/>)}
    </>);
    const TableData = Object.entries(skillSets).map(([name, skills], ind)=>{
        const skillsTagged = skills.map((skill, ind)=><Tag key={ind}>{skill}</Tag>);
        return (
            <tr key={ind}><td>{name}</td><td>{skillsTagged}</td></tr>
        )
    });

    return (
        <ContainerDiv className="container d-flex flex-column align-items-center justify-content-center">
            <div className="mt-5 row d-flex flex-row align-items-center justify-content-center w-100">
                <div className="col-12 col-sm-8 p-0 h-100">
                    <h1>About Me</h1>
                    {TextContent}
                    <div className="d-flex flex-row justify-content-center w-100">
                        <a target="_blank" rel="noreferrer" href={`mailto:${Links.email}`} style={{margin:"1rem"}} className="btn btn-success">Contact Me</a>
                        <a target="_blank" rel="noreferrer" href={Links.resume} style={{margin:"1rem"}} className="btn btn-success">Resume</a>
                    </div>
                </div>
                <div className="col-12 mt-1 col-sm-4 p-0 h-100 d-flex justify-content-center">
                    <ImgTag src={coderSVG} alt="Coder SVG Icon"/>
                </div>
            </div>

            <div className="mt-5 mb-5 row d-flex flex-row w-100" >
                <div className="col-12 d-flex flex-column align-items-center justify-content-center w-100 p-0 h-100">
                    <h3>Skills</h3>
                    <TableStyled><tbody>{TableData}</tbody></TableStyled>
                </div>
            </div>
            
        </ContainerDiv>
    )
}

export default AboutPage;
