import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoList } from "./TodoList";

describe("TodoList Component", () => {
  describe("Rendering", () => {
    test("renders empty todo list", () => {
      render(<TodoList />);

      expect(screen.getByText("Todo List")).toBeInTheDocument();
      expect(screen.getByText("0 todos (0 completed)")).toBeInTheDocument();
    });

    test("renders with initial todos", () => {
      const initialTodos = [
        {
          id: 1,
          text: "Test todo",
          completed: false,
        },
      ];

      render(<TodoList initialTodos={initialTodos} />);

      expect(screen.getByText("Test todo")).toBeInTheDocument();
      expect(screen.getByText("1 todos (0 completed)")).toBeInTheDocument();
    });
  });

  describe("Adding todos", () => {
    test("adds a new todo via button click", async () => {
      const user = userEvent.setup();

      render(<TodoList />);

      const input = screen.getByTestId("todo-input");
      const addButton = screen.getByTestId("add-button");

      await user.type(input, "New todo item");
      await user.click(addButton);

      expect(screen.getByText("New todo item")).toBeInTheDocument();
      expect(input).toHaveValue("");
      expect(screen.getByText("1 todos (0 completed)")).toBeInTheDocument();
    });

    test("adds a new todo via Enter key", async () => {
      const user = userEvent.setup();

      render(<TodoList />);

      const input = screen.getByTestId("todo-input");

      await user.type(input, "Press Enter todo{Enter}");

      expect(screen.getByText("Press Enter todo")).toBeInTheDocument();
    });

    test("does not add empty todo", async () => {
      const user = userEvent.setup();

      render(<TodoList />);

      const addButton = screen.getByTestId("add-button");

      await user.click(addButton);

      expect(screen.queryAllByTestId("todo-item")).toHaveLength(0);
      expect(screen.getByText("0 todos (0 completed)")).toBeInTheDocument();
    });

    test("does not add spaces only todo", async () => {
      const user = userEvent.setup();

      render(<TodoList />);

      const input = screen.getByTestId("todo-input");
      const addButton = screen.getByTestId("add-button");

      await user.type(input, "   ");
      await user.click(addButton);

      expect(screen.queryAllByTestId("todo-item")).toHaveLength(0);
    });
  });

  describe("Toggling todos", () => {
    test("toggles todo completion status", async () => {
      const user = userEvent.setup();

      const initialTodos = [
        {
          id: 1,
          text: "Test",
          completed: false,
        },
      ];

      render(<TodoList initialTodos={initialTodos} />);

      const checkbox = screen.getByTestId("todo-checkbox");

      await user.click(checkbox);

      const todoItem = screen.getByTestId("todo-item");

      expect(todoItem).toHaveClass("completed");
      expect(screen.getByText("1 todos (1 completed)")).toBeInTheDocument();
    });
  });

  describe("Deleting todos", () => {
    test("deletes a todo", async () => {
      const user = userEvent.setup();

      const initialTodos = [
        {
          id: 1,
          text: "Delete me",
          completed: false,
        },
      ];

      render(<TodoList initialTodos={initialTodos} />);

      const deleteButton = screen.getByTestId("delete-button");

      await user.click(deleteButton);

      expect(screen.queryByText("Delete me")).not.toBeInTheDocument();
      expect(screen.getByText("0 todos (0 completed)")).toBeInTheDocument();
    });
  });

  describe("Counter", () => {
    test("updates counter when adding todos", async () => {
      const user = userEvent.setup();

      render(<TodoList />);

      const input = screen.getByTestId("todo-input");
      const addButton = screen.getByTestId("add-button");

      await user.type(input, "Todo 1");
      await user.click(addButton);
      expect(screen.getByTestId("todo-count")).toHaveTextContent(
        "1 todos (0 completed)"
      );
    });

    test("shows completed counter for initial completed todo", () => {
      const initialTodos = [
        {
          id: 1,
          text: "Completed todo",
          completed: true,
        },
      ];

      render(<TodoList initialTodos={initialTodos} />);

      expect(screen.getByTestId("todo-count")).toHaveTextContent(
        "1 todos (1 completed)"
      );
    });
  });
});