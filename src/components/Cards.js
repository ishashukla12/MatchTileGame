import React, { useState } from "react";
import Card from "./Card";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Cards() {
  const [items, setItems] = useState(
    [
      { id: 1, img: "/img/html.png", stat: "" },
      { id: 1, img: "/img/html.png", stat: "" },
      { id: 2, img: "/img/css.png", stat: "" },
      { id: 2, img: "/img/css.png", stat: "" },
      { id: 3, img: "/img/js.png", stat: "" },
      { id: 3, img: "/img/js.png", stat: "" },
      { id: 4, img: "/img/scss.png", stat: "" },
      { id: 4, img: "/img/scss.png", stat: "" },
      { id: 5, img: "/img/react.png", stat: "" },
      { id: 5, img: "/img/react.png", stat: "" },
      { id: 6, img: "/img/vue.png", stat: "" },
      { id: 6, img: "/img/vue.png", stat: "" },
      { id: 7, img: "/img/angular.png", stat: "" },
      { id: 7, img: "/img/angular.png", stat: "" },
      { id: 8, img: "/img/nodejs.png", stat: "" },
      { id: 8, img: "/img/nodejs.png", stat: "" },
    ].sort(() => Math.random() - 0.5)
  );
  const [prev, setPrev] = useState(-1);
  const [score, setScore] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let intervalId;

    if (isGameStarted) {
      intervalId = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
      setElapsedTime(0);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isGameStarted]);

  function check(current) {
    if (items[current].id == items[prev].id) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
      setScore(score + 1);
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
      }, 1000);
    }
  }
  function handleGameEnd() {
    setIsGameStarted(false);

    navigate("/results", { state: { elapsedTime, score } });
  }

  function handleClick(id) {
    if (!isGameStarted) {
      setIsGameStarted(true); // Start the timer when the first card is clicked
    }

    if (prev === -1) {
      items[id].stat = "active";
      setItems([...items]);
      setPrev(id);
    } else {
      check(id);
      if (score + 1 === items.length / 2) {
        // Game ends when the score equals half the number of cards
        handleGameEnd();
      }
    }
  }

  return (
    <div className="container">
      {items.map((items, index) => (
        <Card key={index} items={items} id={index} handleClick={handleClick} />
      ))}
      <h1>Total Moves:{score}</h1>
      <div className="elapsed-time">{elapsedTime} seconds</div>
    </div>
  );
}

export default Cards;
