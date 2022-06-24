import { useState } from "react";
import { getInitialData } from "../data";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(getInitialData());
  const [editTodo, setEditTodo] = useState(null);

  return (
    <>
      <div className="todo-app bg-[#F9F8FD] rounded-2xl bg-slate-50 from-slate-600  ... ">
        <h1 className="heading-title pt-5 text-center ">TODO APP</h1>
        <TodoInput
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />

        {todos && todos.length ? (
          <TodoList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        ) : (
          <p className="text-message text-center">No Task</p>
        )}
      </div>
    </>
  );
};

export default TodoApp;
