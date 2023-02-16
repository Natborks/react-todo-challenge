import React, { ChangeEvent, KeyboardEvent } from "react";
import { v4 as uuid } from "uuid";

type TodoType = {
  id: string;
  todo: string;
};

function Todo() {
  const [todoList, setTodoList] = React.useState<TodoType[]>([]);
  const [todo, setTodo] = React.useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      const id = uuid();
      const newTodo = { id: id, todo };
      setTodoList([...todoList, newTodo]);
      setTodo("");
    }
  };
  return (
    <div>
      <ul>
        {todoList.map(({ id, todo }) => (
          <li key={id}>{todo}</li>
        ))}
      </ul>
      <input
        type="text"
        data-testid="todo-input"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default Todo;
