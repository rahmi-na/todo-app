import TodoDelete from "./TodoDelete";
import TodoEdit from "./TodoEdit";

const TodoAction = ({ id, todos, setTodos, setEditTodo, status }) => {
  return (
    <div className="todo-list__action">
      {status ? (
        ""
      ) : (
        <TodoEdit id={id} todos={todos} setEditTodo={setEditTodo} />
      )}
      <TodoDelete id={id} todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoAction;
