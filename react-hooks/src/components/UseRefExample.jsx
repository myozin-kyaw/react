import { useEffect, useRef, useState } from "react";

export default function UseRefExample() {
    return (
        <div>
            <h1>useRef() Example</h1>
            <InputFocus/>
            <TimerExample/>
            <TimerExampleTwo/>
            <PrevStateExample/>
        </div>
    );
}

const InputFocus = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}

const TimerExample = () => {
    const [count, setCount] = useState(0);
    const timerRef = useRef(null);
  
    const startTimer = () => {
      timerRef.current = setInterval(() => {
        setCount(c => c + 1);
      }, 1000);
    };
  
    const stopTimer = () => {
      clearInterval(timerRef.current);
    };
  
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
      </div>
    );
  }


const TimerExampleTwo = () => {
  const [count, setCount] = useState(0);

  const startTimer = () => {
    setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(count);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

const PrevStateExample = () => {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div>
      <p>Now: {count}, Before: {prevCount.current}</p>
      <button onClick={() => setCount(c => c + 1)}>Increase</button>
    </div>
  );
}

