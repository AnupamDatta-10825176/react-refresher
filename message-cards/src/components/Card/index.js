import { useState } from "react";
import "./Card.css";

const Card = ({ fact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOnClick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <div className="item" onClick={handleOnClick}>
      {!isOpen && <h2>{fact.title}</h2>}
      {isOpen && <p>{fact.description}</p>}
    </div>
  );
};

export default Card;
