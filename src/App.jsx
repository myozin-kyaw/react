import ConditionalComponent from "./components/ConditionalComponent";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";

function App() {
  const myozin = {
    name: "Myo Zin",
    message: "Hello,",
    seatNumbers: [1, 2, 3],
  };
  const deedee = {
    name: "Dee Dee",
    message: "Hello,",
    seatNumbers: [5, 6, 7],
  };
  return (
    <>
      <Hello person={myozin} />
      <Hello person={deedee} />
      <Fruits />
      <ConditionalComponent />
    </>
  );
}

export default App;
