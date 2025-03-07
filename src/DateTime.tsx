import { useEffect, useState } from "react";

const DateTime = () => {
  const [day, setDay] = useState("");

  useEffect(() => {
    const timeflow = setInterval(() => {
      const date = new Date().toLocaleString();
      setDay(date);
    }, 1000);
  }, [day]);

  return (
    <div
      style={{
        borderRadius: "20px",
        width: "100%",
        border: "none",
        backgroundColor: "inherit",
        display: "flex",
        color: "white",
        fontWeight: "700",
        fontSize: "22px",
        paddingRight: "100px",
      }}
    >
      {day}
    </div>
  );
};

export default DateTime;
