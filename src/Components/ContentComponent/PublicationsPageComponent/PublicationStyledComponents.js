import styled from 'styled-components';

export const CardDiv = styled.div`
    position: relative;
    padding: 1.5rem;
    background: var(--bg-secondary);
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius);
    margin-bottom: 1.5rem;
    transition: all var(--animation-speed) ease;
    
    &:hover {
        background: var(--bg-tertiary);
        transform: translateY(-5px);
        box-shadow: 0 10px 30px -10px var(--shadow-color);
        border-color: var(--accent-glow);
    }
    
    h5 {
        color: var(--text-primary);
        font-weight: 600;
        margin-bottom: 0.5rem;
    }
    
    a {
        color: var(--accent-primary);
        margin-left: 0.5rem;
    }
    
    h6 {
        color: var(--accent-secondary);
        font-size: 0.95rem;
        margin-bottom: 0.5rem;
    }
    
    p {
        color: var(--text-secondary);
        font-size: 0.9rem;
        margin-bottom: 1rem;
    }
`;

export const AuthorLink = styled.a`
    text-decoration: none;
    color: var(--text-primary);
    font-weight: 500;
    transition: color var(--animation-speed) ease;
    
    &:hover {
        color: var(--accent-primary);
        text-decoration: none;
    }
    
    &:not(:last-child):after {
        content: " • ";
        margin: 0 0.5rem;
        color: var(--text-secondary);
    }
`;