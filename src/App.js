import { Routes, Route } from "react-router-dom";
//routes
import Home from "./routes/Home";
import Detail from "./routes/Detail";

export default function App() {
  return (
    <>
      <h1
        style={{
          fontWeight: 800,
          fontSize: "30px",
          textAlign: "center",
          margin: "20px auto 15px",
        }}
      >
        REDUX PRACTICE
      </h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </>
  );
}
