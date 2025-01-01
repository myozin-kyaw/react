import { useReducer } from "react";

export default function CounterUsingReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0, incrementBy: 1 });

  function reducer(state, action) {
    if (action.type == "increment") {
      return { ...state, count: state.count + state.incrementBy };
    }
    if (action.type == "decrement") {
      return { ...state, count: state.count - state.incrementBy };
    }
    if (action.type == "setIncrement") {
      return { ...state, incrementBy: action.payload };
    }
  }

  return (
    <div>
      <div>
        <input
          type="text"
          value={state.incrementBy}
          onChange={(e) =>
            dispatch({ type: "setIncrement", payload: Number(e.target.value) })
          }
        />
      </div>
      <div>
        <button type="button" onClick={() => dispatch({ type: "increment" })}>
          Incremement
        </button>
        <span> {state.count} </span>
        <button type="button" onClick={() => dispatch({ type: "decrement" })}>
          Decrement
        </button>
      </div>
    </div>
  );
}
