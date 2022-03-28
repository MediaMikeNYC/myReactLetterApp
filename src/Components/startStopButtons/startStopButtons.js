import React from "react";
import "./startStopButtons.css";

const startStop = props => {
  return (
    <div>
      <button onClick={props.clickStop} id="stopButton">
        Stop interval
      </button>
    </div>
  );
};

export default startStop;
