const contacts = [
  {
    name: "melina",
    phone: "09123333333",
    gender: "female",
  },
];

function add(name, phone, gender) {
  const contact = {
    name: name,
    phone: phone,
    gender: gender,
  };

  contacts.push(contact);
}

add("fatemeh", "09111111", "female");
add("mojtaba", "09123034027", "male");

console.log(contacts);
