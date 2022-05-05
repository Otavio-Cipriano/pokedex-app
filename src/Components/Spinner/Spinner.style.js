import styled from "styled-components";

const Spin = styled.div`
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

export { Spin }