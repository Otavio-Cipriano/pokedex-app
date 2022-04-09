import React from 'react'
import styled from 'styled-components'

export default function Spinner() {
    return (
        <Spin />
    )
}


const Spin = styled.div`
    border: 5px solid   gray;
    border-right: 5px solid rgb(0 0 0 / 80%);
    height: 25px;
    width: 25px;
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