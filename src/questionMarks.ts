// * Ternary Operator : Decision Making ( condition ? true : false)
// * ?? Nullish Coalescing operator
// * ?. Optional Chaining

// Ternary Operator

const biyaKorabo = (age: number): boolean => {
  const result = age >= 21 ? true : false;
  return result;
};

console.log(biyaKorabo(80));

// ??  Nullish Coalescing operator

const userTheme = undefined;
const selectedTheme = userTheme ?? "Light Theme";

const isauthenticated = null;
const result = isauthenticated ? isauthenticated : "You're guest";
console.log("ternary", result);
const resultNullish = isauthenticated ?? "You're guest";

console.log("nullish", result);

// optional Chaining
type Address = {
  city: string;
  town: string;
  postalCode?: number;
};
const user: Address = {
  city: "Dhaka",
  town: "Old Town",
};

const userOnePostalCode = user?.postalCode
console.log(userOnePostalCode)
