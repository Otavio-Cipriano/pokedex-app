import * as style from './Spinner.style'

// import Pokeball from '../../images/pokeball.svg'

export default function Spinner({ size, bwidth, notBox }) {

    if(notBox){
        return(<style.Spin size={size} bwidth={bwidth} className="spin" />)
    }

    return (
        <>
            <style.SpinnerBox>
                <div>
                    <style.Spin size={size} bwidth={bwidth} className="spin" >
                    </style.Spin>
                    <p>Loading</p>
                </div>
            </style.SpinnerBox>
        </>
    )
}


