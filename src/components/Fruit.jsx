export default function Fruit(props) {
  const fruit = props.fruit;
  return (
    <li>
      {fruit.name} ({fruit.price})
    </li>
  );
}
