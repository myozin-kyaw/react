export default function TodoItem() {
  return (
    <div className="flex justify-center items-center">
      <div className="max-w-md w-full sm:w-1/2 todo-container px-3 py-8">
        <div className="flex flex-col gap-3 items-center justify-center mb-5">
          {/* todo__input */}
          <input
            className="w-full border p-2"
            type="text"
            placeholder="Keep your todo..."
          />
          <button
            type="button"
            className="w-full px-3 py-2 text-xs font-medium text-center text-white bg-slate-700 rounded-lg hover:bg-slate-800 focus:ring-2 focus:outline-none focus:ring-gray-300 dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-gray-800"
          >
            Submit
          </button>
        </div>

        {/* todo-list */}
        <ul className="flex flex-col space-y-2 text-gray-800">
          <li className="flex items-center border p-4">
            <div className="flex items-center cursor-pointer relative">
              <input
                type="checkbox"
                className="peer h-6 w-6 cursor-pointer transition-all appearance-none rounded-full bg-slate-100 shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                id="checked-checkbox"
              />
              <span className="absolute text-white left-1 opacity-0 peer-checked:opacity-100 pointer-events-none">
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
              </span>
              <label
                htmlFor="checked-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 relative"
              >
                Checked state
              </label>
              <div className="p-2 border-none rounded-full text-white bg-red-500">
                -
              </div>
            </div>
            <i
              className="fa fa-minus-circle ml-auto text-red-600"
              aria-hidden="true"
            ></i>
          </li>
        </ul>
      </div>
    </div>
  );
}
