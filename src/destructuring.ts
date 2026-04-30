// ? Destructuring

// * Array Destructuring
// * Object Destructuring

// * Object Destructuring
const user = {
  id: 123,
  name: {
    firstName: "MD Abdur Rahman",
    middleName: "Nur",
    lastName: "Jamil",
  },
  gender: "male",
  favColor: "Blue",
};

const {
  favColor,
  name: { middleName },
} = user;
console.log(middleName + favColor);
//! const {favColor: string} = user
// * never use  type while destructuring because it's becomes name alias

// * Array Destructuring

const friends = ["A", "B", "C"];
const [alu, pepe, shosha] = friends;
// const [, pepe, ] =friends this called skipping

console.log(pepe);
