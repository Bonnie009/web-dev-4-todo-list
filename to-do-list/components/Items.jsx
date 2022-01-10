import React from "react";

export const Items = ({ list, replaceList }) => {
  const toggleItemCompletion = (itemId) => {
    const newList = list.map((item) =>
      item.itemId === itemId
        ? { ...item, isCompleted: !item.isCompleted }
        : item
    );
    replaceList(newList);
  };

  const updateItemTitle = (newTitle, itemId) => {
    const newList = list.map((item) =>
      item.itemId === itemId ? { ...item, title: newTitle } : item
    );
    replaceList(newList);
  };

  const removeItem = (itemId) => {
    const newList = list.filter((item) => item.itemId !== itemId);
    replaceList(newList);
  };

  return (
    <div>
      {list.map((item) => (
        <div key={item.itemId}>
          <input
            type="checkbox"
            checked={item.isCompleted}
            onChange={() => toggleItemCompletion(item.itemId)}
          />
          <input
            type="text"
            value={item.title}
            onChange={(e) => updateItemTitle(e.target.value, item.itemId)}
          />
          <span onClick={() => removeItem(item.itemId)}>X</span>
        </div>
      ))}
      {`${list.filter((item) => item.isCompleted).length}/${list.length}`}
    </div>
  );
};
