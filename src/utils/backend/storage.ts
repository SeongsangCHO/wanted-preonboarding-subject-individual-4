export const getLocalStorage = (key: string) => {
  // key에 해당하는 localStorage 데이터를 받아와 parsing 후 return
  const localItem = localStorage.getItem(key);
  if (localItem) {
    return JSON.parse(localItem);
  }
  return null;
};

export const setLocalStorage = (key: string, value: any): void => {
  //key : value로 localStorage에 데이터를 set
  //어느 데이터든 들어올 수 있기에 any타입을 사용
  localStorage.setItem(key, JSON.stringify(value));
};
