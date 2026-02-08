import styled from 'styled-components';

export const CardDiv = styled.div`
    position: relative;
    height: 100%;
    padding: 1.5rem;
    background: var(--bg-secondary);
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius);
    transition: all var(--animation-speed) ease;
    overflow: hidden;
    
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px -10px var(--shadow-color);
        border-color: var(--accent-glow);
    }
`;

export const Tag = styled.span`
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 2rem;
    margin: 0.25rem;
    background: var(--bg-tertiary);
    color: var(--text-secondary);
    font-size: 0.8rem;
    font-weight: 500;
    transition: all var(--animation-speed) ease;
    
    &:hover {
        background: var(--accent-primary);
        color: var(--bg-primary);
    }
`;

export const Anchor = styled.a`
    display: inline-block;
    margin-top: 1rem;
    color: var(--accent-primary);
    font-weight: 600;
    text-decoration: none;
    position: relative;
    
    &:after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -2px;
        left: 0;
        background-color: var(--accent-secondary);
        transition: width var(--animation-speed) ease;
    }
    
    &:hover:after {
        width: 100%;
    }
`;