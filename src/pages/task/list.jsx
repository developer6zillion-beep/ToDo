import { useState } from "react";
import { ListItem } from "./list_item";
import "./todo.css";

let today = new Date().toISOString().split("T")[0];

function List({ list, setList }) {
  let [editId, setEditId] = useState(null);
  let [editText, setEditText] = useState("");
  let [date, setdate] = useState();
  let [checked, setchecked] = useState();


  return (
    <ul>
      {list.map((item) => ( 
        <ListItem item={item} list={list} setList={setList} />
      ))}
    </ul>
  );
}

function itemStatus(list, setList, e) {
  let id = Number(e);

  console.log(e);
  let updatedData = list.map((item) =>
    item.id === id ? { ...item, checked: !item.checked } : item,
  );

  setList(updatedData);
  localStorage.setItem("List", JSON.stringify(updatedData));
}

function deleteItem(list, setList, e) {
  let id = Number(e);
  let updatedData = list.filter((item) => item.id !== id);

  setList(updatedData);
  localStorage.setItem("List", JSON.stringify(updatedData));
}

function editItem(list, setEditId, setEditText, setdate, e) {
  const id = Number(e);
  const item = list.find((i) => i.id === id);

  setEditId(id);
  setEditText(item.title);
  setdate(item.date);
}

function editedSaveBtn(list, setList, editText, setEditId, date, id) {
  const updatedData = list.map((item) =>
    item.id === id
      ? {
          ...item,
          title: editText,
          date: date,
        }
      : item,
  );

  if (editText.trim() !== "") {
    setList(updatedData);
    localStorage.setItem("List", JSON.stringify(updatedData));
  }

  setEditId(null);
}

function checkItempriority (e, value, list, setList) {
  let id = Number(e.id);
  let updatedData = list.map((item) =>
    item.id === id ? { ...item, priority : value } : item,
  );
  setList(updatedData);
  localStorage.setItem("List", JSON.stringify(updatedData));
}

export { deleteItem };
export { itemStatus };
export { editItem };
export { editedSaveBtn };
export { checkItempriority };
export { List };
