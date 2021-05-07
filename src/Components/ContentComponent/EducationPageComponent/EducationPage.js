import React from 'react'
import {ContainerDiv, CardDiv} from './EducationStyledComponents';

const Card = (props)=>{
    const data = props.data;
    if(!data)return(<></>);
    return(
        <CardDiv className="row w-100">
            <div className="col-12">
                <h4>{data.degree}{data.major?` | ${data.major}`:''}</h4>
                <h6>{data.institute}</h6>
                <div className="row w-100">
                    <div className="col-auto">
                        <i className="fa fa-calendar mr-1" style={{color:"#007BFF"}}></i>  {data.time.start}{data.time.end?` - ${data.time.end}`:''}
                    </div>
                    <div className="col-auto">
                        {data.score}
                    </div>
                </div>
            </div>
        </CardDiv>
    );
}
function EducationPage() {
    const EducationData = [
        {
            degree:'B.Tech',
            major:'CSE',
            institute:'International Institute of Information Technology, Naya Raipur',
            time:{
                start:2017,
                end: 'present'
            },
            score: '9.5 CGPA'
        },
        {
            degree:'Intermediate',
            major:'PCM, C++',
            institute:'Glenhill School, Varanasi',
            time:{
                start:2016
            },
            score: '86.4 %'
        },
        {
            degree:'High School',
            institute:'Glenhill School, Varanasi',
            time:{
                start:2014
            },
            score: '10 CGPA'
        }
        
    ]
    EducationData.sort((a,b)=>b.time.start-a.time.start);
    const dataList = EducationData.map((data, ind)=><Card key = {ind} data={data}/>)
    return (
        <ContainerDiv className="container-fluid d-flex flex-column align-items-center justify-content-center">
            <div className="row p-0 m-0 w-100 d-flex flex-row align-items-start justify-content-center">
                <div className="p-0 col-12 col-sm-7 d-flex flex-column align-items-start justify-content-center">
                    <h1>My Education <i className="fa fa-book-open" style={{color:"green"}}></i></h1>
                    {dataList}
                </div>
            </div>
        </ContainerDiv>
    )
}

export default EducationPage;
