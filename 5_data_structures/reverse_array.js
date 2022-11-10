// У массивов есть метод reverse, меняющий порядок элементов в массиве на обратный.
// В качестве упражнения напишите две функции, reverseArray и reverseArrayInPlace.
// Первая получает массив как аргумент и выдаёт новый массив – с обратным порядком элементов.
// Вторая работает как оригинальный метод reverse – она меняет порядок элементов на обратный в том массиве,
// который был ей передан в качестве аргумента. Не используйте стандартный метод reverse.

function reverseArr(array) {
  return array.reverse();
}

console.log(reverseArr([2, 2, 3, 1, 9]));

function reverseArrayInPlace(array) {
  let resultArray = [];
  return (resultArray = array.map(array.pop, [...array]));
}

console.log(reverseArrayInPlace(["a", "b", "c", "d", "e"]));
