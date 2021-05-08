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
function SideSocialLinks() {
    return (
        <FixedLinks className="row d-block d-sm-none">
                <div className="col-12">
                    <LinkAnchor rel="noreferrer" target="_blank" href={Links.github}>
                        <i className="fab fa-github"></i>
                    </LinkAnchor>
                </div>
                <div className="col-12">
                    <LinkAnchor rel="noreferrer" target="_blank" href={Links.linkedin}>
                        <i className="fab fa-linkedin"></i>
                    </LinkAnchor>
                </div>
                <div className="col-12">
                    <LinkAnchor rel="noreferrer" target="_blank" href={Links.twitter}>
                        <i className="fab fa-twitter"></i>
                    </LinkAnchor>
                </div>
        </FixedLinks>
    )
}

export default SideSocialLinks;
