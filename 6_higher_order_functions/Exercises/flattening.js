/* Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив,
у которого есть все элементы входных массивов. */

const array = [[1, 2, 3], [4, 5], [6]];

const getArr = (array) => {
  return array.reduce((el, acc) => el.concat(acc));
};

console.log(getArr(array));
