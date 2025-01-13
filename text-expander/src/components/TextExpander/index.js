import { useState } from "react";

const TextExpander = ({
  collapsedNumWords = 60,
  expandButtonText = "show more",
  collapseButtonText = "show less",
  buttonColor = "#007DB3",
  expanded = false,
  className,
  children,
}) => {
  const [isShown, setIsShown] = useState(false);

  const handleOnClick = () => {
    console.log(isShown);
    setIsShown(!isShown);
  };

  return (
    <div className={className}>
      {expanded ? (
        <span>{children}</span>
      ) : (
        <span>
          {children.substr(0, collapsedNumWords)}...&nbsp;
          {
            <span onClick={handleOnClick} style={"cursor: pointer"}>
              {expandButtonText}
            </span>
          }
        </span>
      )}
    </div>
  );
};

export default TextExpander;
