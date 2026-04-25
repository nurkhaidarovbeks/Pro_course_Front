import { useMemo } from "react";
import { generateItems } from "../utils/generateItems";

interface RegularListProps {
  itemCount?: number;
}

export function RegularList({ itemCount = 10000 }: RegularListProps) {
  const items = useMemo(() => {
    console.time("Generate regular items");
    const generatedItems = generateItems(itemCount);
    console.timeEnd("Generate regular items");

    return generatedItems;
  }, [itemCount]);

  console.log("RegularList render. Rendering all DOM nodes:", items.length);

  return (
    <div className="card">
      <h2>Regular List</h2>

      <p>
        This list renders all {items.length.toLocaleString()} items at once.
        This is slower and creates many DOM nodes.
      </p>

      <div className="regularList">
        {items.map((item) => (
          <div key={item.id} className="listItem">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <span className="category">{item.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
