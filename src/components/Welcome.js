import React, { useState } from "react";
import "./welcome.css";

const Welcome = ({ toggle }) => {
  const [name, setName] = useState("");

  return (
    <div className="login-container">
      <h1 className="large-heading">React Tiles</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="large-input"
          required
        />
      </div>
      <button className="blue-button large-button" onClick={toggle}>
        Play
      </button>
    </div>
  );
};

export default Welcome;
