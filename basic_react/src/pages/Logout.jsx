import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Logout() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <button
        type="button"
        onClick={() => setUser("Guest")}
      >
        Logout
      </button>
    </div>
  );
}
