import styled from "styled-components";

import { Link } from "react-router-dom";

const Card = styled(Link)`
    background: ${props => props.bgcolor ? props.bgcolor : ' '};
    border-radius: 15px;
    padding: 1rem 1.5rem;
    position: relative;
    animation-name: show;
    animation-duration: 0.8s;
    animation-timing-function: ease-in;
    text-decoration: none;
    box-shadow: 2px 3px 10px hsl(0deg 0% 0% / 29%);

    &:hover{
        transform: scale(1.05);
        cursor: pointer;
    }

    @keyframes show{
        0%{
            opacity: 0;
            transform: translateY(100px);
        }
        100%{
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

const CardTitle = styled.h2`
    color: black;
    text-transform: capitalize;
    font-size: 1.7rem;
    margin: 0;
    color: white;
    margin-bottom: 10px;
`;

const CardSprite = styled.div`
    max-width: 200px;
    margin-left: auto;
    margin-right: -10px;
    img{
        width: 100%;
    }
`;

const CardNb = styled.span`
    font-size: 3rem;
    font-weight: bold;
    position: absolute;
    bottom: 1rem;
    opacity: 0.5;
    color: white;
`;

const CardTypes = styled.div``;

export { Card, CardNb, CardSprite, CardTitle, CardTypes}