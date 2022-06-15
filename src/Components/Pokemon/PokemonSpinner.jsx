import Spinner from '../Spinner/Spinner'

import * as style from './Pokemon.style'


export default function PokemonSpinner() {
    return (
        <style.Wrap>
            <style.SpinnerContainer>
                <style.SpinnerBox>
                    <div>
                        <Spinner bwidth={'5px'} size={'30px'}/>
                        <p>Loading</p>
                    </div>
                </style.SpinnerBox>
            </style.SpinnerContainer>
        </style.Wrap>
    )
}
