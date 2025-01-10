import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// import App from "./App";
// import "./index.css";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Test = () => {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars.</p>
    </div>
  );
};

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={10} color="#fcc419" size={24} />
    <StarRating maxRating={5} color="red" size={56} />
    <StarRating messages={["Terrible", "Bad", "Okay", "Good", "Great"]} />
    <Test />
  </React.StrictMode>
);
