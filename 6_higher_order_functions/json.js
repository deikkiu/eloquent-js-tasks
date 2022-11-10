/* const getData = async () => {
  const data = [];

  const f1_data = await fetch(
    "https://netology-api-marvel.herokuapp.com/characters"
  ).then((res) => res.json());
  data.push(f1_data);

  console.log(data);
};

getData(); */

/* function map(array, transform) {
  var mapped = [];
  for (var i = 0; i < array.length; i++) mapped.push(transform(array[i]));
  return mapped;
}

var overNinety = ancestry.filter(function (person) {
  return person.died - person.born > 90;
});
console.log(
  map(overNinety, function (person) {
    return person.name;
  })
);

console.log(
  ancestry.reduce(function (min, cur) {
    if (cur.born < min.born) return cur;
    else return min;
  })
); */

const byName = {};
ancestry.forEach(function (person) {
  byName[person.name] = person;
});

function reduceAncestors(person, f, defaultValue) {
  function valueFor(person) {
    if (person == null) return defaultValue;
    else
      return f(
        person,
        valueFor(byName[person.mother]),
        valueFor(byName[person.father])
      );
  }
  return valueFor(person);
}

function sharedDNA(person, fromMother, fromFather) {
  if (person.name == "Pauwels van Haverbeke") return 1;
  else return (fromMother + fromFather) / 2;
}

var ph = byName["Philibert Haverbeke"];
console.log(reduceAncestors(ph, sharedDNA, 0) / 4);
