import styled from 'styled-components';

export const CardDiv = styled.div`
    position: relative;
    padding: 1.5rem;
    background: var(--bg-secondary);
    border-left: 4px solid var(--accent-primary);
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
    margin-top: 1rem;
    margin-bottom: 1rem;
    transition: all var(--animation-speed) ease;
    
    &:hover {
        background: var(--bg-tertiary);
        transform: translateX(5px);
        box-shadow: 2px 2px 10px var(--shadow-color);
    }
    
    h4 {
        color: var(--text-primary);
        font-weight: 600;
        margin-bottom: 0.5rem;
    }
    
    h6 {
        color: var(--text-secondary);
        font-weight: 400;
        margin-bottom: 1rem;
    }
`;