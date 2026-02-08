import styled from 'styled-components';

export const ImgTag = styled.img`
    width: 80%;
    filter: drop-shadow(0 0 10px var(--accent-glow));
    transition: transform var(--animation-speed) ease;
    
    &:hover {
        transform: scale(1.05);
    }
`;

export const Tag = styled.span`
    display: inline-block;
    padding: 0.35rem 0.75rem;
    border-radius: 2rem;
    margin: 0.25rem;
    background: var(--bg-tertiary); /* Subtle background */
    color: var(--accent-primary);
    font-weight: 500;
    font-size: 0.9rem;
    border: 1px solid var(--accent-glow);
    transition: all var(--animation-speed) ease;
    
    &:hover {
        background: var(--accent-primary);
        color: var(--bg-primary);
        transform: translateY(-2px);
    }
`;

export const TableStyled = styled.table`
    table-layout: auto;
    max-width: 100%;
    width: 100%;
    color: var(--text-secondary);
    border-collapse: collapse;
    
    tr {
        border-bottom: 1px solid var(--glass-border);
        transition: background-color var(--animation-speed) ease;
    }
    
    tr:hover {
        background-color: var(--bg-tertiary);
    }

    td {
        padding: 1rem;
        vertical-align: middle;
    }
    
    td:first-child {
        font-weight: 600;
        color: var(--text-primary);
        width: 30%;
    }
`;