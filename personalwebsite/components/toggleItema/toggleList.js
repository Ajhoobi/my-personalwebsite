import React from "react";

function toggleList() {
  ToggleButton();
  return (
    <div>
      <ul>
        <li>
          <botton>Home</botton>
        </li>
        <li>
          <botton>About</botton>
        </li>
        <li>
          <botton>Skill</botton>
        </li>
        <li>
          <botton>Portfolio</botton>
        </li>
        <li>
          <botton>blog</botton>
        </li>
      </ul>
    </div>
  );
}

export default toggleList;
