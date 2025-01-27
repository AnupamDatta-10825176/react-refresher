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
      return state;
  }
}

export { counterReducer };
