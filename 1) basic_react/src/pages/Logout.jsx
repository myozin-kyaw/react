import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Logout() {
  const { dispatch } = useContext(UserContext);
  return (
    <div>
      <button
        type="button"
        onClick={() => dispatch({ type: "logout", payload: "Guest" })}
      >
        Logout
      </button>
    </div>
  );
}
