import { useState, useEffect } from "react";
import NAVBAR from "./navbar";
import Footer from "./footer";
import { FiEye } from "react-icons/fi";
import { BsCheckCircle, BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Mp = () => {
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState([]);

  // Load todos and completed state from localStorage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todo")) || [];
    const storedCompleted = JSON.parse(localStorage.getItem("completed")) || [];
    setTodos(storedTodos);
    setCompleted(
      storedCompleted.length
        ? storedCompleted
        : Array(storedTodos.length).fill(false)
    );
  }, []);

  // Save completed state in localStorage whenever changed
  useEffect(() => {
    localStorage.setItem("completed", JSON.stringify(completed));
  }, [completed]);

  const handleCheck = (index) => {
    const updated = [...completed];
    updated[index] = !updated[index];
    setCompleted(updated);
  };

  return (
    <>
      <NAVBAR />
      <div className="todo_container">
        <h3>YOUR-TODO</h3>

        {todos && todos.length > 0 ? (
          todos.map((el, index) => (
            <div
              className="single_todo"
              key={index}
              style={{
                backgroundColor: "#f5f5f5",
                borderRadius: "10px",
                padding: "10px 15px",
                margin: "10px 0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                transition: "0.3s",
              }}
            >
              <h2
                style={{
                  textDecoration: completed[index] ? "line-through" : "none",
                  fontWeight: "bold",
                  color: "#333",
                }}
              >
                {typeof el === "object" ? el.text || "Untitled" : el}
              </h2>

              <div style={{ display: "flex", alignItems: "center" }}>
                <Link to={`/view/${index}`}>
                  <FiEye
                    size={20}
                    style={{
                      color: "#474747",
                      marginRight: "15px",
                      cursor: "pointer",
                    }}
                  />
                </Link>

                <button
                  onClick={() => handleCheck(index)}
                  style={{
                    background: completed[index] ? "#00cc66" : "#e6e6e6",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "50%",
                    padding: "6px",
                    transition: "0.3s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {completed[index] ? (
                    <BsCheckCircleFill size={20} color="#fff" />
                  ) : (
                    <BsCheckCircle size={20} color="#474747" />
                  )}
                </button>
              </div>
            </div>
          ))
        ) : (
          <center>
            Nothing on your TO-DO <Link to={"/add"}>add some</Link>
          </center>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Mp;
