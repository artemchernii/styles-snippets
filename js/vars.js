const NAMES = ['Artem', 'Oleg', 'Oksana', 'Kolya', 'Olya', 'Natasha', 'Sveta'];
const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const mapPoly = (arr, cb) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i]));
  }
  return result;
};

export { NAMES, NUMBERS, mapPoly };
