import { useState } from "react";

const TextExpander = ({
  collapsedNumWords = 20,
  expandButtonText = "show more",
  collapseButtonText = "show less",
  buttonColor = "#007DB3",
  expanded = false,
  className,
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);

  const handleOnClick = () => {
    setIsExpanded(!isExpanded);
  };

  const diplayText = isExpanded
    ? children
    : `${children.substr(0, collapsedNumWords)}...`;

  const buttonStyle = {
    border: "none",
    backgroundColor: "inherit",
    fontSize: "16px",
    cursor: "pointer",
    color: [buttonColor],
    marginLeft: "2px",
  };

  return (
    <div className={className ? className : ""}>
      <span>{diplayText}</span>
      <button style={buttonStyle} onClick={handleOnClick}>
        {!isExpanded ? expandButtonText : collapseButtonText}
      </button>
    </div>
  );
};

export default TextExpander;
