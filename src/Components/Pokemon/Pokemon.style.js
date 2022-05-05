import styled from 'styled-components'

export const Wrap = styled.main`
min-width: 100vw;
min-height: 100vh;
background-color: ${props => props.color};
color: white;
padding: 1rem;
`;

export const UpperText = styled.div`
display: flex;
align-items: center;
gap: 1rem;
margin: 3rem;
text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const RegionText = styled.p`
position: absolute;
font-weight: bolder;
font-size: 1.2rem;
transform: rotate(90deg);
left: -1rem;
top: 13rem;
margin: 0;
text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const Title = styled.h1`
font-size: inherit;
text-transform: capitalize;
font-size: 2.5rem;
margin: 0;
`;

export const JapaneseTitle = styled.h2`
position: absolute;
top: 1rem;
left: 1rem;
font-size: 5rem;
opacity: 0.3;
margin: 0;
`

export const PokemonEntry = styled.span`
font-size: 2rem;
`

export const Sprite = styled.div`
max-width: 550px;
width: 100%;
margin: 4rem auto 0 auto;

>img{
    width: 100%;
}
`;

export const Grid = styled.div`
display: flex;
gap: 1rem;

>div {
    position: relative;
    width: 100%;
}

>div:last-of-type{
    max-width: 500px;
    padding: 0 1.5rem;
}

@media (max-width: 1000px){
    flex-direction: column;
    align-items: center;
}
`;

export const Pagination = styled.div`
display: flex;
justify-content: space-between;
margin-top: 4rem;
text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;