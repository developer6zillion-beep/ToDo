import { useState, useEffect } from "react";
import { deleteItem } from "./list";
import { itemStatus } from "./list";
import { editItem } from "./list";
import { editedSaveBtn } from "./list";
import { checkItempriority } from "./list";

let today = new Date().toISOString().split("T")[0];


function ListItem({ item, list, setList }) {
  let [editId, setEditId] = useState(null);
  let [editText, setEditText] = useState("");
  let [date, setdate] = useState();
  // let [checked, setchecked] = useState();

  return (
    <li key={item.id}>
      <input
        type="checkbox"
        id={item.id}
        checked={item.checked}
        onChange={() => itemStatus(list, setList, item.id)}
      />

      {editId === item.id ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setdate(e.target.value)}
          />
          <button
            onClick={() =>
              editedSaveBtn(list, setList, editText, setEditId, date, item.id)
            }
          >
            Save
          </button>
        </>
      ) : (
        <>
          {item.title}
          <button
            id={item.id}
            onClick={() =>
              editItem(list, setEditId, setEditText, setdate, item.id)
            }
          >
            EDIT
          </button>
        </>
      )}
      <button id={item.id} onClick={() => deleteItem(list, setList, item.id)}>
        Delete
      </button>

      <select
        onChange={(e) => checkItempriority (item, e.target.value, list, setList)}
        id={item.id}
      >
        <option value={item.priority }>{item.priority }</option>
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </select>

      <p className={item.priority  == "high" ? "high-class" : "other-class"}></p>
      <p className={item.date < today ? "Overdue" : "due"}>
        {item.date < today ? "Overdue" : item.date}
      </p>
    </li>
  );
}

export { ListItem };
