import { TodoProvider } from "./context/TodoContext";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <TodoProvider>
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-100">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-amber-800 mb-2">Todo App</h1>
            <p className="text-amber-700">
              Stay organized and get things done!
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-yellow-200">
              <AddTodo />
            </div>

            <div className="bg-white rounded-lg shadow-md border border-yellow-200">
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;
