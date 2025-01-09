import Card from "../Card";
import { fact as facts } from "../../data";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="accordion">
      {facts.map((fact) => (
        <Card fact={fact} key={fact.title} />
      ))}
    </div>
  );
};

export default Cards;
