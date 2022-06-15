import * as style from './Spinner.style'

export default function Spinner({ size, bwidth }) {
    return (
        <>
            <style.SpinnerBox>
                <div>
                    <style.Spin size={size} bwidth={bwidth} className="spin" />
                    <p>Loading</p>
                </div>
            </style.SpinnerBox>
        </>
    )
}


