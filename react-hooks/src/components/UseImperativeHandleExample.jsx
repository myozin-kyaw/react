import { useRef, forwardRef, useImperativeHandle } from "react";

export default function UseImperativeHandleExample() {
  const inputRef = useRef();

  return (
    <div>
      <MyInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
      <button onClick={() => inputRef.current.clear()}>Clear</button>
    </div>
  );
}

const MyInput = forwardRef((props, ref) => {
    const inputRef = useRef();
  
    useImperativeHandle(ref, () => ({
      focus() {
        inputRef.current.focus();
      },
      clear() {
        inputRef.current.value = "";
      }
    }));
  
    return <input ref={inputRef} />;
  });
