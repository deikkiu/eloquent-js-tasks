/*Напишите функцию countBs, которая принимает строку в качестве аргумента,
и возвращает количество символов “B”, содержащихся в строке.*/

/*Затем напишите функцию countChar, которая работает примерно как countBs,
только принимает второй параметр — символ, который мы будем искать в строке
(вместо того, чтобы просто считать количество символов “B”). Для этого переделайте функцию countBs.*/

const countBs = (str, symbol) => {
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i].includes(symbol)) {
      result++;
    }
  }

  return result;
};

function countChar(str) {
  return countBs(str, "S");
}

console.log(countBs("BBa", "a"));
console.log(countChar("BBaSSSSSSS"));
