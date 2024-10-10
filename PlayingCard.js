import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import useFlip from "./hooks/useFlip"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {

  const flipCard = () => {
    const [isFacingUp, useFlip] = useFlip();
  };
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={useFlip}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
