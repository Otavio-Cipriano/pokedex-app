import { tint } from 'polished';
import React from 'react'
import styled from 'styled-components';
import TypesBadge from '../TypesBadge/TypesBadge';

export default function PokedexHeader({ name, id, types, speciesUrl, sprite, color }) {
    return (
        <Header color={color}>
            <TopText>
                <Name>{name}</Name>
                <PokeNb>#{id}</PokeNb>
                <Types>
                    {
                        types?.map((type, index) => {
                            return (
                                <TypesBadge key={index} color={color}>{type.type.name}</TypesBadge>
                            )
                        })
                    }
                </Types>

            </TopText>
            <BotImg>
                <SpriteContainer>
                    <img src={sprite} alt={name} />
                </SpriteContainer>
            </BotImg>
        </Header>
    )
}

const Header = styled.div`
    width: 100%;
    background-color: ${props => props.color ? tint(0.25, props.color) : 'gray'};
    padding: 2rem;
    padding-bottom: 0;

`;

const TopText = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
`

const Name = styled.h2`
    text-transform: capitalize;
    color: white;
    margin: 0;
    width: 100%;
    font-size: 2rem;
`;

const PokeNb = styled.span`
    text-transform: capitalize;
    color: white;
    margin: 0;
    width: 100%;
    font-size: 2rem;
    text-align: right;
    font-weight: 700;
    font-size: 1.5rem;
`;

const Types = styled.div`
    margin-top: 10px;
`;

const BotImg = styled.div`
    display: flex;
    justify-content: center;
`;

const SpriteContainer = styled.div`
    max-width: 350px;
    position: relative;
    z-index: 2;
    align-self: center;
    justify-self: center;
    >img{
        width: 100%;
    }
`;
