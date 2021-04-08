import React from "react";
import "../Styles/Progress.css"

const Progress = () => {
  return (
    <section>
      <h2>Raised $441 of $1000</h2>
      <label>
        <progress value="441" max="1000">
          44.10%
        </progress>
      </label>
    </section>
  );
};

export default Progress;
