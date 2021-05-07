import styled from 'styled-components';

export const ContainerDiv = styled.div`
    min-height:calc(100vh - 2rem);
    @media only screen and (max-width:600px){
        min-height: calc(100vh - 5rem);
    }
`;

export const CardDiv = styled.div`
    position: relative;
    font-weight: 100;
    height:100%;
    padding: 15px;
    background: var(--bg-secondary);
    box-shadow: 0px 0px 3px 1px var(--shadow-color);
    transform: translateY(0%);
    transition: all var(--animationTime);
    &:hover{
        transform: translateY(-3%);
    }
    
`;

export const Tag = styled.span`
    padding: 0.5rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    border-radius: 10px;
    margin: 0.2rem;
    background: gray;
    color: white;
    font-weight: 400;
    font-size:0.8rem;
    float: left;
`;