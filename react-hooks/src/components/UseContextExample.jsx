import { createContext, useContext, useState } from "react";

export const GlobalStateContext = createContext(null);

export default function UseContextExample() {
    const [isToggled, setIsToggled] = useState(false);
    return (
        <GlobalStateContext.Provider value={{isToggled, setIsToggled}}>
            <div>
                <h1>Parent Component</h1>
                <ChildToggle/>
                <ChildDisplay/>
            </div>
        </GlobalStateContext.Provider>
    );
}

const ChildToggle = () => {
    const {isToggled, setIsToggled} = useContext(GlobalStateContext);
    return (
        <div>
            <button type="button" onClick={() => setIsToggled(!isToggled)} style={{backgroundColor: isToggled ? '#4299e1' : 'gray', color: 'white', outline: 'none', border: 'none'}}>Toggle State</button>
        </div>
    )
}

const ChildDisplay = () => {
    const {isToggled} = useContext(GlobalStateContext);
    return (
        <div>
            <p>Current State : {isToggled ? 'ON' : 'OFF'}</p>
        </div>
    )
}