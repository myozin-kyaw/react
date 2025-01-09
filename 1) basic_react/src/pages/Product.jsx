import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Product() {
  const [username, setUserName] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  function handleClick() {
    navigate("/dashboard/profile", { state: { username } });
  }
  return (
    <div>
      <h1>Product List</h1>

      <h3>Product ID: {id}</h3>

      <input
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button
        type="button"
        onClick={handleClick}
      >
        Go to Profile Page
      </button>
    </div>
  );
}
