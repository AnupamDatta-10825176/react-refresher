import Logo from "./components/Logo";
import PackingList from "./components/List";
import Form from "./components/Form";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Footer />
    </div>
  );
};

export default App;
