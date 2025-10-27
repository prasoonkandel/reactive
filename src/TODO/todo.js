import { useRef } from "react";
import Footer from "../MP/footer";
import NAVBAR from "../MP/navbar";

import { useNavigate } from "react-router-dom";

const Td = () => {
  const tdtxt = useRef();
  const navigate = useNavigate();

  const addTODO = (e) => {
    e.preventDefault();
    const todostring = tdtxt.current.value;
    if (!todostring) {
      alert("Please enter a to-do item.");
      return;
    }
    const initialtodo = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];
    initialtodo.push(todostring);
    localStorage.setItem("todo", JSON.stringify(initialtodo));
    navigate("/");
  };

  const random_todo = () => {
    tdtxt.current.value = "loading...";
    fetch("https://dummyjson.com/todos/random")
      .then((res) => res.json())
      .then((data) => {
        tdtxt.current.value = data.todo;
      });
  };

  return (
    <>
      <NAVBAR />
      <div className="page todo_container todo_form">
        <h1>
          <div className="gang">ADD TO-DO:</div>
        </h1>
        <form onSubmit={addTODO}>
          <input type="text" ref={tdtxt} />
          <br />
          <button>SAVE</button>
        </form>

        <button onClick={random_todo}>Generate Random To-Do</button>
      </div>
      <Footer />
    </>
  );
};

export default Td;
