import React from "react";
import { v4 as uuid } from "uuid";

export const ItemAdder = ({ addToList }) => {
  const addItem = () =>
    addToList({
      title: "",
      isCompleted: false,
      itemId: uuid(),
    });

  return <button onClick={addItem}>Add new to-do</button>;
};
