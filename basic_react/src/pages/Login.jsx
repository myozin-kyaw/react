import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Login() {
  const [value, setValue] = useState("");
  const { dispatch } = useContext(UserContext);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "login", payload: value });
    setValue("");
  }
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
