import styled from 'styled-components'

export default function Spinner({size}) {
    return (
        <Spin size={size} className="spin"/>
    )
}


const Spin = styled.div`
    border: 8px solid rgba(43, 52, 124, 0.8) ;
    border-right: 8px solid rgba(43, 52, 124, 1);
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