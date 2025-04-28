import Calendar from "react-calendar";
import DateTime from "./DateTime";
import Todo from "./Todo";
import "react-calendar/dist/Calendar.css";

function App() {
  return (
    <section
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        padding: "40px",
        gap: "80px",
        backgroundImage: "url('starry.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div style={{ flex: 0.8, maxWidth: "350px" }}>
        <DateTime />
      </div>
      <div
        style={{
          flex: 1,
          maxWidth: "450px",
          backgroundColor: "rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
          padding: "20px",
          borderRadius: "20px",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        }}
      >
        <Todo />
      </div>
      <div
        style={{
          flex: 0.8,
          maxWidth: "350px",
          backgroundColor: "rgba(255,255,255,0.9)",
          padding: "20px",
          borderRadius: "20px",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        }}
      >
        <Calendar />
      </div>
    </section>
  );
}

export default App;
