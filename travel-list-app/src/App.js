import { useState } from "react";
import Logo from "./components/Logo";
import PackingList from "./components/List";
import Form from "./components/Form";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const handleAddItem = (item) => {
    setItems((prevState) => [...prevState, item]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList items={items} />
      <Footer />
    </div>
  );
};

export default App;
