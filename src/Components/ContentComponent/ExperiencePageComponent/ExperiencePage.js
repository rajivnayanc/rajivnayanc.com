import React from 'react';
import {ContainerDiv, CardDiv} from './ExperienceStyledComponents';

const Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const Card = (props)=>{
    const data = props.data;
    if(!data)return(<></>);
    const genDate = (time)=>{
        let output = "";
        output += `${Months[time.start.month-1]}, ${time.start.year}`;
        if(time.end){
            if(time.end === 'Present'){
                output += ' - Present';
            }else{
                output += ` - ${Months[time.end.month-1]}, ${time.end.year}`
            }
        }

        return output
    }
    return(
        <CardDiv className="row w-100">
            <div className="col-12">
                <h4>{data.role}</h4>
                <h4 style={{fontWeight:'lighter'}}>{data.location}</h4>
                <h6 style={{fontWeight:'lighter'}}><i style={{color:"#007BFF"}} className="mr-2 fa fa-calendar"></i>{genDate(data.time)}</h6>
                <p style={{fontWeight:'500'}} className="mt-3">{data.description}</p>
            </div>
        </CardDiv>
    );
}

function ExperiencePage() {
    const ExperienceData = [
        {
            role:'Summer Intern (SDE)',
            time:{
                start:{
                    month:5,
                    year:2020
                },
                end:{
                    month:6,
                    year:2020
                }
            },
            location: 'Goldman Sachs',
            description:'Worked on PoC of Digitization of documents',
            type:'professional'
        },
        {
            role:'Co-Founder and Technical Head',
            time:{
                start:{
                    month:11,
                    year:2018
                },
                end:{
                    month:1,
                    year:2021
                }
            },
            location: 'Campus Adda',
            description:'A small startup by group of four members of IIIT-NR. We sold hoodies and T-shirts to college students. Our startup was recognized by MorRaipur and Raipur Mayor. Sold hundreds of merchandise of various types. Built website to take merchandise orders. Website was able to take 300-350 orders within college.',
            type:'professional'
        },
        {
            role:'Seasonal Intern (SDE)',
            time:{
                start:{
                    month:1,
                    year:2021
                },
                end:'Present'
            },
            location: 'Goldman Sachs',
            description:'Working on Digitization of documents',
            type:'professional'
        },
        {
            role:'Co-Founder',
            time:{
                start:{
                    month:5,
                    year:2018
                }
            },
            location: 'The Society of Coders, IIIT-Naya Raipur',
            description:'Co-Founded the first Coding Society of IIIT Naya Raipur. Organized and hosted various events under TSoC.',
            type:'volunteer'
        },
        {
            role:'Student Coordinator',
            time:{
                start:{
                    month:2,
                    year:2019
                }
            },
            location: 'SciNtfic, IIIT-Naya Raipur',
            description:'Organised two-day technology fest for school students under IIIT Naya Raipur. With the help of team, managed 400 school students from across the cities. Also, we built various technical galleries along with lectures for school students.',
            type:'volunteer'
        },
        {
            role:'Event Coordinator',
            time:{
                start:{
                    month:3,
                    year:2019
                }
            },
            location: 'Technovate\'19, IIIT-Naya Raipur',
            description:'Planned and Organized Coding+Puzzle Event \'Puzzle Express\' for techfest of the institute.',
            type:'volunteer'
        },
        {
            role:'Web Development Lead',
            time:{
                start:{
                    month:10,
                    year:2019
                },
                end:{
                    month:3,
                    year:2020
                }
            },
            location: 'Technovate\'20, IIIT-Naya Raipur',
            description:'Built, hosted, and maintained the website of Technovate\'20 techfest of IIIT, Naya Raipur with the team of three members. The website was built using Django and was hosted from scratch on Linux Server provided by Institute. The admins were abel to add, modify, and delete the contents of website using CMS portals without developer intervention. Before corona hit, the website was able to serve multitude of requests from all across India.',
            type:'volunteer'
        },
        

    ];

    const ProfessionalExperience = ExperienceData.filter((value)=>value.type==='professional');
    const OtherExperience = ExperienceData.filter((value)=>value.type!=='professional');
    const compare = (a,b)=>{
        if(a.time.start.year!==b.time.start.year){
            return b.time.start.year-a.time.start.year;
        }else{
            return b.time.start.month-a.time.start.month;
        }
    }
    ProfessionalExperience.sort(compare);
    OtherExperience.sort(compare);

    const ProExpDataList = ProfessionalExperience.map((data, ind)=><Card key={ind} data={data}/>);
    const OtherExoDataList = OtherExperience.map((data, ind)=><Card key={ind} data={data}/>);

    return (
        <ContainerDiv className="container-fluid d-flex flex-column align-items-center justify-content-center">
            <div className="row p-0 m-0 w-100 d-flex flex-row align-items-start justify-content-center">
                <div className="p-0 col-12 col-sm-8 d-flex flex-column align-items-center justify-content-center">
                    <h1>My Experiences <i className="fa fa-suitcase" style={{color:"green"}}></i></h1>
                    {ProExpDataList.length>0?<h3 className="mt-3 align-self-start">Professional Experiences</h3>:''}
                    
                    {ProExpDataList}
                    
                    {OtherExoDataList.length>0?<h3 className="mt-5 align-self-start">Volunteering and Other Experiences</h3>:''}
                    
                    {OtherExoDataList}
                    
                </div>
            </div>
        </ContainerDiv>
    )
}

export default ExperiencePage;
