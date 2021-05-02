import styled from 'styled-components';

export const ContainerDiv = styled.div`
    min-height:calc(100vh - 2rem);
    @media only screen and (max-width:600px){
        min-height: calc(100vh - 5rem);
    }
`;

export const ImgTag = styled.img`
    width:80%;
    -webkit-filter: drop-shadow(1px 1px 3px var(--shadow-color))
                  drop-shadow(-1px -1px 3px var(--shadow-color));
    filter: drop-shadow(1px 1px 3px var(--shadow-color)) 
            drop-shadow(-1px -1px 3px var(--shadow-color));
`;

export const Tag = styled.span`
    padding: 0.5rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    border-radius: 10px;
    margin: 0.4rem;
    background: #007BFF;
    color: white;
    font-weight: 400;
    float: left;
`;

export const TableStyled = styled.table`
    table-layout: auto;
    max-width: 100%;
    width: 100%;
    color: var(--text-secondary);
    tr{
        min-height: 3rem;
        height: fit-content;
        border-bottom: 1px solid var(--text-primary); 
    }

    td{
        padding: 1rem;
    }
`;