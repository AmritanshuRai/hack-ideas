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
  const valueInStorage = localStorage.getItem(key);

  if (valueInStorage !== JSON.stringify(value)) {
    setValue(JSON.parse(valueInStorage));
  }
  return [value, setLocalStorageValue]

};

export default useLocalStorage;