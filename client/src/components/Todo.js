import React from "react";
import { toggleTodos, updateTodos, deleteTodos } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.data);

  const onFormSubmit = (e) => {
    e.preventDefault();

    setEditing((prevState) => !prevState);

    dispatch(updateTodos(todo._id, text));
  };

  return (
    <li
      className="task"
      onClick={() => dispatch(toggleTodos(todo._id))}
      style={{
        textDecoration: todo.done ? "line-through" : "",
        color: todo.done ? "black " : "rosybrown",
      }}
    >
      <span
        className="todotext"
        style={{
          display: editing ? "none" : "",
        }}
      >
        {todo.data}
      </span>

      <form
        onSubmit={onFormSubmit}
        style={{ display: editing ? "inline" : "none" }}
      >
        <input
          type="text"
          value={text}
          className="edit-todo"
          onChange={(e) => setText(e.target.value)}
        />
      </form>

      <span
        className="icon del"
        onClick={() => {
          console.log("Delete Click");
          dispatch(deleteTodos(todo._id));
        }}
      >
        {/* Added Font Awesome Icon  */}
        <i className="fas fa-trash" />
      </span>
      <span
        className="icon edit"
        onClick={() => {
          console.log(text);
          setEditing((prevState) => !prevState);
        }}
      >
        <i className="fas fa-pen" />
      </span>
    </li>
  );
};

export default Todo;
