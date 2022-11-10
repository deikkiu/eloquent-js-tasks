// Напишите рекурсивную функцию isEven. Она должна принимать число и возвращать булевское значение.
// Потестируйте её на 50, 75 и -1. Почему она ведёт себя таким образом? Можно ли её как-то исправить?

function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}

console.log(isEven(-2));
