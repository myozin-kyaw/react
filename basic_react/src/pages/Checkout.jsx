import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Checkout() {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h2>Checkout as {user}</h2>
    </div>
  );
}
