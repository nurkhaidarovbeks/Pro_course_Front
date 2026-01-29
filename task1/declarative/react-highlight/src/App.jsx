import { useState } from "react";
import "./index.css";

export default function App() {
    const [isHighlighted, setIsHighlighted] = useState(false);
    function handleToggle() {
        setIsHighlighted(!isHighlighted)
    }

    return (
        <div style={{ padding: "20px" }}>
            <h1>Declarative Version> (React)</h1>
            <button onClick={handleToggle}>Toggle Highlight</button>
            <p className={isHighlighted ? "highlight" : ""}>
                Click the button to toggle highlight
            </p>
        </div>
    );
}