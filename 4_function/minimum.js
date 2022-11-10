// Напишите функцию min, принимающую два аргумента, и возвращающую минимальный из них.

function min(val1, val2) {
  if (val1 < val2) {
    return val1;
  } else {
    return val2;
  }
}

console.log(min(1, 0));
