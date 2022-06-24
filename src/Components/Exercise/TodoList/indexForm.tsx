import axios from "axios";
import React, { useState, FC, memo } from "react";

interface P {
  onChange: (e: string) => void;
}
const TodoForm: FC<P> = (props) => {
  const { onChange } = props;
  const [value, setValue] = useState("");

  function handleValueChange(e: any) {
    // update State
    setValue(e.target.value);
  }

  const handleKeydown = async (e: any) => {
    if (e.key === "Enter") {
      console.log("enter success:", value);
      try {
        const result = await axios.post(
          "https://62a00597a9866630f80561eb.mockapi.io/v1/todos",
          {
            name: value,
            isCompleted: false,
          }
        );
        console.log(result);
      } catch (error) {
        console.log(error);
      }
      //  reload prevent
      e.preventDefault();

      onChange(value);
      setValue("");
    }
  };
 
  return (
    <input
      className="todo-input"
      placeholder="Enter your todo ..."
      value={value}
      onKeyDown={handleKeydown}
      onChange={handleValueChange}
      // onSubmit={handleKeydown}
    />
  );
};

export default memo(TodoForm);
