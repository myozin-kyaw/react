import { useReducer } from "react";

const reducer = (state, action) => {
    if (action.type == "increment") {
        return { ...state, count: state.count + 1 };
    }
    if (action.type == "decrement") {
        return { ...state, count: state.count - 1 };
    }

    alert('Invalid action type');
}

export default function UseReducerExample() {
    const [state, dispatch] = useReducer(reducer, {count: 0});
    return (
        <div>
            <h1>useReducer() Example</h1>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrease me</button>
            <p>{state.count}</p>
            <button onClick={() => dispatch({type: 'increment'})}>Increase me</button>
        </div>
    );
}