import React from "react";

const Todo = ({ title, content, id, onDeleteHandler }) => {
  console.log(id);

  return (
    <div>
      <h1>{title}</h1>
      <p>{content}</p>

      <button onClick={() => onDeleteHandler(id)}>삭제</button>
    </div>
  );
};

export default Todo;
