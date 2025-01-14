const MovieDetails = ({ selectedID, handleClose }) => {
  return (
    <div>
      <button className="btn-back" onClick={handleClose}>
        &larr;
      </button>
      {selectedID}
    </div>
  );
};

export default MovieDetails;
