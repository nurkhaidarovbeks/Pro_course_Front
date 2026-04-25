import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      text: "Prepare production build",
      completed: false,
    },
    {
      id: 2,
      text: "Deploy app to Vercel",
      completed: false,
    },
  ]);

  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (!newTodo.trim()) {
      return;
    }

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false,
      },
    ]);

    setNewTodo("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo;
      })
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const completedCount = todos.filter((todo) => todo.completed).length;

  return (
    <div className="todo-list">
      <h1>Deployment Todo App</h1>

      <p>
        Version: <strong>{import.meta.env.VITE_APP_VERSION}</strong>
      </p>

      <p>
        API URL: <strong>{import.meta.env.VITE_API_URL}</strong>
      </p>

      <div className="todo-input-container">
        <input
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              addTodo();
            }
          }}
          placeholder="Add a new todo..."
        />

        <button onClick={addTodo}>Add</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />

            <span>{todo.text}</span>

            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <p>
        {todos.length} todos ({completedCount} completed)
      </p>
    </div>
  );
}