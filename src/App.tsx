import Calendar from "react-calendar";
import DateTime from "./DateTime";
import Todo from "./Todo";

function App() {
  return (
    <section
      style={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        padding: "20px",
        backgroundImage: "url('starry.jpg')",
        backgroundSize: "cover",
      }}
    >
      <DateTime />
      <Todo />
      <Calendar />
    </section>
  );
}

export default App;
