import { useState } from "react";

type InputValue = {
  addList: (v: string) => void;
};

const Input = ({ addList }: InputValue) => {
  const [value, setValue] = useState<string>("");

  const addTodo = () => {
    addList(value);
    setValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") value.trim() && addTodo();
  };

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <input
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        type="text"
        value={value}
        placeholder="오늘의 할 일 입력!"
      />
      <button onClick={addTodo} disabled={!value.trim()}>
        추가하기
      </button>
    </div>
  );
};

export default Input;
