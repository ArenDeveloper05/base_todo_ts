import React, { useEffect, useState } from "react";
import { ITodo } from "../Todo";

interface ITodoHeadProps {
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodoHead: React.FC<ITodoHeadProps> = ({ setTodos }) => {
  const [todo, setTodo] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.keyCode === 13) {
        addTodo();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  function addTodo() {
    if (todo.trim()) {
      setTodos((prev) => {
        const newTodo = {
          id: Math.random(),
          title: todo,
          isDone: false,
        };
        return [...prev, newTodo];
      });
    }
    setTodo("");
  }

  return (
    <div className="todo-head">
      <input
        type="text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button
        onClick={() => {
          addTodo();
        }}
      >
        Add todo
      </button>
    </div>
  );
};

export default TodoHead;
