import { useState } from "react";
import Logo from "./components/Logo";
import PackingList from "./components/List";
import Form from "./components/Form";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);

  /**
   * @description add a new item to the list
   * @param {object} item new item to be added
   */
  const handleAddItem = (item) => {
    setItems((prevState) => [...prevState, item]);
  };

  /**
   * @description delete an item from the list
   * @param {GUID} id id of the item to delete
   */
  const handleDeleteItem = (id) => {
    // Get the item from the item list
    const itemToDelete = items.find((item) => item.id === id);
    // show alert before removing
    alert(`Are you sure you want to delete Item: ${itemToDelete.description}`);

    // remove the item from list
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  /**
   * @description set packed status
   * @param {GUID} id Id of the item whose packed status want to change.
   */
  const handleToggleITem = (id) => {
    setItems((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  /**
   * @description remove all items from list
   */
  const handleClearList = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete all list item?"
    );
    if (confirmed) {
      setItems([]);
    }
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleITem}
        onClearList={handleClearList}
      />
      <Footer items={items} />
    </div>
  );
};

export default App;
