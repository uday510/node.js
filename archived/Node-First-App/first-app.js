console.clear();
const promise = Promise.resolve("Done!");

promise.then((text) => console.log(text)).catch((err) => console.log(err));
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const copiedArray = [...array]; // spread operator (deep copy) -> used to pull elements/properties out of an array/object

array.push(11);

// console.log(copiedArray);

const toArray = (...args) => {
  // rest operator (shallow copy) -> used to merge multiple arguments into an array
  return args;
};

// console.log(toArray(1, 2, 3, 4));
const printName = ({ name, age }) => {
  console.log(name, age);
};

const person = {
  name: "Uday",
  age: 24,
};

const { name, age } = person;
// console.log(name, '->', age);
// printName(person);

const hobbies = ["Sports", "Cooking", "Data Science"];
const [hobby1, hobby2] = hobbies;

// console.log(hobby1, hobby2);

const fetchData = (callback) => {
  setTimeout(() => {
    callback("Done!");
  }, 1500);
};

setTimeout(() => {
  console.log("Timer is done!");
  fetchData((text) => {
    console.log(text);
  });
}, 2000);

console.log("Hello!");
console.log("Hi!");
