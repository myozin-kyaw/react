import { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todo() {
  // const [todo, setTodo] = useState("");
  // const [todos, setTodos] = useState([]);
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   setTodos([...todos, todo]);
  //   setTodo("");
  // }
  return (
    <div>
      <TodoItem />

      {/* {todos.map((todo) => (
        <TodoItem key={todo} todo={todo} />
      ))} */}
    </div>
  );
}
