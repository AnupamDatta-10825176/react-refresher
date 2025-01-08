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

  const handleDeleteItem = (id) => {
    // Get the item from the item list
    const itemToDelete = items.find((item) => item.id === id);
    // show alert before removing
    alert(`Are you sure you want to delete Item: ${itemToDelete.description}`);

    // remove the item from list
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleToggleITem = (id) => {
    setItems((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleITem}
      />
      <Footer />
    </div>
  );
};

export default App;
