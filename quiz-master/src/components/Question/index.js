import Options from "../Options";

const Question = (props) => {
  const { question, options } = props.question;

  return (
    <div>
      <h4>{question}</h4>
      <Options options={options} dispatch={props.dispatch} />
    </div>
  );
};

export default Question;
