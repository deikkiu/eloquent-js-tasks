// Напишите функцию range, принимающую два аргумента – начало и конец диапазона –
// и возвращающую массив, который содержит все числа из него, включая начальное и конечное.

// Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму.
// Запустите указанную выше инструкцию и убедитесь, что она возвращает 55.

// В качестве бонуса дополните функцию range, чтобы она могла принимать необязательный третий аргумент – шаг для построения массива.

// Function create a new array and add elements

const range = (value1, value2, value3 = 1) => {
  let myArr = [];

  if (value3 > 1) {
    for (let i = value1; i <= value2; i += value3) {
      myArr.push(i);
    }
  }

  if (value3 < 0) {
    for (let i = value1; i <= value2; i -= value3) {
      myArr.unshift(i);
    }
  }

  if (value3 === 1) {
    for (let i = value1; i <= value2; i++) {
      myArr.push(i);
    }
  }

  return myArr;
};

console.log(range(1, 10, -3));

// Function of sum all elements in array

function sum(arr) {
  const sumArr = arr.reduce((num1, num2) => num1 + num2);

  return sumArr;
}

console.log(sum(range(1, 10, -3)));
