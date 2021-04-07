import React from "react";
import "../Styles/RecentDonations.css"

const RecentDonations = (props) => {
  const { name, amount, caption } = props; // object deconstructing
  return (
    <section>
      <h4>
        {name} Donated ${amount}
      </h4>
      <p>{caption}</p>
    </section>
  );
};

export default RecentDonations;
