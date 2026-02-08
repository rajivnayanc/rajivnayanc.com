import React from 'react';
import { CardDiv } from './ExperienceStyledComponents';
import { ContainerDiv, SectionTitle } from '../../shared/SharedStyleComponents';
import { ExperienceData } from '../../../shared/ProfileInfo';

const Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const Card = (props) => {
    const data = props.data;
    if (!data) return (<></>);
    const genDate = (time) => {
        let output = "";
        output += `${Months[time.start.month - 1]}, ${time.start.year}`;
        if (time.end) {
            if (time.end === 'Present') {
                output += ' - Present';
            } else {
                output += ` - ${Months[time.end.month - 1]}, ${time.end.year}`
            }
        }

        return output
    }
    return (
        <CardDiv className="row">
            <div className="col-12">
                <h4>{data.role}</h4>
                <h4 style={{ fontWeight: 'lighter', fontSize: '1.1rem', color: 'var(--accent-secondary)' }}>{data.location}</h4>
                <h6><i style={{ color: "var(--accent-primary)" }} className="mr-2 fa fa-calendar"></i>{genDate(data.time)}</h6>
                <p className="mt-3">{data.description}</p>
            </div>
        </CardDiv>
    );
}

function ExperiencePage() {


    const ProfessionalExperience = ExperienceData.filter((value) => value.type === 'professional');
    const OtherExperience = ExperienceData.filter((value) => value.type !== 'professional');
    const compare = (a, b) => {
        if (a.time.start.year !== b.time.start.year) {
            return b.time.start.year - a.time.start.year;
        } else {
            return b.time.start.month - a.time.start.month;
        }
    }
    ProfessionalExperience.sort(compare);
    OtherExperience.sort(compare);

    const ProExpDataList = ProfessionalExperience.map((data, ind) => <Card key={ind} data={data} />);
    const OtherExoDataList = OtherExperience.map((data, ind) => <Card key={ind} data={data} />);

    return (
        <ContainerDiv className="container-fluid d-flex flex-column align-items-center justify-content-center">
            <div className="row p-0 m-0 w-100 d-flex flex-row align-items-start justify-content-center">
                <div className="p-0 col-12 col-sm-8 d-flex flex-column align-items-center justify-content-center" style={{ paddingLeft: '2rem' }}>
                    <SectionTitle>My Experiences <i className="fa fa-suitcase" style={{ color: "var(--accent-secondary)", fontSize: "0.8em" }}></i></SectionTitle>

                    {ProExpDataList.length > 0 ? <h3 className="mt-4 mb-4 align-self-start font-weight-bold" style={{ color: 'var(--text-primary)' }}>Professional Experiences</h3> : ''}
                    <div className="w-100 pl-4 border-left border-secondary position-relative" style={{ borderLeft: '2px solid var(--bg-tertiary)' }}>
                        {ProExpDataList}
                    </div>

                    {OtherExoDataList.length > 0 ? <h3 className="mt-5 mb-4 align-self-start font-weight-bold" style={{ color: 'var(--text-primary)' }}>Volunteering and Other Experiences</h3> : ''}
                    <div className="w-100 pl-4 border-left border-secondary position-relative" style={{ borderLeft: '2px solid var(--bg-tertiary)' }}>
                        {OtherExoDataList}
                    </div>

                </div>
            </div>
        </ContainerDiv>
    )
}

export default ExperiencePage;
