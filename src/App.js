import React, {useEffect, useState} from "react";
import "./App.css";
import Board from "./components/Board";

const images = [
  {text: 'cat', color: 'red'}, {text: 'dog', color: 'red'}, {text: 'rabbit', color: 'red'},
  {text: 'apple', color: 'green'}, {text: 'orange', color: 'green'}, {text: 'pear', color: 'green'},
  {text: 'one', color: 'blue'}, {text: 'two', color: 'blue'}, {text: 'three', color: 'blue'},
  {text: 'red', color: 'purple'}, {text: 'blue', color: 'purple'}, {text: 'green', color: 'purple'},
];

function App() {
  let [curScore, setScore] = useState(0);
  let [bestScore, setBestScore] = useState(0);
  let [lastCard, setLastCard] = useState([]);

  useEffect(() => {
    if(curScore > bestScore)
      setBestScore(curScore);
  }, [curScore, bestScore]);

  const clickedCard = (index) => {
    console.log("clicked card " + index);
    const bContainsIndex = lastCard.some((x) => x === index);
    if(!bContainsIndex) {
      setScore(curScore + 1);
      setLastCard((values) => [ ...values, index]);
    }
    else if(bContainsIndex) {
      setScore(0);
      setLastCard([]);
    }
  }

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <h2>Get points by clicking on images you haven't before</h2>
      <div id='score'>
        <h3>Current Score: {curScore}</h3>
        <h3>Best Score: {bestScore}</h3>
      </div>
      <Board images={images} clickedCard={clickedCard}/>
    </div>
  );
}

export default App;
