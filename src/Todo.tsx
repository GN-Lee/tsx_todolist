import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

export type TodoType = { contents: string; isDone: boolean };

const Todo = () => {
  const [todoValue, setTodoValue] = useState<TodoType[]>([
    { contents: "불금", isDone: false },
    { contents: "저녁메뉴", isDone: false },
    { contents: "뭐하지...?", isDone: false },
  ]);

  const [newTodo, setNewTodo] = useState<string>("");

  const addBtn = () => {
    if (!newTodo.trim()) return;

    setTodoValue((prev) => [
      ...prev,
      { contents: newTodo.trim(), isDone: false },
    ]);
    setNewTodo("");
  };

  // 체크박스 토글
  const checkTodo = (i: number) => {
    setTodoValue((prev) => {
      const newArr = [...prev];
      newArr[i].isDone = !newArr[i].isDone;
      return newArr;
    });
  };

  const removeTodo = (i: number) => {
    setTodoValue((prev) => prev.filter((_, index) => index !== i));
  };

  return (
    <div
      style={{
        borderRadius: "20px",
        width: "100%",
        border: "none",
        backgroundColor: "inherit",
        color: "black",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 style={{ fontSize: "30px", color: "white" }}>할 일 목록</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          width: "400px",
          height: "5%",
          padding: "10px",
          borderRadius: "15px",
          border: "1px solid white",
          marginBottom: "40px",
        }}
      >
        <input
          style={{
            border: "none",
            outline: "none",
            height: "100%",
            backgroundColor: "inherit",
            color: "white",
            fontSize: "25px",
          }}
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="To-Do-List"
        />
        <button className="#e5e7eb" onClick={addBtn} disabled={!newTodo.trim()}>
          추가
        </button>
      </div>

      {todoValue.map((v, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "10px",
            color: "white",
            fontSize: "25px",
          }}
        >
          <input
            onChange={() => checkTodo(i)}
            type="checkbox"
            checked={v.isDone}
          />
          <span style={{ textDecoration: v.isDone ? "line-through" : "none" }}>
            {v.contents}
          </span>
          <FaTrashAlt
            onClick={() => removeTodo(i)}
            style={{ cursor: "pointer", color: "gray" }}
          />
        </div>
      ))}
    </div>
  );
};

export default Todo;
