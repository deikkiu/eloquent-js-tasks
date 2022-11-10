// Напишите функцию arrayToList, которая строит такую структуру, получая в качестве аргумента [1, 2, 3],
// а также функцию listToArray, которая создаёт массив из списка. Также напишите вспомогательную функцию prepend,
// которая получает элемент и создаёт новый список, где этот элемент добавлен спереди к первоначальному списку,
// и функцию nth, которая в качестве аргументов принимает список и число, а возвращает элемент на заданной позиции в списке
// или же undefined в случае отсутствия такого элемента.

// Если ваша версия nth не рекурсивна, тогда напишите её рекурсивную версию.

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

console.log(arrayToList([10, 20, 30, 40]));

const listToArray = (list) => {
  let array = [];
  for (let i = list; i; i = i.rest) {
    array.push(i.value);
  }
  return array;
};

console.log(listToArray(arrayToList([10, 20, 30, 40])));

function prepend(value, list) {
  return { value, rest: list };
}
console.log(prepend(10, prepend(20, null)));

function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

console.log(nth(arrayToList([10, 20, 30]), 1));
