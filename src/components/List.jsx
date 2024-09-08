import { useMemo } from "react";
import { useSelector } from "react-redux";
import TodoItems from "./TodoItems";

const List = () => {
  const filterTodos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  const search = useSelector((state) => state.search);

  const filteredTodos = useMemo(() => {
    return filterTodos.filter((todo) => {
      const matchFilter =
        (filter === "COMPLETED" && todo.completed) ||
        (filter === "INCOMPLETE" && !todo.completed) ||
        filter === "ALL";
      const matchSearch = todo.text.toLowerCase().includes(search.toLowerCase());
      return matchFilter && matchSearch;
    });
  }, [filterTodos, filter, search]);

  return (
    <ul>
      {/* Show message if no tasks match */}
      {filteredTodos.length === 0 ? (
        <li className="text-center text-gray-500">No task found</li>
      ) : (
        filteredTodos.map((todo, i) => <TodoItems key={i} todo={todo} index={i} />)
      )}
    </ul>
  );
};

export default List;
