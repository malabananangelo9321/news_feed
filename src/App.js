import { Routes, Route, BrowserRouter } from "react-router-dom";
import RoutePage from "./setup/routes/routes";
import "./App.css";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<RoutePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
