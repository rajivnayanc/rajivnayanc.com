import React from 'react';
import { Link } from 'react-router-dom';
import { ContainerDiv, SectionTitle, StyledButton } from '../../shared/SharedStyleComponents';

const ErrorPage = ({ title, message }) => {
    return (
        <ContainerDiv className="d-flex flex-column align-items-center justify-content-center text-center">
            <SectionTitle>{title}</SectionTitle>
            <p className="mb-4" style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>{message}</p>
            <Link to="/home">
                <StyledButton>Go Home</StyledButton>
            </Link>
        </ContainerDiv>
    );
};

export const Error404 = () => {
    return <ErrorPage title="Error 404: Not Found" message="The page you are looking for does not exist." />;
};

export const Error401 = () => {
    return <ErrorPage title="Error 401: Authentication Error" message="You do not have permission to view this page." />;
};

export const Error500 = () => {
    return <ErrorPage title="Error 500: Server Error" message="Something went wrong on our end." />;
};


