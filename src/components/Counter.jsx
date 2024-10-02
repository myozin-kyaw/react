import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <h1>Count value is: {count}</h1>
      <button onClick={increment}>+</button>
    </div>
  );
}
