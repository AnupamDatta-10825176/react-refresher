const Options = ({ ques, answer, dispatch }) => {
  const { options, correctOption } = ques;
  const hasAnswered = answer !== null;

  const handleBtnClick = (optIndex) => {
    dispatch({ type: "newAnswer", payload: optIndex });
  };

  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered ? (index === correctOption ? "correct" : "wrong") : ""
          }`}
          disabled={hasAnswered}
          key={option}
          onClick={() => handleBtnClick(index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
