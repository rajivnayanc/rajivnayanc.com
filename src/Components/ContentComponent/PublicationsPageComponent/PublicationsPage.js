import React from 'react';
import {ContainerDiv, CardDiv, AuthorLink} from './PublicationStyledComponents';

const Card = (props)=>{
    const data = props.data;
    if(!data)return(<></>);
    const authors = data.authors.map((author, ind)=>(
        <AuthorLink key={ind} href={author.profile}>{author.name}</AuthorLink>
    ))
    return(
        <CardDiv className="row w-100">
            <div className="col-12">
                <h5>{data.title} <a target="__blank__" href={data.link}><i className="fa fa-external-link-alt"></i></a></h5>
                <h6>{data[data.type]}, {data.publisher}</h6>
                <p><i className="fa fa-calendar mr-2"></i> {data.year}</p>
                {authors}
            </div>
        </CardDiv>
    );
}
function PublicationsPage() {
    const PublicationData = [
        {
            title:'Internet Traffic Classifier Using Artificial Neural Network and 1D-CNN',
            link:'https://ieeexplore.ieee.org/document/9031882',
            year:2019,
            type:'conference',
            publisher:'IEEE',
            conference:'International Conference on Information Technology (ICIT)' ,
            authors:[
                {
                    name:'Rajiv Nayan Choubey',
                    profile:'https://www.linkedin.com/in/rajivnayanc/'
                },
                {
                    name:'Loveleen Amar',
                    profile:'https://www.linkedin.com/in/loveleen-amar/'
                },
                {
                    name:'Sanchita Khare',
                    profile:'https://www.linkedin.com/in/sanchita-khare/'
                },
                {
                    name:'Venkanna U',
                    profile:'https://www.linkedin.com/in/venkanna-uduthalapally-1749a6143/'
                },
            ]
        }
    ];

    const ConferencePublications = PublicationData.filter((value)=>value.type==='conference');
    const JournalPublications = PublicationData.filter((value)=>value.type==='journal');

    ConferencePublications.sort((a,b)=>b.year-a.year);
    JournalPublications.sort((a,b)=>b.year-a.year);

    const ConferenceDataList = ConferencePublications.map((data, ind)=><Card key={ind} data={data}/>);
    const JournalDataList = JournalPublications.map((data, ind)=><Card key={ind} data={data}/>);

    return (
        <ContainerDiv className="container-fluid d-flex flex-column align-items-center justify-content-center">
            <div className="row p-0 m-0 w-100 d-flex flex-row align-items-start justify-content-center">
                <div className="p-0 col-12 col-sm-8 d-flex flex-column align-items-center justify-content-center">
                    <h1>My Publications <i className="fa fa-newspaper" style={{color:"green"}}></i></h1>
                    {JournalDataList.length>0?<h3 className="align-self-start">Journals</h3>:''}
                    {JournalDataList}
                    {ConferenceDataList.length>0?<h3 className="align-self-start">Conferences</h3>:''}
                    {ConferenceDataList}
                </div>
            </div>
        </ContainerDiv>
    )
}

export default PublicationsPage;
