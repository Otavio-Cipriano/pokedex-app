import styled from 'styled-components';
import Container from './Container'

export default function Pokemon({ pokemon, color }) {
    return (
        <Container>
            <Wrap>
                <Grid>
                    <Sprite>
                        <img src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name} />
                    </Sprite>
                    <Info>{pokemon?.name}</Info>
                </Grid>
                <Navigator></Navigator>
            </Wrap>
        </Container>
    )
}


const Wrap = styled.main``;

const Grid = styled.div`
    display: grid;
    grid-template-columns: auto auto;
`;

const Info = styled.aside``;

const Sprite = styled.div``;

const Navigator = styled.div``;

