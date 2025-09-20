import { useTodos } from "../context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useTodos();

  if (todos.length === 0) {
    return (
      <div className="p-8 text-center">
        <h3 className="text-lg font-medium text-amber-800 mb-2">
          No todos yet
        </h3>
        <p className="text-amber-500">
          Add your first todo above to get started!
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="px-6 py-4 bg-yellow-50 rounded-t-lg border-b border-yellow-300">
        <h2 className="text-lg font-semibold text-amber-800">
          Tasks ({todos.length})
        </h2>
      </div>

      <div className="max-h-96 overflow-y-auto">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
