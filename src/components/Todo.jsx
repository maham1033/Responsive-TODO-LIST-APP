import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { addTodo, updateSearchTodo } from "../Redux/Action/actions";
import { BsSearch } from "react-icons/bs";
import FilterButton from "./FilterButton";
import List from "./List";

const Todo = () => {
  const dispatch = useDispatch();
  const [todoText, setTodoText] = useState("");  // Initialize with empty string
  const [searchText, setSearchText] = useState("");  // Initialize with empty string

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const saveTodo = () => {
    if (todoText.trim() !== "") {
      handleAddTodo(todoText.trim());
      setTodoText(""); // Clear the input after adding the todo
    }
  };

  const handleSearchTodo = (value) => {
    setSearchText(value);
    dispatch(updateSearchTodo(value)); // Dispatch search text to the store
  };

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-[#DEFEFF] rounded">
      <h2 className="mt-3 mb-6 text-2xl font-bold text-center text-[#4659af] uppercase">Todo List App</h2>

      {/* Input Button */}
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Enter Your Task"
          className="flex-grow p-2 border-b-2 border-gray-300 rounded focus:outline-none focus:border-blue-500"
          value={todoText} // Bind the value to todoText state
          onChange={(e) => setTodoText(e.target.value || "")} // Ensure the value is never undefined
        />
        <button className="ml-4 p-2 bg-[#D31561] text-white rounded hover:bg-[#DA6DAC] focus:outline-none" onClick={saveTodo}>
          <FaArrowAltCircleRight />
        </button>
      </div>

      {/* Filter Search */}
      <div className="flex items-center justify-between flex-wrap">
        <FilterButton />
        {/* Search */}
        <div className="flex items-center justify-end mt-4 sm:mt-0">
          <input
            type="text"
            placeholder="Search"
            value={searchText} // Bind the value to searchText state
            onChange={(e) => handleSearchTodo(e.target.value || "")} // Ensure the value is never undefined
            className="flex-grow rounded p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 sm:mr-4"
          />
          <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            <BsSearch />
          </button>
        </div>
      </div>

      <List />
    </div>
  );
};

export default Todo;
