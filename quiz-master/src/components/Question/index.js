import Options from "../Options";

const Question = (props) => {
  const { question } = props.question;
  return (
    <div>
      <h4>{question}</h4>
      <Options
        ques={props.question}
        dispatch={props.dispatch}
        answer={props.answer}
      />
    </div>
  );
};

export default Question;
