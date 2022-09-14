import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { clothing } from "../Clothes";
import Buttons from "./Buttons";

const Picker = () => {
  const [state, setState] = useState({ style: "casual" });

  const findImg = (itemType) => {
    const newItems = clothing.filter(
      (items) => items.type === itemType && items.dressCode === state.style
    );
    return newItems[Math.floor(newItems.length * Math.random())].imageUrl;
  };

  return (
    <div className='picker'>
      <h3 id='heading'>OUTFIT HELPER</h3>
      <h5 id='subHeading'>Fashion Styles / Dresscode</h5>
      <div className='buttons'>
        <Buttons setState={setState} style={"casual"} />
        <Buttons setState={setState} style={"sport"} />
        <Buttons setState={setState} style={"formal"} />
      </div>
      <div className='outfits'>
        <br />
        <a>Top</a>
        <img className='clothes' src={findImg("top")}></img>
        <br />
        <a>Bottom</a>
        <img className='clothes' src={findImg("bottom")}></img>
        <br />
        <a>Shoes</a>
        <img className='clothes' src={findImg("shoes")}></img>
        <br />
      </div>
    </div>
  );
};

export default Picker;
