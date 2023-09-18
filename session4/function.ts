// function printMyName() {
//   let name: string = "mojtaba";

//   for (let i = 0; i < 10; i++) {
//     console.log("salam, ", name);
//   }
// }

// printMyName();
// console.log("---- -- - - - - - - -- -  -- - - ");
// printMyName();

// function hello(your_name: string, location: string) {
//   // const your_name: string = "Mostafa";
//   // const your_name: string = "Reza";

//   let welcome_message: string = "Hello, ";
//   welcome_message += your_name;
//   welcome_message += "From: " + location;

//   //   console.log("Hello, ", your_name);
//   //   console.log("From: ", location);

//   return welcome_message;
// }

// const mostafa = hello("Mostafa", "folan ja");
// const reza = hello("Reza", "bisar ja");

// console.log(mostafa);
// console.log(reza);

// area = 2pr
// (area / 2) + 2r

function area(radius: number): number {
  const p = 3.14;
  const result = 2 * p * radius;

  return result;
}

function half_area(radius: number): number {
  // (area / 2) + 2r

  let half = area(radius) / 2;
  let result = half + 2 * radius;

  return result;
}

// const a = area(10);
// const b = area(20);

// console.log(a);
// console.log(b);

// Dayere kamel
const my_area = area(10);
console.log(my_area);

// Nim Dayere
const another_half_area = half_area(30);
console.log(another_half_area);
