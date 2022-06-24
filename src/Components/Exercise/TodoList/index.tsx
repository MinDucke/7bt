import { useState } from "react";
import FormList from "./FormList";
import TodoForm from "./indexForm";
import "./TodoApp.scss";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export interface TodoItem {
  title: string;
  id: string;
  status: boolean;
}

function TodoApp() {
  // const [value, setValue] = useState('')

  // todo list
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  // add todo item
  const addTodoItem = (title: string) => {
    const item: TodoItem = {
      title: title,
      id: uuidv4(),
      status: true,
    };
    setTodoList([...todoList, item]);
  };

  // change todo item status
  const changeTodoItemStatus = (id: string, status: boolean) => {
    const newTotoList: TodoItem[] = todoList.map((e) => {
      if (e.id === id)
        return {
          ...e,
          status: status,
        };
      else {
        return {
          ...e,
        };
      }
    });
    setTodoList(newTotoList);

    let newList = [];
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i].id === id) {
        newList.push({
          ...todoList[i],
          status: status,
        });
      } else {
        newList.push(todoList[i]);
      }
    }
  };
  let todos: any = [];

  const getTodoList = async () => {
    const todoss = await axios.get(
      "https://62a00597a9866630f80561eb.mockapi.io/v1/todos"
    );

    todos = [...todoss.data, ...todoList];
    console.log(todos);
  };

  getTodoList();
  return (
    <div className="TodoApp">
      <h1>Todos</h1>
      <h2>Let's start</h2>
      <TodoForm onChange={addTodoItem} />
      {todoList.map((e: any) => (
        <FormList 
          value={e}
          changeStatus={changeTodoItemStatus}
          key={e.id}
        ></FormList>
      ))}
      <h4>
        Left click to toggle completed
        <br />
        Right click to delete todo
      </h4>
    </div>
  );
}

export default TodoApp;
