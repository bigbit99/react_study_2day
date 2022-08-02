import React from "react";
import { useState } from 'react';
import Todo from './Todo';

const TodoList = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    const todo = { title: title, content: content, id: todoList.length + 1 };
    setTodoList([...todoList, todo]);
    //console.log(todo);
  };

  const onDeleteHandler = (targetId) => {
    //console.log(targetId);
    //console.log(typeof todoList);
    const newTodo = [...todoList].filter((todo) => todo.id !== targetId);
    //console.log("삭제하기!", newTodo);
    setTodoList(newTodo);
    //console.log(todoList);
  };

  return (
    <>
      <div>
        <p>제목</p>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <p>내용</p>
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={addTodo}>추가하기</button>
      </div>

      <div>
        {todoList.map((todo) => {
          //console.log(todoList)

          return (
            <Todo
              //key={todo.id}
              //key는 리액트에서 컴포넌트 라이프사이클 돌아갈때 가지고 가는 값

              id={todo.id}
              title={todo.title}
              content={todo.content}
              onDeleteHandler={onDeleteHandler}
            />
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
