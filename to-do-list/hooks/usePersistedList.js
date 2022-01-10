import { useState, useEffect } from "react";

export const usePersistedList = (key) => {
  const [list, setList] = useState(() => []);

  useEffect(() => {
    try {
      const value = JSON.parse(window.localStorage[key]);
      setList(value);
    } catch (err) {
      window.localStorage[key] = JSON.stringify([]);
    }
  }, [key]);

  const addToList = (item) => {
    if (typeof window !== "undefined") {
      const value = JSON.parse(window.localStorage[key]);
      const newValue = [...value, item];
      window.localStorage[key] = JSON.stringify(newValue);
      setList((oldValue) => [...oldValue, item]);
    }
  };

  const replaceList = (value) => {
    if (typeof window !== "undefined") {
      window.localStorage[key] = JSON.stringify(value);
      setList(value);
    }
  };

  return { list, addToList, replaceList };
};
