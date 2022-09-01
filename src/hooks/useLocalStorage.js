import { useState } from 'react';

function useLocalStorage(key, initialvalue) {
  const [value, setValue] = useState(() => {
    const savedValue = JSON.parse(localStorage.getItem(key));
    if (savedValue == null) {
      localStorage.setItem(key, JSON.stringify(initialvalue));
      return initialvalue;
    }
    return savedValue;
  })

  const setLocalStorageValue = newValue => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue)
  }

  return [value, setLocalStorageValue]
};

exports.useLocalStorage = useLocalStorage;