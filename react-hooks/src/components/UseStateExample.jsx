import { useState } from "react"

export default function UseStateExample() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(count - 1)}>Decrease me</button>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Increase me</button>
        </div>
    )
}
    