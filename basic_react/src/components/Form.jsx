import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({firstName: '', lastName: ''});
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
    setName({firstName: '', lastName: ''});
  }
  return (
    <div>
      Full Name : {name.firstName} {name.lastName}
      <form>
        <input type="text" onChange={(e) => setName({...name, firstName: e.target.value})} value={name.firstName} placeholder="First Name" />
        <input type="text" onChange={(e) => setName({...name, lastName: e.target.value})} value={name.lastName} placeholder="Last Name" />
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>
    </div>
  );
}
