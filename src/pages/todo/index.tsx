import React from "react";

interface TodoList {
  [key: string]: boolean;
}

export default function Todo() {
  const [todoList, setTodoList] = React.useState<TodoList>({});
  const [newTodo, setNewTodo] = React.useState("");
  const [todoError, setTodoError] = React.useState("");

  const addTodo = () => {
    if (todoList[newTodo] !== undefined) {
      setTodoError("Already in todos :)");
    } else {
      todoList[newTodo] = false;
      setNewTodo("");
    }
  };

  const handleRadioClick = () => {};

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <div className="flex justify-between mb-1 w-3/12">
        <input
          value={newTodo}
          className="text-black"
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          onClick={addTodo}
          className="bg-slate-700 hover:bg-slate-800 p-1"
        >
          Add Todo
        </button>
      </div>
      <div className="w-3/12">
        {Object.keys(todoList).length > 0 &&
          Object.keys(todoList).map((todoKey, idx) => {
            const todoValue = todoList[todoKey];
            return todoComponent(todoKey, todoValue, idx, handleRadioClick);
          })}
      </div>
    </div>
  );
}

const selectedTodoStyles = `bg-slate-700`;
const unselectedTodoStyles = `bg-slate-800`;

const todoComponent = (
  todoKey: string,
  todoValue: boolean,
  idx: number,
  handleRadioClick: () => void
) => {
  return (
    <div>
      <input type="radio" onClick={handleRadioClick} />
      <div
        className={`w-full mb-1 flex p-2 ${
          todoValue ? selectedTodoStyles : unselectedTodoStyles
        }`}
        key={`${todoKey}-${idx}`}
      >
        {todoKey}
      </div>
    </div>
  );
};
