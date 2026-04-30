// Normal primitive types:- string, number, boolean, undefined, null
// TS special primitive types:- never, unknown, void

let userName: string = "Jamil";
// userName = 2 can't assign number because type safety
let userID: number = 123456;
// userID = "myID" can't assign string because type safety
// ts has implicitly/infer so it can know what type is it
let isAdmin = false;

// if i don't give any type then default is any type
let X;
