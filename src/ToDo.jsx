import React, { useState } from "react";
import BinIcon from "./assets/bin.svg?react";

const ToDo = () => {
  const [tasks, setTask] = useState([]);
  const handleAdd = () => {
    const newTask = document.getElementById("taskInput").value.trim();;
    const msg = document.getElementById("empty-msg");
    if (newTask === "") {
        msg.style.display = "block";
        return;
    }
    msg.style.display = "none";

    document.getElementById("taskInput").value = "";
    setTask((f) => [...f, newTask]);
  };

  const handleRemove = (index) => {
    setTask(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-app">
      <h2>TODO</h2>
      <div className="field">
        <input type="text" id="taskInput" placeholder="Enter a Task" required />
        <button onClick={handleAdd} className="add-btn">
          Add
        </button>
      </div>
      <div id="empty-msg">
        Please enter a value
      </div>
      <ul className="list">
        {tasks.map((task, index) => (
          <div className="list-desc">
            <li key={index}>{task}</li>
            <button onClick={() => handleRemove(index)} className="delete-btn">
              <BinIcon />
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
