import React, { useState } from "react";
import Todo from "./Todo";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));

  const updateStatus = (index) => {
    const updateTodos = [...todos];
    if (updateTodos[index].status === "Pending") {
      updateTodos[index].status = "Completed";
    } else {
      updateTodos[index].status = "Pending";
    }

    localStorage.setItem("todos", JSON.stringify(updateTodos));
    setTodos(updateTodos);
  };

  const removeTodo = (index) => {
    const updateTodos = [...todos];
    updateTodos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(updateTodos));
    setTodos(updateTodos);
  };

  const handleForm = (event) => {
    event.preventDefault();
    if (!todos) {
      localStorage.setItem("todos", JSON.stringify([]));
    }
    const updateTodos = JSON.parse(localStorage.getItem("todos"));
    updateTodos.push({
      task: input,
      status: "Pending",
    });
    localStorage.setItem("todos", JSON.stringify(updateTodos));
    setTodos(updateTodos);
    setInput("");
  };

  return (
    <>
      <main>
        <form id="create-form" onSubmit={handleForm}>
          <input
            type="text"
            placeholder="Enter task..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button type="submit" id="submit">
            Add
          </button>
        </form>
      </main>
      <div id="todos">
        {todos &&
          todos.map((todo, index) => (
            <Todo
              index={index}
              todo={todo}
              updateStatus={updateStatus}
              removeTodo={removeTodo}
              key={index}
            />
          ))}
      </div>
    </>
  );
}

export default App;
