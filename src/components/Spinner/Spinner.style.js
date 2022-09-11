import styled from "styled-components";

export const Spin = styled.div`
    border: 8px solid rgba(180, 180, 180, 1) ;
    border-right: 8px solid rgba(100, 100, 100, 1) ;
    border-width: ${props => props.bwidth? props.bwidth : '8px'};
    height: ${props => props.size ? props.size : '25px'};
    width: ${props => props.size ? props.size : '25px'};
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

export const SpinnerBox = styled.div`
    width: 190px;
    height: 150px;
    box-shadow: 0 0 10px 0px rgb(0 0 0 / 30%);
    display: grid;
    place-items: center;
    border-radius: 5px;
    
    p{
        color: gray;
        margin-top: 5px;
        margin-bottom: -0.5rem;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 1rem;
    }

    img{
        animation: spin 0.5s ease infinite;
        max-width: 60px;
        margin-left: 0.8rem;
        opacity: 0.9;
    }

    @keyframes spin{
    from{transform: rotate(0deg)}
    to{transform: rotate(360deg)}
}
`;


