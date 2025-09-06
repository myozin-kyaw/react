import { useInsertionEffect } from "react";

export default function UseInsertionEffectExample() {
    useInsertionEffect(() => {
        const style = document.createElement('style');

        style.textContent = `
            .dynamic-class {
                color: white;
                padding: 10px;
                background-color: blue;
            }
        `;

        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        }
    }, []);
    
    return (
        <div>
            <h1>useEffect() Example</h1>
            <div className="dynamic-class">Style with useInsertionEffect()</div>
        </div>
    );
}