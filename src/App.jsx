import ConditionalComponent from "./components/ConditionalComponent";
import Counter from "./components/Counter";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
import Message from "./components/Message";

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
      {/* <Hello person={myozin} />
      <Hello person={deedee} />
      <Fruits />
      <ConditionalComponent />
      <Message /> */}
      <Counter />
    </>
  );
}

export default App;
