import React from 'react';
import { ImgTag, Tag, TableStyled } from './AboutPageStyleComponents';
import { ContainerDiv, StyledButton, SectionTitle, TextP } from '../../shared/SharedStyleComponents';
import coderSVG from './images/icon.svg';
import { Links } from '../../../shared/links';
import { aboutMeContent, skillSets } from '../../../shared/ProfileInfo';

function AboutPage() {

    // Layout Construction
    const TextContent = (<>
        {aboutMeContent.content.map((text, ind) => <TextP dangerouslySetInnerHTML={{ __html: `${text}` }} key={ind} />)}
    </>);
    const TableData = Object.entries(skillSets).map(([name, skills], ind) => {
        const skillsTagged = skills.map((skill, ind) => <Tag key={ind}>{skill}</Tag>);
        return (
            <tr key={ind}><td>{name}</td><td>{skillsTagged}</td></tr>
        )
    });

    return (
        <ContainerDiv className="container d-flex flex-column align-items-center justify-content-center">
            <div className="mt-5 row d-flex flex-row align-items-center justify-content-center w-100">
                <div className="col-12 col-sm-8 p-0 h-100">
                    <SectionTitle>About Me</SectionTitle>
                    {TextContent}
                    <div className="d-flex flex-row justify-content-start w-100">
                        <StyledButton target="_blank" href={`mailto:${Links.email}`}>Contact Me</StyledButton>
                        <StyledButton target="_blank" href={Links.resume}>Resume</StyledButton>
                    </div>
                </div>
                <div className="col-12 mt-4 mt-sm-0 col-sm-4 p-0 h-100 d-flex justify-content-center">
                    <ImgTag src={coderSVG} alt="Coder SVG Icon" />
                </div>
            </div>

            <div className="mt-5 mb-5 row d-flex flex-row w-100" >
                <div className="col-12 d-flex flex-column align-items-center justify-content-center w-100 p-0 h-100">
                    <SectionTitle>Skills</SectionTitle>
                    <TableStyled><tbody>{TableData}</tbody></TableStyled>
                </div>
            </div>

        </ContainerDiv>
    )
}

export default AboutPage;
