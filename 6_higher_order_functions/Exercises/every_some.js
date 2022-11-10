// Напишите функции every и some, которые работают так же, как эти методы, только принимают массив в качестве аргумента.

const some = (array, predicate) => {
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) return true;
  }

  return false;
};

console.log(some([3, 3, 2, 3], isNaN));

const every = (array, predicate) => {
  for (let i = 0; i < array.length; i++) {
    if (!predicate(array[i])) return false;
  }

  return true;
};

console.log(every([NaN, NaN, NaN, NaN], isNaN));
