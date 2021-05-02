import React from 'react'
import {ContainerDiv, ImgTag, Tag, TableStyled} from './AboutPageStyleComponents';
import coderSVG from './images/icon.svg';

function AboutPage() {
    // Textual Content Data 
    const aboutMeContent = {
        heading:'I am a Computer Science Engineer',
        content:[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat fringilla libero quis feugiat. Donec augue lorem, laoreet in velit quis, mollis euismod arcu. Fusce laoreet a tellus nec cursus. Nam quis dolor vestibulum ligula lobortis porttitor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras placerat lectus ex, a maximus magna dignissim lacinia. Quisque mi nibh, eleifend ac nibh auctor, consectetur fermentum lorem. Nunc dictum gravida nulla eu porttitor. Donec ex mauris,cursus sit amet mattis a, elementum ut eros. Pellentesque dapibus tempor sem at pretium.',
            'Proin neque orci, commodo nec magna quis, tempus feugiat orci. Nulla at tempor sem, vel posuere turpis. Fusce quis lacus feugiat, pellentesque lectus eget, accumsan libero. Quisque nulla sem, interdum a ligula eu, suscipit gravida dolor. Sed molestie et urna malesuada gravida. In nunc eros, malesuada ut quam vel, euismod consequat dui. Maecenas non volutpat leo. Nulla id fringilla ligula. Nunc metus velit, condimentum ut sapien at, ornare vehicula odio. Proin tincidunt venenatis massa in consectetur. Quisque convallis, arcu et finibus eleifend, mi orci dapibus tortor, non porttitor neque neque in dolor. Mauris dictum varius faucibus. Phasellus id volutpat sapien. Sed a interdum quam.'
        ]
    }

    const skillSets = {
        'Languages':[
            'C++',
            'Python',
            'JavaScript'
        ],
        'Framework':[
            'Node.js',
            'Django',
            'PyTorch',
            'Tensorflow'
        ],
        'Tools':[
            'Adobe Photoshop',
            'Figma'
        ],
        'Operating Systems':[
            'Linux',
            'Windows'
        ]
    }


    // Layout Construction
    const TextContent = (<>
        <h4>{aboutMeContent.heading}</h4>
        {aboutMeContent.content.map((text, ind)=><p key = {ind}>{text}</p>)}
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
                        <button style={{margin:"1rem"}} className="btn btn-success">Contact Me</button>
                        <button style={{margin:"1rem"}} className="btn btn-success">Resume</button>
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
