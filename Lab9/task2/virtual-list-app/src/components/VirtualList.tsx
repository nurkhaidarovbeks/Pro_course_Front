import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { FixedSizeList as List } from "react-window";
import { generateItems } from "../utils/generateItems";

interface VirtualListProps {
  itemCount?: number;
  height?: number;
}

export function VirtualList({ itemCount = 10000, height = 500 }: VirtualListProps) {
  const [filter, setFilter] = useState("");

  const items = useMemo(() => {
    console.time("Generate virtualized items");
    const generatedItems = generateItems(itemCount);
    console.timeEnd("Generate virtualized items");

    return generatedItems;
  }, [itemCount]);

  const filteredItems = useMemo(() => {
    console.time("Filter virtualized items");

    const normalizedFilter = filter.toLowerCase();

    const result = !normalizedFilter
      ? items
      : items.filter((item) => {
          return (
            item.title.toLowerCase().includes(normalizedFilter) ||
            item.category.toLowerCase().includes(normalizedFilter)
          );
        });

    console.timeEnd("Filter virtualized items");

    return result;
  }, [items, filter]);

  const handleFilterChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setFilter(event.target.value);
    },
    []
  );

  return (
    <div className="card">
      <h2>Virtualized List</h2>

      <p>
        This list contains {items.length.toLocaleString()} items, but only
        visible rows are rendered.
      </p>

      <input
        type="text"
        placeholder="Filter by title or category..."
        value={filter}
        onChange={handleFilterChange}
        className="filterInput"
      />

      <p>
        Showing {filteredItems.length.toLocaleString()} of{" "}
        {items.length.toLocaleString()} items
      </p>

      <List
        height={height}
        itemCount={filteredItems.length}
        itemSize={90}
        width="100%"
      >
        {({ index, style }) => {
          const item = filteredItems[index];

          return (
            <div style={style} className="listItem">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <span className="category">{item.category}</span>
            </div>
          );
        }}
      </List>
    </div>
  );
}