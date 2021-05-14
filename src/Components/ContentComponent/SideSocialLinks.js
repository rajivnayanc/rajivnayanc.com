import React from 'react';
import styled from 'styled-components';
import {Links} from '../../shared/links';

const FixedLinks = styled.div`
    width:fit-content;
    position:fixed;
    bottom:0;
    right:0;
    transform: translateX(-10%);
`;
const LinkAnchor = styled.a`
    color:var(--text-primary);
    padding:3px;
    font-size:1.5rem;
    &:hover{
        color:var(--text-primary);
    }
`;
const LinkAnchorV = styled.a`
    color:var(--text-primary);
    padding:3px;
    &:hover{
        color:var(--text-primary);
    }
`;
const DivVert = styled.div`
    writing-mode: vertical-rl;
    font-size:0.8rem;
`;
function SideSocialLinks() {
    const SocialMediaLinks = Links.socialmedia.map((data,ind)=>(
        <div key={ind} className="col-12">
            <LinkAnchor rel="noreferrer" target="_blank" href={data.link}>
                <i className={data.icon}></i>
            </LinkAnchor>
        </div>
    ));
    return (
        <FixedLinks>
            <div className="row d-flex justify-content-end">
                <DivVert className="mb-3 mb-sm-1 col-auto">
                    Logo Credits:<LinkAnchorV rel="noreferrer" target="_blank" href={Links.logoCredit.link}>
                        <b>{Links.logoCredit.name}</b>
                    </LinkAnchorV>
                </DivVert>
            </div>
            <div className="row d-block d-sm-none">
                {SocialMediaLinks}
            </div>
        </FixedLinks>
    )
}

export default SideSocialLinks;
