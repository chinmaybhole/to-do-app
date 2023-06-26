import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallTodos } from "../redux/actions";
import Todo from "./Todo";

function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(getallTodos())
      .then((response) => {
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching todos:", error);
        setLoading(false);
      });
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getallTodos());
  // }, [dispatch]);

  return (
    <article>
      {loading ? (
        <div className="ring">
          <span className="span"></span>
        </div> // Display the loader if isLoading is true
      ) : (
        <ul>
          {todos.map((todo, i) => (
            <Todo key={i} todo={todo} />
          ))}
        </ul>
      )}
    </article>
  );
}

export default Todos;
