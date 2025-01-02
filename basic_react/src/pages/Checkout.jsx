import { useContext } from "react";
import { userContext } from "../App";

export default function Checkout() {
  const { user, setUser } = useContext(userContext);
  return (
    <div>
      <h2>Checkout as {user}</h2>
    </div>
  );
}
