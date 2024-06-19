import "./style.css";

function add(num1: number, num2: number, visible: boolean, hello: string) {
  return hello;
}

console.log(add(1, 2, true, "hello world"));

interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Max",
  age: 10,
};

const users: {
  name: string;
  age: number;
}[] = [
  { name: "Tom", age: 30 },
  { name: "Jack", age: 25 },
  { name: "Alice", age: 32 },
];

const users2: User[] = [
  { name: "Tom", age: 30 },
  { name: "Jack", age: 25 },
  { name: "Alice", age: 32 },
];

let tupleType: [string, boolean];

tupleType = ["hello", true];

let tuple: [string, ...number[]];

tuple = ["hello", 42, 100, 200]; // OK

enum Role {
  ADMIN,
  USER,
}

const person = {
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log("Role: ", Role.ADMIN);
}

console.log(user);
console.log(users);
console.log(users2);
console.log(tupleType);
console.log(tuple);
