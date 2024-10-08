export default function TodoItem({ todo, todos, setTodos }) {
  function handleDelete() {
    setTodos(todos.filter((item) => item.id !== todo.id));
  }
  return (
    <li className="flex justify-between items-center border p-4">
      <div className="flex items-center cursor-pointer relative">
        <input
          type="checkbox"
          className="peer h-6 w-6 cursor-pointer transition-all appearance-none rounded-full bg-slate-100 shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
          id="checked-checkbox"
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
          htmlFor="checked-checkbox"
          className="ms-2 text-sm cursor-pointer select-none font-medium text-gray-900 dark:text-gray-300 relative"
        >
          {todo.name}
        </label>
      </div>
      <button
        onClick={handleDelete}
        type="button"
        className="w-5 h-5 flex items-end cursor-pointer select-none justify-center border-none rounded-full text-white bg-red-800"
      >
        -
      </button>
    </li>
  );
}
