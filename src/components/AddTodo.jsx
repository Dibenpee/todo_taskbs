import { useState } from "react";
import { useTodos } from "../context/TodoContext";
import { IoAdd } from "react-icons/io5";

const AddTodo = () => {
  const { addTodo } = useTodos();
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      addTodo(inputText);
      setInputText("");
    }
  };

  const isDisabled = !inputText.trim();

  return (
    <div>
      <h2 className="text-xl font-semibold text-amber-800 mb-4">
        Add New Task
      </h2>

      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-1 px-4 py-3 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 bg-white"
          maxLength={100}
        />

        <button
          type="submit"
          disabled={isDisabled}
          className="px-6 py-3 bg-yellow-500 text-amber-900 font-medium rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="flex items-center gap-2">
            <IoAdd className="w-5 h-5" />
            <span className="hidden sm:inline">Add</span>
          </div>
        </button>
      </form>

      {inputText.trim() && (
        <p className="mt-2 text-xs text-amber-600">Press Enter to add</p>
      )}
    </div>
  );
};

export default AddTodo;
