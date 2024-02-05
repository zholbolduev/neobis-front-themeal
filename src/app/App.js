import { Route, Routes } from "react-router";
import "./App.css";
import DetailsFoodPage from "../pages/DetailsFoodPage/DetailsFoodPage";
import HomePage from "../pages/HomePage/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<DetailsFoodPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
