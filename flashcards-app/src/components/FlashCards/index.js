import FlashCard from "../FlashCard";
import "./FlashCards.css";

const FlashCards = () => {
  return (
    <div className="flashcards">
      <FlashCard num={1} />
      <FlashCard num={2} />
      <FlashCard num={3} />
      <FlashCard num={4} />
    </div>
  );
};

export default FlashCards;
