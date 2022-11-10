/* Оператор == сравнивает переменные объектов, проверяя, ссылаются ли они на один объект.
Но иногда полезно было бы сравнить объекты по содержимому.

Напишите функцию deepEqual, которая принимает два значения и возвращает true,
только если это два одинаковых значения или это объекты, свойства которых имеют одинаковые значения,
если их сравнивать рекурсивным вызовом deepEqual.

Чтобы узнать, когда сравнивать величины через ===, а когда – объекты по содержимому, используйте оператор typeof.
Если он выдаёт "object" для обеих величин, значит нужно делать глубокое сравнение. Примите во внимание одно дурацкое
исключение, существующее по историческим причинам: typeof null тоже возвращает "object". */

const obj = { here: { is: "an" }, object: 2 };

const deepEqual = (obj1, obj2) => {
  if (!(obj1 instanceof Object) || !(obj2 instanceof Object)) return false;

  if (obj1 instanceof Array || obj2 instanceof Array) return false;

  if (JSON.stringify(obj1) === JSON.stringify(obj2)) return true;
  else return false;
};

console.log(deepEqual(obj, obj));
