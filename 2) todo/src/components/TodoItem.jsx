export default function TodoItem({ todo, todos, setTodos }) {
  function handleDelete(todo) {
    setTodos(todos.filter((item) => item.id !== todo.id));
  }

  function handleClick(todo) {
    const newTodos = todos.map((item) =>
      item.id === todo.id ? { ...todo, isCompleted: !todo.isCompleted } : item
    );

    setTodos(newTodos);
  }
  return (
    <li className="flex items-center justify-between p-4 border">
      <div className="relative flex items-center cursor-pointer">
        <input
          type="checkbox"
          value={todo.isCompleted}
          className="w-6 h-6 transition-all border rounded-full shadow appearance-none cursor-pointer peer bg-slate-100 hover:shadow-md border-slate-300 checked:bg-slate-800 checked:border-slate-800"
          id={"todo-item-" + todo.id}
        />
        <div className="absolute text-white left-[5px] top-[5px] opacity-0 peer-checked:opacity-100 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <label
          htmlFor={"todo-item-" + todo.id}
          onClick={() => handleClick(todo)}
          className="relative text-sm font-medium cursor-pointer select-none text-slate-700 peer-checked:line-through ms-2 dark:text-slate-700"
        >
          {todo.name}
        </label>
      </div>
      <button
        onClick={() => handleDelete(todo)}
        type="button"
        className="flex items-end justify-center w-5 h-5 text-white bg-red-800 border-none rounded-full cursor-pointer select-none"
      >
        -
      </button>
    </li>
  );
}
