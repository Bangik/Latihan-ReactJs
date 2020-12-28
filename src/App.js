import React from "react";
import "./styles.css";
import Paper from "./components/Paper";

export default function App() {
  return (
    <Paper>
      <section className="header">
        <button name="button" className="header-btn">
          Add
        </button>
        <h1 className="header-title">Todo List</h1>
        <button name="button" className="header-btn main-red-color">
          Clear
        </button>
      </section>
      <section className="add">
        <form className="add-form">
          <input type="text" name="" value="" className="add-input"></input>
          <button type="button" name="button" className="add-btn">
            Add
          </button>
        </form>
      </section>
      <section className="todos">
        <div className="todo">
          <span className="todo-text">todododo</span>
        </div>
        <div className="todo">
          <span className="todo-text">todododo</span>
        </div>
        <div className="todo">
          <span className="todo-text">todododo</span>
        </div>
        <div className="todo">
          <span className="todo-text">todododo</span>
        </div>
        <div className="todo">
          <span className="todo-text">todododo</span>
        </div>
        <div className="todo">
          <span className="todo-text">todododo</span>
        </div>
        <div className="todo">
          <span className="todo-text">todododo</span>
        </div>
        <div className="todo">
          <span className="todo-text">todododo</span>
        </div>
        <div className="todo">
          <span className="todo-text">todododo</span>
        </div>
      </section>
    </Paper>
  );
}
