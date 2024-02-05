import { Route, Routes } from "react-router";
import "./App.css";
import Home from "../pages/Home/Home";
import DetailsFood from "../pages/DetailsFood/DetailsFood";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<DetailsFood />} />
      </Routes>
    </div>
  );
}

export default App;