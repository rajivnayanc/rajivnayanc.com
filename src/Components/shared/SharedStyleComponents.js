import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

export const ContainerDiv = styled.div`
    min-height: 100vh;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    animation: ${fadeIn} 0.6s cubic-bezier(0.2, 0.0, 0, 1.0); /* M3 Emphasized Decelerate */
    
    @media only screen and (max-width: 600px) {
        padding-top: 0;
    }
`;

export const StyledButton = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(var(--accent-primary-rgb), 0.1); /* Assuming you might want to switch to RGB vars later, keeping compatible */
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(8px);
    border: 1px solid var(--accent-primary);
    color: var(--accent-primary);
    font-family: var(--font-primary);
    font-weight: 500;
    padding: 0.8rem 2.2rem; /* Larger touch target */
    margin: 0.5rem;
    cursor: pointer;
    font-size: 1.1rem;
    transition: all 0.5s cubic-bezier(0.2, 0.0, 0, 1.0); /* M3 Emphasized */
    border-radius: 9999px; /* Pill shape */
    text-decoration: none;
    position: relative;
    overflow: hidden;
    z-index: 1;
    letter-spacing: 0.5px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
        z-index: -1;
        transition: opacity 0.4s cubic-bezier(0.2, 0.0, 0, 1.0), transform 0.4s cubic-bezier(0.2, 0.0, 0, 1.0);
        opacity: 0;
        transform: scaleX(0.9);
    }

    &:hover {
        color: var(--bg-primary);
        border-color: transparent;
        box-shadow: 0 4px 20px var(--accent-glow);
        transform: translateY(-3px) scale(1.02);
        text-decoration: none;
        
        &::before {
            opacity: 1;
            transform: scaleX(1);
        }
    }

    &:active {
        transform: translateY(-1px) scale(0.98);
        box-shadow: 0 2px 10px var(--accent-glow);
    }
`;

export const SectionTitle = styled.h2`
    font-family: var(--font-heading);
    color: var(--text-primary);
    font-size: 2.5rem;
    margin-bottom: 2rem;
    position: relative;
    display: inline-block;
    
    &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 60px;
        height: 4px;
        background: var(--accent-primary);
        border-radius: 2px;
    }
`;

export const TextP = styled.p`
    color: var(--text-secondary);
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
`;
