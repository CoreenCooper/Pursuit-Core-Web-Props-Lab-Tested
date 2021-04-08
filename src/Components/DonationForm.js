import React from "react";

const DonationForm = () => {
  return (
    <form>
      <label>Name</label>
      <input type="text" />

      <label for="name">Caption</label>
      <input id="name" type="text" />

      <label for="slider">Amount to Donate</label>
      <input id="slider" type="range" min="1" max="1000"/>
      <p>$5</p>
      <button type="submit">Donate</button>
    </form>
  );
};

export default DonationForm;
