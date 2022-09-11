import Spinner from '../Spinner/Spinner'

import * as style from './Pokemon.style'


export default function PokemonSpinner() {
    return (
        <style.Wrap>
            <style.SpinnerContainer>
                    <Spinner bwidth={'5px'} size={'30px'} />
            </style.SpinnerContainer>
        </style.Wrap>
    )
}
