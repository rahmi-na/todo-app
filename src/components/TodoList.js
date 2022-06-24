import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            id={todo.id}
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
            {...todo}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
