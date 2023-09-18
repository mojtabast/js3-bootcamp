// User file (1)

const my_name: string = "mostafa";
let a: number = 15;
let b: number = 10;

// File (2)
if (my_name === "mostafa") {
  a = a * 2;
  b = b * 2;
}

// In another file (3)

const price = a - b;
const discount = price * 0.2;

console.log(price);
console.log(discount);
