import React from "react"; 
import Heading from "../atoms/Heading";
import Button from "../atoms/Button.tsx";

function Card() {
  return (
    <div className="border p-4 rounded space-y-2">
      <Heading text="Atomic Design" />
      <p>This card is a molecule.</p>
      <Button label="Learn More" />
    </div>
  );
}

export default Card;