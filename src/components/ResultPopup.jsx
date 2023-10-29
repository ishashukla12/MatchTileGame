import React from "react";
import "./ResultPopup.css"; // Import the CSS file
import { useLocation } from "react-router-dom";

const ResultPopup = ({ elapsedTime, score }) => {
  return (
    <div className="result-popup">
      <h2>Game Over</h2>
      <p>Elapsed Time: {elapsedTime} seconds</p>
      <p>Total Moves: {score}</p>
    </div>
  );
};

export default ResultPopup;
