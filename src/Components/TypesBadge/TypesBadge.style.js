import styled from "styled-components"
import { tint } from 'polished'


const Type = styled.span`
    color: white;
    text-transform: capitalize;
    background-color: ${props => props.color ? tint(0.2, props.color) : 'white'};
    border-radius: 20px;
    margin-right: 5px;
    margin-left: -2px;
    margin-top: 5px;
    text-align: center;
    padding: 5px 1.5rem;
    font-size: 1rem;
`

export { Type }