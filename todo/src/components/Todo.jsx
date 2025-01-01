import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));
  const completedTodos = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-md w-full sm:w-1/2 todo-container px-3 py-8 space-y-5">
        <TodoForm todos={todos} setTodos={setTodos} />
        {/* todo-list */}
        <ul className="flex flex-col space-y-2 text-gray-800">
          {sortedTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              todos={todos}
              setTodos={setTodos}
            />
          ))}
        </ul>
        {todos.length > 0 && (
          <div className="bg-slate-700 text-white p-2 rounded-md shadow-md flex justify-between">
            <div>Completed Todos : </div>
            <div>
              {completedTodos}/{todos.length}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
