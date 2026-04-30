// nonPrimitive types :- array ,object, tuple

// string array so string[]
let bazarList: string[] = ["eggs", "milk", "rice"];

// string and number array so (string | number)

let mixedBazarList = ["eggs", 12, "milk", 1, "rice", 10];

// tuple:- array with a fixed number of elements, where each element has a strictly defined data type at a specific position

// here i can't give3 strings because it's a tuple
let couple: [string, string] = ["husband", "wife"];

let nameAndRoll: [string, number] = ["jamil", 20];
