// operators
// spread operator ...array
// rest operator undo the spreading thing

// ? spread operator

// * Array

const friends = ["Limon", "Rahat", "Zunayed", "Onindo"];
const collegeFriends = ["Khaled", "Badol", "Hemal", "Towhid", "Sakib"];
const uniFriends = ["Rifat", "Prince", "Siam", "Tahmid", "Joy", "Mehedi"];

friends.push(...collegeFriends);
friends.push(...uniFriends);
console.log(friends);

// * Object

const user = { name: "Jamil", phoneNo: "0176666554" };
const otherInfo = {
  hobby: "outing",
  favColor: "Blue",
};

const userInfo = { ...user, ...otherInfo };

console.log(userInfo);

// ? Rest operator

const sendInvite = (...friends: string[]) => {
  friends.forEach((friend: String) =>
    console.log(`send invitation to : ${friend}`),
  );
};

sendInvite(
  "Limon",
  "Rahat",
  "Zunayed",
  "Onindo",
  "Khaled",
  "Badol",
  "Hemal",
  "Towhid",
  "Sakib",
  "Rifat",
  "Prince",
  "Siam",
  "Tahmid",
  "Joy",
  "Mehedi",
);
