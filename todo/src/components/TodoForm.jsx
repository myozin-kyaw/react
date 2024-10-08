import { useState } from "react";

export default function TodoForm({ todos, setTodos }) {
  const [todo, setTodo] = useState({id: "", name: "", isCompleted: false});
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({id: "", name: "", isCompleted: false});
  }
  return (
    <form
      className="flex flex-col items-center justify-center gap-3 mb-5"
      onSubmit={handleSubmit}
    >
      {/* todo__input */}
      <input
        className="w-full p-2 border rounded-md focus:border-slate-700"
        type="text"
        required
        placeholder="Keep your todo..."
        onChange={(e) => setTodo({id: todos.length + 1, name: e.target.value, isCompleted: false})}
        value={todo.name}
      />
      <button
        type="submit"
        className="w-full px-3 py-2 text-xs font-medium text-center text-white rounded-lg bg-slate-700 hover:bg-slate-800 focus:ring-2 focus:outline-none focus:ring-gray-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-gray-800"
      >
        Save
      </button>
    </form>
  );
}
