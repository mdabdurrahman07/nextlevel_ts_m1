// nonPrimitive types :- array ,object, tuple

//* Array

// string array so string[]
let bazarList: string[] = ["eggs", "milk", "rice"];

// string and number array so (string | number)

let mixedBazarList = ["eggs", 12, "milk", 1, "rice", 10];

//* Tuple

// tuple:- array with a fixed number of elements, where each element has a strictly defined data type at a specific position

// here i can't give3 strings because it's a tuple
let couple: [string, string] = ["husband", "wife"];

let nameAndRoll: [string, number] = ["jamil", 20];

//* Object

const user: {
  //* here my organization value is my type, it's called literal value
  organization: "None";

  //  readonly organization: string; :- readonly is an access modifier
  firstName: string;
  //?   here we defined type "OPTIONAL"
  middleName?: string;
  lastName: string;
  isMarried: boolean;
} = {
  organization: "None",
  firstName: "MD Abdur Rahman",
  middleName: "Nur",
  lastName: "Jamil",
  isMarried: false,
};
