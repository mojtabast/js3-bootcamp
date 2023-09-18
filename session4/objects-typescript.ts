// const name: string = "folan";
// const age: number = 100;

interface City {
  name: string;
  weather: number;
}

// const city: City = {
//   name: "Tehran",
//   weather: 10,
// };
// const city2 = {
//   name: "Zanjan",
//   weather: 20,
// };

// const city3: City = {
//   name: "mojtaba",
//   weather: 100,
// };

// interface Person {
//   name: string;
//   lastname: string;
//   age: number;
//   is_present: boolean;
// }

// const person: Person = {
//   name: "mojtaba",
//   lastname: "espari pour",
//   age: 100,
//   is_present: true,
// };

// const person2 = {
//   name: "folan",
//   lastname: "bisar",
//   age: 5,
//   is_present: true,
// };

// function greet(people: Person) {
//   console.log("Welcome, ", people.name);
// }

// greet(person);

// function my_city(city: City[]) {
//   console.log("Your city: ", city.name);
//   console.log("Weather: ", city.weather);
// }

// function hello(): City {
//   return {
//     name: "folan",
//     weather: 50,
//   };
// }

// my_city(city2);

// hello();

// const values: City[] = [];

// values.push(10);
// values.push("salam");
// values.push({
//   name: "folan",
//   age: 100,
//   is_present: true,
//   lastname: "bisar",
// });

interface Animal {
  name: string;
  goone: string;
  vazn: number;
}

// const sag: Animal = {
//   name: "sag",
//   goone: "folan",
//   vazn: 10,
// };

// const gorg: Animal = {
//   name: "gorg",
//   goone: "folan",
//   vazn: 20,
// };

// const ghoorbaghe: Animal = {
//   name: "ghoorbaghe",
//   goone: "bisar",
//   vazn: 30,
// };

// const khers: Animal = {
//   name: "khers",
//   goone: "chiz",
//   vazn: 40,
// };

function my_baghevahsh(animals: Animal[]) {
  console.log(animals);
}

const list = [
  {
    name: "sag",
    goone: "folan",
    vazn: 10,
  },
  {
    name: "gorg",
    goone: "folan",
    vazn: 20,
  },
  {
    name: "ghoorbaghe",
    goone: "bisar",
    vazn: 30,
  },
  {
    name: "khers",
    goone: "chiz",
    vazn: 40,
  },
];

my_baghevahsh(list);
