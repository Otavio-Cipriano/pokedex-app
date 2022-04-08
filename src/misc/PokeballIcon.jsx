export default function PokeballIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" height="210" width="400" viewBox="0 0 200 200">
            <path className="ball-top" fill="white" d="M 250, 100 m -75, 0 a 75,75 0 1,0 -150,0" />
            <path className="ball-bot" fill="white" d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0" />
            <path className="ball-line" fill="white" stroke="gray" strokeWidth="13" d="M 25, 102 l 150, 0" />
            <path className="ball-center" fill="white" stroke="gray" strokeWidth="13" d="M 150, 100 m -75, 0 a 23,23 0 1,0 55,0 a 23,23 0 1,0 -55,0" />
            Sorry, your browser does not support inline SVG.
        </svg>
    )
}
