import styled from 'styled-components';


export const Row = styled.div`
    justify-content: center;
    align-content: flex-start;
    display: flex;
    flex-wrap: wrap;
    /* min-height: 100vh; */
    /* background-color: #2b347c; */

    >a{
        width: 100%;
        min-height: 285px;
        max-width: 450px;
        margin: 1rem;
    }
`;

export const LoaderContainer = styled.div`
    font-size: 50px;
`;

export const Spin = styled.div`
    border: 8px solid rgba(180, 180, 180, 1) ;
    border-right: 8px solid rgba(100, 100, 100, 1) ;
    height: 40px;
    width: 40px;
    margin: auto;
    border-radius: 50%;
    animation-name: spin;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear; 
    transform-origin: center;

    @keyframes spin{
        from{transform: rotate(0deg)}
        to{transform: rotate(360deg)}
    }
`;