import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  function handleChange(e) {
    setName(e.target.value);
    console.log(name);
  }
  return (
    <div>
      <form>
        <input type="text" onChange={(e) => handleChange(e)} value={name} />
      </form>
    </div>
  );
}
