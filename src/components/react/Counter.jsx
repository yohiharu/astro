import {useState} from "react"
import Item from "./Item"
export default function Counter({default_num}){
    const [number, setNumber] = useState(Number(default_num))
    const onClick = () => {
        setNumber(prev => prev + 1)
    }
    console.log(number)
    return (
        <div>
            <p>Counter</p>
            <p>count: {number}</p>
            <button onClick={onClick}>INC</button>
            <Item item="unchi"></Item>
        </div>

    )
}