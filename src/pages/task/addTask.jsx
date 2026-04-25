import { useState } from "react";
import "./todo.css";

function ToDo({ list, setList }) {
  const [title, setTitle] = useState("");
  const [dateValue, setInput] = useState("");

  return (
    <>
      <div className="addTask">
        <input
          type="text"
          placeholder="Add your Task here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="date"
          value={dateValue}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          onClick={() =>
            AddTask(title, dateValue, setTitle, setInput, setList, list)
          }
        >
          Add
        </button>

        <button onClick={() => SortBypriority(list, setList)}>Sort Task</button>
        <p>{err}</p>
      </div>
    </>
  );
}
let err = "";

function AddTask(title, dateValue, setTitle, setInput, setList, list) {
  if (title.trim() === "" || dateValue.trim() === "") {
    alert('PLEASE Fill inputs feilds')
    return;
  }

  let newItem = {
    id: Date.now(),
    title: title,
    checked: false,
    priority: "low",
    date: dateValue,
  };

  let updatedData = [...list, newItem];

  setList(updatedData);
  localStorage.setItem("List", JSON.stringify(updatedData));

  setTitle("");
  setInput("");
}

function SortBypriority(list, setList) {
  let priorityOrder = { high: 1, medium: 2, low: 3 };

  let updatedData = [...list].sort(
    (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority],
  );

  setList(updatedData);
  localStorage.setItem("List", JSON.stringify(updatedData));
}

export { SortBypriority };
export { AddTask };
export { ToDo };
