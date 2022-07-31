import styled from 'styled-components'

import { Link } from 'react-router-dom'


export const Wrap = styled.div`
    position: relative;
    padding: 1rem 0;
    >span{
        position: absolute;
        top: 0;
    }
`;


export const CardLink = styled(Link)`
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: capitalize;
    font-size: 1.5rem;
    font-weight: bolder;

    :hover{
        color: #dddddd;
    }
`;

export const HomeLink = styled(CardLink)`
    font-size: 2.1rem;
`;