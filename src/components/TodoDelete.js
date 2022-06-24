/* eslint-disable no-restricted-globals */

const TodoDelete = ({ id, todos, setTodos }) => {
  const handleDelete = (id) => {
    const todoDelete = confirm("Are you sure you want to delete this todo?");

    if (todoDelete) {
      setTodos(todos.filter((todo) => todo.id !== id));
      alert("Todo has been deleted.");
    } else {
      alert("Alright, just stay here okay");
    }
  };

  return (
    <button
      className="bg-rose-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-3"
      onClick={() => handleDelete(id)}
    >
      Delete
      {/* <TbTrash size={24} /> */}
    </button>
  );
};

export default TodoDelete;
