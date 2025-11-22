import {useState} from "react"
export default function Counter(){
    const [number, setNumber] = useState(0)
    const onClick = () => {
        setNumber(prev => prev + 1)
    }
    console.log(number)
    return (
        <div>
            <p>Counter</p>
            <p>count: {number}</p>
            <button onClick={onClick}>INC</button>
        </div>

    )
}