import React from "react";
import { useState } from "react";
import { addNewTodo } from "../redux/actions";
import { useDispatch } from "react-redux";

function TodoForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onFormsubmit = (e) => {
    e.preventDefault();

    if ((text !== "") & (text !== " ")) {
      dispatch(addNewTodo(text));
    }
    setText("");
  };

  const onFormChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form className="form" onSubmit={onFormsubmit}>
      <input
        className="input"
        placeholder="Tasks to grow.."
        onChange={onFormChange}
        value={text}
      />
    </form>
  );
}

export default TodoForm;
