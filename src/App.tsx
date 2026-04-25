import { useState, useEffect } from "react";
import { ToDo } from "./pages/task/addTask.jsx";
import { List } from "./pages/task/list.jsx";

function App() {
  let [list, setList] = useState(
    JSON.parse(localStorage.getItem("List") || ['']),
  );

  useEffect(() => {
    localStorage.setItem("List", JSON.stringify(list));
  }, [list]);
  
  return (
    <>
      <h1>ToDo</h1>
      <ToDo list={list} setList={setList} />
      <List list={list} setList={setList} />
    </>
  );
}

export default App;
