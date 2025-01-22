import { useEffect, useState } from "react";

/**
 * @description hook - get the item from localStorage and return them
 * along side the setter.
 * @param {*} initialState  iniital value of the state
 * @param {*} key   name that should be used to store data and
 * get data back from localStorage.
 * @returns all items with Key stored in localStorage
 */
export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(() => {
    // get items from localStorage
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    // set item of localStorage
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
