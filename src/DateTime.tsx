import { useEffect, useState } from "react";

const DateTime = () => {
  const [day, setDay] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const timeflow = setInterval(() => {
      const now = new Date();
      const dateStr = now.toLocaleDateString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
      });
      const timeStr = now.toLocaleTimeString("ko-KR");
      setDate(dateStr);
      setTime(timeStr);
      setDay(dateStr + " " + timeStr);
    }, 1000);

    return () => clearInterval(timeflow);
  }, []);

  return (
    <div
      style={{
        borderRadius: "20px",
        width: "100%",
        padding: "20px",
        backgroundColor: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(10px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "white",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
      }}
    >
      <div
        style={{
          fontSize: "28px",
          fontWeight: "700",
          marginBottom: "10px",
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
        }}
      >
        {date}
      </div>
      <div
        style={{
          fontSize: "42px",
          fontWeight: "800",
          textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          background: "linear-gradient(45deg, #ff6b6b, #5f3dc4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {time}
      </div>
    </div>
  );
};

export default DateTime;
