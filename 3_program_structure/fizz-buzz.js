const fizzBuzz = (n) => {
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) console.log(`${i} - FizzBuzz`);
    else if (i % 5 === 0) console.log(`${i} - Buzz`);
    else if (i % 3 === 0) console.log(`${i} - Fizz`);
    else console.log(i);
  }
};

console.log(fizzBuzz(10));
