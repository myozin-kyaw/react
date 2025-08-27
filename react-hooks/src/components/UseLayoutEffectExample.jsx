import { useLayoutEffect, useRef, useState } from "react";

export default function UseLayoutEffectExample() {
  const boxRef = useRef();
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    // measure DOM size before painting
    setHeight(boxRef.current.getBoundingClientRect().height);
  }, []);

  return (
    <div>
      <div ref={boxRef} style={{ height: "200px", background: "lightblue" }}>
        Box
      </div>
      <p>Height is {height}px</p>
    </div>
  );
}