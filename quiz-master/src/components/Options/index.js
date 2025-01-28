const Options = ({ options, dispatch }) => {
  const handleBtnClick = (optIndex) => {
    dispatch({ type: "newAnswer", payload: optIndex });
  };

  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          className="btn btn-option"
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
