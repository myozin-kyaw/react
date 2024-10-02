import Fruit from "./Fruit";

export default function Fruits() {
  // const fruits = ['Apple', 'Mango', 'Pineapple', 'Guava', 'Avocado'];
  const fruits = [
    {
      name: "Apple",
      price: "$0.3",
    },
    {
      name: "Mango",
      price: "$0.2",
    },
    {
      name: "Pineapple",
      price: "$0.5",
    },
    {
      name: "Guava",
      price: "$0.15",
    },
    {
      name: "Avocado",
      price: "$0.7",
    },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit key={fruit.name} fruit={fruit} />
        ))}
      </ul>
    </div>
  );
}
