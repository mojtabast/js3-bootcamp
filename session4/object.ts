// const country = {
//   name: "Iran",
//   capital: "Tehran",
//   weather: 20,
// };

// console.log("My country is");
// console.log(country.name);
// console.log(country.capital);
// console.log(country.weather);
// console.log(country.capital);

// const person = {
//   name: "folan",
//   city: "bisar",
//   age: 20,
// };

// const test = person.age * 2;
// console.log(test);

// if (person.age < 30) {
//   console.log("kamtar az 30");
// } else {
//   console.log("bishtar az 30");
// }

function bye(your_name: string) {
  console.log("Bye ", your_name);
}

const bomb = {
  name: "mojtaba",
  counter: 0,
  hello: function (your_name: string) {
    console.log("Hello ", your_name);
  },
  khodahafez: bye,
};

bomb.counter += 1;
bomb.counter += 1;
bomb.counter += 1;
bomb.counter += 1;

// call
bomb.hello("Fatemeh");
bomb.khodahafez("Fatemeh");

bye("Fatemeh");

console.log(bomb);
