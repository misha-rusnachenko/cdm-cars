import { storageKey } from "../const/storage";

export const addToLocalStorage = payload => {
  const storagedData = getFromLocalStorage();
  localStorage.setItem(storageKey, JSON.stringify([...storagedData, payload]));
};

export const updateLocalStorageById = payload => {
  const storagedData = getFromLocalStorage();
  localStorage.setItem(
    storageKey,
    JSON.stringify(
      [...storagedData].map(item => {
        if (item.id === payload.id) item = payload;
        return item;
      })
    )
  );
};

export const removeFromLocalStorageById = payload => {
  const storagedData = getFromLocalStorage();
  localStorage.setItem(
    storageKey,
    JSON.stringify([...storagedData].filter(item => item.id !== payload))
  );
};

export const getFromLocalStorage = _ => {
  const storagedData = localStorage.getItem(storageKey);
  if (storagedData) {
    return JSON.parse(storagedData);
  } else {
    return [];
  }
};
