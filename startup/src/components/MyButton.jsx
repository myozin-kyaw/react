import { useState } from "react";

export default function MyButton() {
    const [count, setCount] = useState(0);

    function increament() {
        setCount(count + 1);
    }

    function decreament() {
        setCount(count - 1);
    }

    return (
        <div>
            <button className="" onClick={decreament}>Decrease the count</button>
            <span>{count}</span>
            <button onClick={increament}>Increase the count</button>
        </div>
    );
}