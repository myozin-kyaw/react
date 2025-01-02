import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  return (
    <div>
      <h1>Product List</h1>

      <h3>Product ID: {id}</h3>
    </div>
  );
}
