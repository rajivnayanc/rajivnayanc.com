import styled from 'styled-components';

export const CardDiv = styled.div`
    position: relative;
    padding: 1.5rem;
    padding-left: 2rem;
    background: var(--bg-secondary);
    border-radius: var(--border-radius);
    margin-bottom: 2rem;
    transition: all var(--animation-speed) ease;
    border: 1px solid var(--glass-border);
    transform: translateX(20px); /* Slight indent for timeline */
    width: calc(100% - 20px);
    
    &:hover {
        background: var(--bg-tertiary);
        transform: translateX(25px);
        box-shadow: 0 4px 20px var(--shadow-color);
        border-color: var(--accent-glow);
    }

    /* Timeline dot */
    &:after {
        content: "";
        position: absolute;
        left: -28px;
        top: 2rem;
        height: 16px;
        width: 16px;
        background: var(--bg-primary);
        border: 2px solid var(--accent-primary);
        border-radius: 50%;
        transition: all var(--animation-speed) ease;
        z-index: 1;
    }

    &:hover:after {
        background: var(--accent-primary);
        box-shadow: 0 0 10px var(--accent-glow);
    }
    
    /* Timeline line connecting to next item - handled by parent container or pseudo element on card */
    &:before {
        content: "";
        position: absolute;
        left: -21px;
        top: 0;
        height: calc(100% + 2rem); /* Extend to next item */
        width: 2px;
        background: var(--bg-tertiary);
        z-index: 0;
    }

    &:last-child:before {
        height: 2rem; /* Stop line at the last dot */
    }

    h4 {
        color: var(--text-primary);
        font-weight: 600;
        margin-bottom: 0.5rem;
    }
    
    h6 {
        color: var(--text-secondary);
        font-size: 0.9rem;
        margin-bottom: 1rem;
    }
    
    p {
        color: var(--text-secondary);
        font-size: 1rem;
        line-height: 1.6;
    }
`;

export const AuthorLink = styled.a`
    text-decoration: none;
    color: var(--text-primary);
    &:hover{
        text-decoration: none;
    }
    &:not(:last-child):after{
        content:"  •  ";
        height 2px;
        border-radius: 50%:
    }
`;

export const LeftBDiv = styled.div`
    position: relative;
    &:after{
        content : " ---- ";
        position: absolute;
        left    : -100px;
        height  : 100%;
        width   : 10px;
        background: green;
        // border-radius: 50%; 
        border:10px solid green;
    }
`;