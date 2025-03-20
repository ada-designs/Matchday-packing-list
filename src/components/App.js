import { useState } from "react";
import Title from "./Title";
import Form from "./Form";
import List from "./List";
import Info from "./Info";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Title />
      <Form onAddItems={handleAddItems} />
      <List
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onDeleteItems={handleDeleteItems}
      />
      <Info items={items} />
    </div>
  );
}
