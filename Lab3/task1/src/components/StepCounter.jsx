import { useState } from "react";

function StepCounter({ initialValue = 0, step = 1 }) {
    const [count, setCount] = useState(initialValue);
    const [history, setHistory] = useState([]);
    const [operationCount, setOperationCount] = useState(0);

    const increment = () => {
        setCount(prev => {
            const newValue = prev + step;
            setHistory(h => [...h, newValue]);
            return newValue;
        });
        setOperationCount(c => c + 1);
    };

    const decrement = () => {
        setCount(prev => {
            const newValue = prev - step;
            setHistory(h => [...h, newValue]);
            return newValue;
        });
        setOperationCount(c => c + 1);
    };

    const reset = () => {
        setCount(initialValue);
        setHistory([]);
        setOperationCount(0);
    };

    const lastFive = history.slice(-5);

    return (
        <div style={{ border: "1px solid #ccc", padding: "16px", marginBottom: "20px" }}>
            <h2>Step Counter</h2>

            <p><strong>Current count:</strong> {count}</p>
            <p><strong>Total operations:</strong> {operationCount}</p>

            <button onClick={increment}>Increment</button>
            <button onClick={decrement} style={{ marginLeft: "8px" }}>
                Decrement
            </button>
            <button onClick={reset} style={{ marginLeft: "8px" }}>
                Reset
            </button>

            <h4>History (last 5 values):</h4>
            <ul>
                {lastFive.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
        </div>
    );
}

export default StepCounter;
