import styled, { keyframes } from 'styled-components';
import { ContainerDiv, StyledButton } from '../../../shared/SharedStyleComponents';

export const BlogButton = styled(StyledButton)`
    border-color: #f39c12;
    color: #f39c12;

    &::before {
        background: linear-gradient(90deg, #f39c12, #e67e22);
    }
    
    &:hover {
        box-shadow: 0 4px 20px rgba(243, 156, 18, 0.4);
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1.5rem;
    gap: 1rem;

    @media only screen and (max-width: 600px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        width: 100%;
        justify-content: center;
        
        & > a {
            width: 100%;
            margin: 0;
            padding: 0.8rem 0.5rem;
            font-size: 1rem;
        }
    }
`;

export { ContainerDiv, StyledButton };

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

export const TagLineDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 50vh;
    animation: ${fadeIn} 0.8s ease-out;
    
    @media only screen and (max-width: 600px) {
        align-items: center;
        text-align: center;
        margin-top: 2rem;
    }
    
    /* Target the typed cursor to ensure it stays inline and has correct color */
    .typed-cursor {
        color: var(--text-secondary);
        font-size: clamp(1.2rem, 4vw, 2rem);
        font-weight: 400;
        display: inline-block;
        margin-left: 5px;
    }
`;

export const PCustom = styled.p`
    display: block;
    color: ${props => props.color ? props.color : 'var(--text-secondary)'};
    font-family: ${props => props.weight > 500 ? 'var(--font-heading)' : 'var(--font-primary)'};
    font-size: clamp(${props => props.minsize}, ${props => props.size}, ${props => props.maxsize});
    font-weight: ${props => props.weight};
    margin-bottom: 0.5rem;
    line-height: 1.1; /* Tighter line height for display text */
    letter-spacing: -0.02em; /* Tight tracking for large text */
    transition: all 0.5s cubic-bezier(0.2, 0.0, 0, 1.0);
    
    &.highlight {
        background: linear-gradient(to right, var(--accent-primary), var(--accent-secondary));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        filter: drop-shadow(0 0 15px var(--accent-glow));
    }
`;

// Inline component for TypedJS to keep cursor on same line
export const TypedText = styled.span`
    display: inline-block;
    color: var(--text-secondary);
    font-size: clamp(1.2rem, 4vw, 2rem);
    font-weight: 400;
    font-family: var(--font-primary);
`;

export const PhotoDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    animation: ${fadeIn} 1s ease-out 0.2s backwards;
    position: relative;
    
    /* Decoration behind the image */
    &::before {
        content: '';
        position: absolute;
        width: 60%;
        height: 60%;
        background: var(--accent-primary);
        opacity: 0.2;
        filter: blur(50px);
        border-radius: 50%;
        z-index: -1;
        animation: ${float} 6s ease-in-out infinite;
    }
`;

const morph = keyframes`
  /* M3 Geometric Shapes Sequence (Reverted) */
  0% { border-radius: 50%; } /* Circle */
  20% { border-radius: 20%; } /* Rounded Square (Large) */
  40% { border-radius: 50% 50% 0 50%; } /* Leaf/Teardrop Top-Right */
  60% { border-radius: 50% 0 50% 50%; } /* Leaf/Teardrop Top-Left */
  80% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; } /* Organic Squircle */
  100% { border-radius: 50%; } /* Return to Circle */
`;

export const StyleImgTag = styled.img`
    width: 70%; /* Increased from 60% */
    max-width: 550px; /* Increased from 400px */
    object-fit: cover;
    border: 3px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 40px var(--shadow-color);
    transition: all 0.5s cubic-bezier(0.2, 0.0, 0, 1.0);
    
    /* Morphing Blob Effect - Enhanced/Fluid */
    animation: ${morph} 15s ease-in-out infinite, ${float} 6s ease-in-out infinite;
    
    @media only screen and (max-width: 600px) {
        width: 80%; /* Increased for mobile too */
        margin-top: 2rem;
    }

    &:hover {
        transform: scale(1.02);
        border-color: var(--accent-primary);
        filter: brightness(1.1);
    }
`;