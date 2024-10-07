import { useState } from "react";

export default function TodoForm({ todos, setTodos }) {
  const [todo, setTodo] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }
  return (
    <form
      className="flex flex-col gap-3 items-center justify-center mb-5"
      onSubmit={handleSubmit}
    >
      {/* todo__input */}
      <input
        className="w-full border p-2"
        type="text"
        placeholder="Keep your todo..."
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button
        type="submit"
        className="w-full px-3 py-2 text-xs font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-800 focus:ring-2 focus:outline-none focus:ring-gray-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-gray-800"
      >
        Save
      </button>
    </form>
  );
}
