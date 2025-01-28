function counterReducer(state, action) {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + action.payload };
    case "dec":
      return { ...state, count: state.count - action.payload };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return { ...state, count: 0, step: 1 };
    default:
      throw new Error("Unknown action selected");
  }
}

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      console.log(action.payload);
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    default:
      throw new Error("Unknow error hit");
  }
}

export { counterReducer, reducer };
