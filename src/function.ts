//* Function
// arrow function
// normal function
// callback  function

// ? Normal function

// * here i have defined the parameter types also defined the function type
function add(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(add(10, 2));

// ? Arrow function

const addArrow = (num1: number, num2: number): number => {
  return num1 + num2;
};

console.log(addArrow(10, 20));

// ! object => function => method

// when we create function in object its called a method

const poorUser = {
  name: "Jamil",
  balance: 0,
  addBalance(newValue: number): number {
    const totalBalance = this.balance + newValue;
    return totalBalance;
  },
};

poorUser.addBalance(1000);

//! callBack function

const arr: number[] = [1, 2, 3, 4];
const squareArr = arr.map((element: number): number => element * element);

console.log(squareArr);
