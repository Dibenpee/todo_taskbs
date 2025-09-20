import { createContext, useContext, useState, useEffect } from "react";

const TodoContext = createContext();

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodoProvider");
  }
  return context;
};

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    // localStorage
    try {
      const savedTodos = localStorage.getItem("todos");
      return savedTodos ? JSON.parse(savedTodos) : [];
    } catch (error) {
      console.error("Error loading todos from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  //actions
  const addTodo = (text) => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text: text.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, text) => {
    if (text.trim()) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, text: text.trim() } : todo
        )
      );
    }
  };

  const value = {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    editTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoContext;
