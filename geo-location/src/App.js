import { useState } from "react";

import { useGeoLocation } from "./useGeolocation";

const styleButton = { cursor: "pointer" };

const App = () => {
  const {
    error,
    isLoading,
    position: { lat, lng },
    getPosition,
  } = useGeoLocation();

  const [countClicks, setCountClicks] = useState(0);

  function handleCountClicks() {
    setCountClicks((prevCount) => prevCount + 1);
    getPosition();
  }

  return (
    <div>
      <button
        style={styleButton}
        onClick={handleCountClicks}
        disabled={isLoading}
      >
        Get my Position
      </button>

      {isLoading && <p>Loading position...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && lat && lng && (
        <p>
          Your GPS position:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.openstreetmap.org/#map=16/${lat}/${lng}`}
          >
            {lat}, {lng}
          </a>
        </p>
      )}

      <p>You requested position {countClicks} times</p>
    </div>
  );
};

export default App;
