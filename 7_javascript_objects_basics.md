# Step 7: Objects in JavaScript

## 1️⃣ What is an Object?
An **object** is a collection of **key-value pairs**. Objects allow you to store **related data and functionality** together.

---

## 2️⃣ Creating Objects
### Using Object Literal
```javascript
let person = {
  name: "WebApp",
  age: 25,
  city: "New York"
};
console.log(person.name); // WebApp
console.log(person.age);  // 25
```

### Using Object Constructor
```javascript
let person = new Object();
person.name = "WebApp";
person.age = 25;
console.log(person.name);
```

---

## 3️⃣ Accessing Object Properties
- **Dot Notation** → `object.key`
- **Bracket Notation** → `object["key"]`

```javascript
console.log(person.name);      // Dot notation
console.log(person["city"]); // Bracket notation
```

---

## 4️⃣ Adding, Updating, and Deleting Properties
```javascript
person.job = "Developer";      // Add
person.age = 26;                // Update
delete person.city;             // Delete
console.log(person);
```

---

## 5️⃣ Object Methods
Functions inside objects are called **methods**.
```javascript
let person = {
  name: "WebApp",
  age: 25,
  greet: function() {
    console.log(`Hello, I am ${this.name}`);
  }
};
person.greet(); // Hello, I am WebApp
```

### Shorthand Method (ES6)
```javascript
let person = {
  name: "WebApp",
  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
};
person.greet();
```

---

## 6️⃣ Object Destructuring (ES6)
```javascript
let person = { name: "WebApp", age: 25 };
let { name, age } = person;
console.log(name); // WebApp
console.log(age);  // 25
```

---

## 7️⃣ Practice Exercise
1. Create an object called `car` with `brand`, `model`, and `year`.
2. Access `brand` using dot notation and `model` using bracket notation.
3. Add a new property `color` and update the `year`.
4. Add a method `start` that prints "Car started".
5. Use destructuring to extract `brand` and `year` into variables.

Example solution:
```javascript
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
  start() {
    console.log("Car started");
  }
};

console.log(car.brand);
console.log(car["model"]);

car.color = "Red";
car.year = 2021;
car.start();

let { brand, year } = car;
console.log(brand, year);
```

