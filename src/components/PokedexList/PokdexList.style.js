import styled from 'styled-components';


export const Row = styled.div`
    justify-content: center;
    align-content: flex-start;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;
    /* min-height: 100vh; */
    /* background-color: #2b347c; */

    >a{
        width: 100%;
        min-height: 285px;
        max-width: 450px;
    }
`;

export const LoaderContainer = styled.div`
    display: grid;
    place-items: center;
    margin: 0 0 1rem 0;
`;
