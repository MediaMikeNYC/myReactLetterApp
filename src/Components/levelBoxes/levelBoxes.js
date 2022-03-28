import React from "react";
import "./levelBox.css";

const levelBoxes = props => {
  return (
    <div>
      <h3 id="levels">Preset letters</h3>

      <div id="centerBoxes">
        <div class="buttonBox2">
          <p>Full alphabet</p>
          <button onClick={props.clickStart} id="button2">
            Start
          </button>
        </div>

        <div class="buttonBox2">
          <p>Vowels: a, e, i, o, u, and y</p>
          <button onClick={props.click} id="button2">
            Start
          </button>
        </div>

        <div class="buttonBox3">
          <p>Level: g, j, i, e</p>
          <button onClick={props.click1} id="button3">
            Start
          </button>
        </div>

        <div class="buttonBox4">
          <p>Level: g and j</p>
          <button onClick={props.click2} id="button4">
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default levelBoxes;
