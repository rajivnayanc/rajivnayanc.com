import React from 'react';
import styled from 'styled-components';
import { Links } from '../../shared/links';

const FixedLinks = styled.div`
    width: fit-content;
    position: fixed;
    bottom: 1rem;
    right: 1.5rem;
    z-index: 100;
`;

const LinkAnchor = styled.a`
    color: var(--text-primary);
    padding: 3px;
    font-size: 1.5rem;
    transition: color 0.3s ease;
    
    &:hover {
        color: var(--accent-primary);
    }
`;

const LinkAnchorV = styled.a`
    color: var(--accent-primary);
    padding: 3px;
    text-decoration: none;
    font-weight: 600;
    
    &:hover {
        color: var(--accent-secondary);
        text-decoration: none;
    }
`;

const DivVert = styled.div`
    writing-mode: vertical-rl;
    font-size: 0.8rem;
    color: var(--text-secondary);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    b {
        font-family: var(--font-heading);
    }
`;

function SideSocialLinks() {
    const SocialMediaLinks = Links.socialmedia.map((data, ind) => (
        <div key={ind} className="col-12 text-center mb-2">
            <LinkAnchor rel="noreferrer" target="_blank" href={data.link}>
                <i className={data.icon}></i>
            </LinkAnchor>
        </div>
    ));
    return (
        <FixedLinks>
            <div className="d-block d-sm-none">
                {SocialMediaLinks}
            </div>
        </FixedLinks>
    )
}

export default SideSocialLinks;
