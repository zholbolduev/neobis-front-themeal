import { Route, Routes } from "react-router";
import "./App.css";
import Home from "../pages/Home/Home";
import DetailsFoodPage from "../pages/DetailsFoodPage/DetailsFoodPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<DetailsFoodPage />} />
      </Routes>
    </div>
  );
}

export default App;
