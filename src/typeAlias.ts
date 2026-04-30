// type alias

// ! Always use capital letter for type alias

type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  // union type
  gender: "male" | "female";
  contactNo: string;
  address: {
    division: string;
    city: string;
  };
};

const user1: User = {
  id: 1,
  name: {
    firstName: "MD",
    lastName: "Abdur",
  },
  gender: "male",
  address: { city: "Dhaka", division: "Dhaka" },
  contactNo: "016784678346",
};

const user2: User = {
  id: 2,
  name: {
    firstName: "MD",
    lastName: "Rahman",
  },
  gender: "male",
  address: { city: "Khulna", division: "BagherHaat" },
  contactNo: "016784678346",
};

// function with type alias
type AddFunc = (num1: number, num2: number) => number;

const add: AddFunc = (num1, num2) => num1 + num2;
