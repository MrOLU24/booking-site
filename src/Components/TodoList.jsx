import React, { useState } from "react";

const TodoList = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    if(inputValue !== ""){
        setTodoItems([...todoItems, inputValue])
        setInputValue('')
        console.log(inputValue)
    }
  };

  return (
    <div>
      <form>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="Enter your todo List"
        />
        <button onClick={handleClick}>Add Todo</button>
      </form>
      {todoItems.map((item, index) =>(
        <li key={index}>{item}</li>
      ))}
    </div>
  );
};

export default TodoList;
