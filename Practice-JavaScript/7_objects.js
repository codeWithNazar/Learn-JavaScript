// Step 7: Objects Practice

let person = {
  name: "Alice",
  age: 25,
  city: "New York",
  greet: function() {
    return `Hello, my name is ${this.name}`;
  }
};

console.log(person.name);
console.log(person.greet());

// Adding property
person.country = "USA";
console.log(person);

// Practice:
// 1. Create an object for a car with properties (brand, model, year).
// 2. Add a method that returns car info.
// 3. Update one property and log again.
