import React from "react";
import { ITodo } from "../Todo";

interface ITodoBodyProps {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodoBody: React.FC<ITodoBodyProps> = ({ todos, setTodos }) => {
  return (
    <div className="todo-body">
      {todos &&
        todos.map(({ id, title, isDone }) => {
          return (
            <div className="todo-body-item" key={id}>
              {!isDone ? (
                <h1>{title}</h1>
              ) : (
                <h1>
                  <del>{title}</del>
                </h1>
              )}
              <button
                onClick={() => {
                  setTodos((prev) => {
                    const mappedPrev = prev.map((item) => {
                      if (item.id === id) {
                        return {
                          ...item,
                          isDone: !item.isDone,
                        };
                      }
                      return item;
                    });

                    return [...mappedPrev];
                  });
                }}
              >
                {!isDone ? "To Do" : "Done"}
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default TodoBody;
