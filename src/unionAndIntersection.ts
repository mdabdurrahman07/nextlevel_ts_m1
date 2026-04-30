//  * Union

type UserRole = "user" | "admin" | "guest";

const getDashboard = (role: UserRole) => {
  if (role === "admin") {
    return "Admin Dashboard";
  } else if (role === "user") {
    return "User Dashboard";
  } else {
    return "Guest Dashboard";
  }
};

console.log(getDashboard("admin"));

// * intersection

type Employee = {
  id: number;
  name: string;
  phoneNo: string;
};

type Manager = {
  designation: string;
  teamSize: number;
};

// ? here "&" is the intersection
type EmployeeManager = Employee & Manager;

const mrJamal: EmployeeManager = {
  name: "Jamil",
  designation: "Manager",
  id: 1234,
  phoneNo: "091428989587",
  teamSize: 5,
};
console.log(mrJamal);
