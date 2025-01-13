const styleErrorMessage = {
  fontSize: "2.4rem",
  textAlign: "center",
  fontWeight: "bold",
  margin: "4.8rem",
};

const ErrorMessage = ({ message }) => {
  return (
    <div style={styleErrorMessage}>
      ⛔<span>{message}</span>
    </div>
  );
};

export default ErrorMessage;
