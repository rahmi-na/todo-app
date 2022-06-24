/* eslint-disable no-restricted-globals */
import { useEffect } from "react";

const TodoInput = ({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
}) => {
  const updateTodo = (content, id, status) => {
    const updateTodo = confirm("Are you sure you want to edit this todo?");

    if (updateTodo) {
      const newTodo = todos.map((todo) =>
        todo.id === id ? { content, id, status } : todo
      );
      setTodos(newTodo);
      setEditTodo("");
      alert("Todo has been edited.");
    } else {
      setEditTodo("");
      alert("Alright, just stay here okay");
    }
  };

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.content);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);

  const inputChangeHandler = (event) => {
    const inputValue = event.target.value;
    setInput(inputValue);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!editTodo) {
      const addTodo = confirm("Are you sure you want to add this todo?");

      if (addTodo) {
        setTodos([
          ...todos,
          {
            id: +new Date(),
            content: input,
            status: false,
          },
        ]);
        setInput("");
        alert("Todo has been added.");
      } else {
        alert("Alright, just stay here okay");
        setInput("");
      }
    } else {
      updateTodo(input, editTodo.id, editTodo.status);
    }
  };

  return (
    <div className="todo-list__input ">
      <form onSubmit={formSubmitHandler}>
        <div className="flex inputan">
          <div className=" w-full">
            <input
              type="text"
              className="  text-slate-600 ..."
              placeholder="Enter a Todo..."
              value={input}
              onChange={inputChangeHandler}
              required
            />
          </div>
          <div className=" ml-4 ">
            <button
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              {editTodo ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoInput;
