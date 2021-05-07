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
    // border-left: 5px solid green;
    // border-bottom: 1px solid green;
    padding: 15px;
    background: var(--bg-primary);
    // margin-top: 0.75rem;
    // margin-bottom: 0.75rem;
    transition: all var(--animationTime);
    
    &:hover{
        background: var(--bg-secondary);
    }
    &:after{
        content : "";
        position: absolute;
        left    : -2%;
        top     : 50%;
        height  : 10px;
        width   : 10px;
        transform: translate(-50%) scale(1);
        background: green;
        border-radius: 50%; 
        transition: all var(--animationTime);
    }

    &:hover:after{
        transform: translate(-50%) scale(1.5);
    }
    &:before{
        content : "";
        position: absolute;
        left    : -2%;
        top     : 0;
        height  : 100%;
        width   : 1px;
        transform: translate(-50%);
        background: green;
        // border-radius: 50%; 
        border:1px solid green;
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