import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Cards from "./components/Cards";
import Welcome from "./components/Welcome";
import { useState } from "react";
import ResultPopup from "./components/ResultPopup";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <h1>React Tile Matching Game</h1>
        <Routes>
          <Route
            path="/"
            element={
              isGameStarted ? <Cards /> : <Welcome toggle={toggleGamePlay} />
            }
          />
          <Route path="/results" element={<ResultPopup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
