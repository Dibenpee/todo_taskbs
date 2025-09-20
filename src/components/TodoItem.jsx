import { useState } from "react";
import { useTodos } from "../context/TodoContext";
import { FaCheck, FaEdit, FaTrash, FaTimes } from "react-icons/fa";

const TodoItem = ({ todo }) => {
  const { toggleTodo, deleteTodo, editTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const saveEdit = () => {
    editTodo(todo.id, editText);
    setIsEditing(false);
  };

  const startEdit = () => {
    setIsEditing(true);
    setEditText(todo.text);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditText(todo.text);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") saveEdit();
    if (e.key === "Escape") cancelEdit();
  };

  return (
    <div
      className={`px-6 py-4 flex items-center gap-4 hover:bg-yellow-50 ${
        todo.completed ? "opacity-75" : ""
      }`}
    >

      <button
        onClick={() => toggleTodo(todo.id)}
        className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
          todo.completed
            ? "bg-yellow-500 border-yellow-500 text-amber-900"
            : "border-amber-300 hover:border-yellow-400"
        }`}
      >
        {todo.completed && <FaCheck className="w-3 h-3" />}
      </button>

      {/* edit */}
      <div className="flex-1">
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full px-3 py-2 border border-yellow-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-white"
            autoFocus
            maxLength={100}
          />
        ) : (
          <span
            className={`block ${
              todo.completed ? "line-through text-amber-500" : "text-amber-900"
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>

      {/* Action buttons */}
      <div className="flex gap-2">
        {isEditing ? (
          <>
            <button
              onClick={saveEdit}
              className="p-2 text-yellow-600 hover:bg-yellow-200 rounded"
              title="Save"
            >
              <FaCheck className="w-4 h-4" />
            </button>
            <button
              onClick={cancelEdit}
              className="p-2 text-amber-600 hover:bg-yellow-200 rounded"
              title="Cancel"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={startEdit}
              className="p-2 text-amber-600 hover:bg-yellow-200 rounded"
              title="Edit"
            >
              <FaEdit className="w-4 h-4" />
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="p-2 text-red-600 hover:bg-red-100 rounded"
              title="Delete"
            >
              <FaTrash className="w-4 h-4" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
