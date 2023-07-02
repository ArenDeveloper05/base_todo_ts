import { useState } from "react";
import "./Todo.scss";
import TodoBody from "./todo-body/TodoBody";
import TodoHead from "./todo-head/TodoHead";

interface ITodoProps {
  title: string;
}

export interface ITodo {
  id: number;
  title: string;
  isDone: boolean;
}

const Todo = ({ title }: ITodoProps) => {
  const [todos, setTodos] = useState<ITodo[]>([
    { id: 1, title: "Learn React", isDone: false },
  ]);
  return (
    <div className="todo">
      <h1>{title}</h1>
      <TodoHead setTodos={setTodos} />
      <TodoBody todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todo;
