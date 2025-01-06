import Logo from "./components/Logo";
import PackingList from "./components/List";
import Form from "./components/Form";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
    </div>
  );
};

export default App;
