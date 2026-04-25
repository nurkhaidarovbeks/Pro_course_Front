import { useState } from "react";
import { RegularList } from "./components/RegularList";
import { VirtualList } from "./components/VirtualList";

export default function App() {
  const [showVirtual, setShowVirtual] = useState(true);

  return (
    <main className="container">
      <h1>Lab 9.2 — Virtualization for Large Lists</h1>

      <div className="card">
        <p>
          Use the buttons below to compare a virtualized list with a regular
          list. Open Chrome DevTools Performance tab to measure rendering.
        </p>

        <div className="buttonRow">
          <button onClick={() => setShowVirtual(true)}>
            Show Virtualized List
          </button>

          <button onClick={() => setShowVirtual(false)}>
            Show Regular List
          </button>
        </div>
      </div>

      {showVirtual ? (
        <VirtualList itemCount={10000} height={500} />
      ) : (
        <RegularList itemCount={10000} />
      )}
    </main>
  );
}