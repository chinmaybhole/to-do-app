import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallTodos } from "../redux/actions";
import { useEffect } from "react";
import Todo from "./Todo";

function Todos() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getallTodos());
  });

  return (
    <article>
      <ul>
        {todos.map((todo, i) => {
          return <Todo key={i} todo={todo} />;
        })}
      </ul>
    </article>
  );
}

export default Todos;
