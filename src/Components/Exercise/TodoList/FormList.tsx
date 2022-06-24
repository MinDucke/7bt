import React, {  FC } from "react";
import { TodoItem } from ".";
import { AiOutlineClose } from "react-icons/ai";

interface P {
  value: TodoItem;
  changeStatus: (id: string, status: boolean) => void;
}

const FormList: FC<P> = (props) => {
  const { value, changeStatus } = props;
  return (
    <div
      className={`list-todo ${
        value.status ? "todo-item-active" : "todo-item-inactive"
      }`}
      onClick={() => {
        changeStatus(value.id, !value.status);
      }}
    >
      <span>{value.title}</span>
        {/* <AiOutlineClose /> */}
      
    </div>
  );
};
export default FormList;
