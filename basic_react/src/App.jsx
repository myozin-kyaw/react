import ConditionalComponent from "./components/ConditionalComponent";
import Counter from "./components/Counter";
import CounterUsingReducer from "./components/CounterUsingReducer";
import Form from "./components/Form";
import Fruits from "./components/Fruits";
import Hello from "./components/Hello";
import Message from "./components/Message";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Settings from "./pages/Settings";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import { UserProvider } from "./contexts/UserContext";

function App() {
  // const myozin = {
  //   name: "Myo Zin",
  //   message: "Hello,",
  //   seatNumbers: [1, 2, 3],
  // };
  // const deedee = {
  //   name: "Dee Dee",
  //   message: "Hello,",
  //   seatNumbers: [5, 6, 7],
  // };
  return (
    <>
      {/* <Hello person={myozin} />
      <Hello person={deedee} />
      <Fruits />
      <ConditionalComponent />
      <Message />
      <Counter /> */}
      {/* <Form /> */}
      {/* <CounterUsingReducer /> */}
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          ></Route>
          <Route
            path="/products/:id"
            element={<Product />}
          ></Route>
          <Route
            path="/dashboard"
            element={<Dashboard />}
          >
            <Route
              path="profile"
              element={<Profile />}
            ></Route>
            <Route
              path="settings"
              element={<Settings />}
            ></Route>
          </Route>
          <Route
            path="*"
            element={<h2>404 Not Found</h2>}
          ></Route>
        </Routes>
      </BrowserRouter>

      <UserProvider>
        <Login />
        <Checkout />
      </UserProvider>
    </>
  );
}

export default App;
