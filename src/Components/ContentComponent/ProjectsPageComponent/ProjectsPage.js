import React from 'react';
import {ContainerDiv, CardDiv, Tag} from './ProjectsStyledComponents';

import {ProjectList} from '../../../shared/ProfileInfo';

const CardFeatured = (props)=>{
    const data = props.data;
    if(!data)return(<></>);

    const github = data.githubLink?<a target="__blank__" href={data.githubLink}><i className="ml-4 mr-1 fab fa-github"></i></a>:<></>;
    const hosted = data.githubLink?<a target="__blank__" href={data.githubLink}><i className="ml-2 mr-1 fa fa-external-link-alt"></i></a>:<></>;
    const report = data.githubLink?<a target="__blank__" href={data.githubLink}><i className="ml-2 mr-1 fa fa-book"></i></a>:<></>;
    const techstacks = data.techstack.map((val, ind)=> <Tag key = {ind}>{val}</Tag>)
    return(
        <CardDiv className="row w-100">
            <div className="col-12 col-sm-6 d-flex flex-row align-item-center justify-content-center">
                <img className="align-self-center" style={{width:"95%"}} src={data.image} alt= "Project Report"/> 
            </div>
            <div className="col-12 col-sm-6 mt-2 mt-sm-0 d-flex flex-column align-item-center justify-content-start">
                <h5 className="w-100">{data.title} {github}{hosted}{report}</h5>
                <p>{data.desc}</p>
                <div className="mt-auto">
                {techstacks}
                </div>
            </div>
        </CardDiv>
    );
}
const CardOther = (props)=>{
    const data = props.data;
    if(!data)return(<></>);

    const github = data.githubLink?<a target="__blank__" href={data.githubLink}><i className="ml-4 mr-1 fab fa-github"></i></a>:<></>;
    const hosted = data.githubLink?<a target="__blank__" href={data.githubLink}><i className="ml-2 mr-1 fa fa-external-link-alt"></i></a>:<></>;
    const report = data.githubLink?<a target="__blank__" href={data.githubLink}><i className="ml-2 mr-1 fa fa-book"></i></a>:<></>;
    const techstacks = data.techstack.map((val, ind)=> <Tag key = {ind}>{val}</Tag>)
    return(
        <CardDiv className="row w-100">
            <div className="col-12 h-100 d-flex flex-column justify-content-start">
                <h6 className="w-100">{data.title} {github}{hosted}{report}</h6>
                <p>{data.desc}</p>
                <div className="mt-auto">
                {techstacks}
                </div>
            </div>
        </CardDiv>
    );
}

const FeaturedProjectCard = (props)=>{
    return (
        <div className="p-2 col-12 d-flex flex-column align-items-center justify-content-center">
            <CardFeatured style={{flex:1}} data={props.data}/>
        </div>
    )
}
const OtherProjectCard = (props)=>{
    return (
        <div className="p-2 col-12 col-sm-6 col-xl-4 d-flex flex-column align-items-center justify-content-center">
            <CardOther style={{flex:1}} data={props.data}/>
        </div>
    )
}
function ProjectsPage() {
    
    const featuredProjects = ProjectList.filter(val=>val.featured);
    const otherProjects = ProjectList.filter(val=>!val.featured);
    const FeaturedProjectTags = featuredProjects.map((data, ind)=><FeaturedProjectCard key={ind} data={data}/>)
    const OtherProjectTags = otherProjects.map((data, ind)=><OtherProjectCard key={ind} data={data}/>)
    return (
        <ContainerDiv className="container-fluid d-flex flex-column align-items-center justify-content-center">
            <div className="row p-0 m-0 w-100 d-flex flex-row align-items-start justify-content-center">
                <div className="p-0 col-12 d-flex flex-column align-items-center justify-content-center">
                    <h1 style={{fontWeight:400}}>My Projects<i style={{color:"yellow"}} className="ml-2 fas fa-fire"></i></h1>
                </div>
            </div>
            <div className="row p-0 m-0 mt-5 w-100 justify-content-center">
                <div className="col-12">
                    <h4 style={{fontWeight:'lighter'}}>Featured Projects</h4>
                </div>
                {FeaturedProjectTags}
            </div>
            <div className="row p-0 m-0 mt-5 w-100 justify-content-center">
                <div className="col-12">
                    <h4 style={{fontWeight:'lighter'}}>Other Awesome Projects</h4>
                </div>
                {OtherProjectTags}
            </div>
        </ContainerDiv>
    )
}

export default ProjectsPage;
