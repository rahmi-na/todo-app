import TodoAction from "./TodoAction";

function TodoItem({ id, todos, content, status, setTodos, setEditTodo }) {
  const handleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, status: !todo.status };
        }
        return todo;
      })
    );
  };

  return (
    <li className="todo-list__item">
      <label htmlFor={id}>
        <input
          className=""
          type="checkbox"
          id={id}
          onClick={() => handleComplete(id)}
        />
        <p className={`${status ? "done" : ""}`}>{content}</p>
      </label>
      <TodoAction
        id={id}
        todos={todos}
        status={status}
        setTodos={setTodos}
        setEditTodo={setEditTodo}
      />
    </li>
  );
}

export default TodoItem;
