import { useState } from "react";
import { UserCard, UserCardWithCompare } from "./UserCard";
import { AnalyticsChart } from "./AnalyticsChart";
import { ActivityFeed } from "./ActivityFeed";
import { ParentComponent } from "./Button";

interface User {
  id: number;
  name: string;
  email: string;
}

export function Dashboard() {
  console.log("Dashboard render");

  const [count, setCount] = useState(0);

  const [user] = useState<User>({
    id: 1,
    name: "John Doe",
    email: "john@example.com",
  });

  const [items] = useState(["item1", "item2", "item3"]);

  return (
    <div className="container">
      <h1>Lab 9.1 — Performance Dashboard</h1>

      <div className="card">
        <h2>Parent Component</h2>
        <p>Count: {count}</p>

        <button onClick={() => setCount((currentCount) => currentCount + 1)}>
          Increment Parent Count
        </button>

        <p>
          Open browser console. When you click this button, Dashboard renders
          again, but memoized children should avoid unnecessary re-renders.
        </p>
      </div>

      <UserCard user={user} />

      <UserCardWithCompare user={user} />

      <AnalyticsChart items={items} />

      <ActivityFeed />

      <ParentComponent />
    </div>
  );
}