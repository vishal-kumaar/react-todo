import React from "react";

export default function Todo({ index, todo, updateStatus, removeTodo }) {
  return (
    <div className="todo">
      <p className="task">
        {index + 1}. {todo.task}
      </p>
      <p className="status">Status: {todo.status}</p>
      <button className="btn" onClick={() => updateStatus(index)}>
        Update Status
      </button>
      <button className="btn" onClick={() => removeTodo(index)}>
        Remove
      </button>
    </div>
  );
}
