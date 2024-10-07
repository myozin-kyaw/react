import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-md w-full sm:w-1/2 todo-container px-3 py-8">
        <TodoForm todos={todos} setTodos={setTodos} />
        {/* todo-list */}
        <ul className="flex flex-col space-y-2 text-gray-800">
          {todos.map((todo) => (
            <TodoItem
              key={todo}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
