import React, { useState } from "react";
import Chalkboard from "../chalkboard/chalkboard";
import LevelBoxes from "../levelBoxes/levelBoxes";
import StartStop from "../startStopButtons/startStopButtons";
import Input from "../Inputs/Input";

const IntervalFunction = () => {
  var _timer;
  var vowels = "aeiouy".split("");

  // Function that starts the letter interval
  const startFunction = () => {
    var allLetters = "abcdefghijklmnopqrstuvwxyz".split("");
    getRandom(allLetters);
  };

  // Stops startFunction
  const stopButton = () => {
    clearTimeout(_timer);
    clearTimeout(getRandom);
  };

  // letter interval function
  function getRandom(letters) {
    var randomSet = letters[Math.floor(Math.random() * letters.length)];
    //console.log("set random", randomSet);
    document.getElementById("demo3").innerHTML = randomSet;
    _timer = setTimeout(() => getRandom(letters), 1000);
  }

  const vowelButton = () => {
    var vowels = "aeiouy".split("");
    getRandom(vowels);
  };

  const lettersGJIE = () => {
    var smallSet = "gjie".split("");
    getRandom(smallSet);
  };

  const lettersGJ = () => {
    var lastSet = "gj".split("");
    getRandom(lastSet);
  };
  //state function that renders user input on screen
  const [data, setData] = useState(null);
  function getData(e) {
    setData(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  //function that grabs user input and insert into function
  const inputValue = () => {
    var userSet = data.split("");
    getRandom(userSet);
  };

  return (
    <div>
      <h1>Letter Interval Application</h1>

      <Chalkboard />

      <h1>Your custom letter set:</h1>
      <h1>{data}</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={getData} className="inputField" type="text" placeholder="Enter letter you want to interval" />
        <button onClick={inputValue} value="Start">
          Start
        </button>
      </form>

      <StartStop clickStop={stopButton} />

      <LevelBoxes clickStart={startFunction} click={vowelButton} click1={lettersGJIE} click2={lettersGJ} />
    </div>
  );
};

export default IntervalFunction;
