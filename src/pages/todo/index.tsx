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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
    setTodoError("");
  };

  const handleRadioClick = (todoKey: string) => {
    const copyHash = { ...todoList };
    copyHash[todoKey] = !copyHash[todoKey];
    setTodoList(copyHash);
  };

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <div className="flex justify-between mb-1 w-3/12">
        <input
          value={newTodo}
          className="text-black"
          onChange={(e) => handleInputChange(e)}
        />
        <button
          onClick={addTodo}
          className="bg-slate-700 hover:bg-slate-800 p-1"
        >
          Add Todo
        </button>
      </div>
      {todoError.length > 1 && (
        <div className="bg-red-700 w-3/12 flex p-2 mb-1">{todoError}</div>
      )}
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

const selectedTodoStyles = `bg-slate-700 line-through`;
const unselectedTodoStyles = `bg-slate-800`;

const todoComponent = (
  todoKey: string,
  todoValue: boolean,
  idx: number,
  handleRadioClick: (todoKey: string) => void
) => {
  return (
    <div className="flex">
      <input
        type="radio"
        checked={todoValue}
        readOnly
        onClick={() => handleRadioClick(todoKey)}
        className="p-2 m-2"
      />
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
