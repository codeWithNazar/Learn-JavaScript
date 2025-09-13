# Step 8: Arrays in JavaScript

## 1️⃣ What is an Array?
An **array** is a list of values stored in a **single variable**. Arrays allow you to store **multiple items** together.

---

## 2️⃣ Creating Arrays
### Using Array Literal
```javascript
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "cherry"];
```

### Using Array Constructor
```javascript
let numbers = new Array(1, 2, 3, 4, 5);
```

---

## 3️⃣ Accessing Array Elements
- Arrays are **zero-indexed** (first element is index 0).
```javascript
console.log(fruits[0]); // apple
console.log(fruits[2]); // cherry
```

---

## 4️⃣ Common Array Methods
| Method       | Description                        | Example                        |
|-------------|------------------------------------|--------------------------------|
| push()      | Add element to the end              | fruits.push("orange")         |
| pop()       | Remove last element                 | fruits.pop()                   |
| shift()     | Remove first element                | fruits.shift()                 |
| unshift()   | Add element to the beginning       | fruits.unshift("mango")      |
| length      | Number of elements                 | fruits.length                  |
| indexOf()   | Find index of element               | fruits.indexOf("banana")     |

```javascript
fruits.push("orange");
console.log(fruits); // ["apple", "banana", "cherry", "orange"]
```

---

## 5️⃣ Array Iteration Methods
| Method      | Description                      | Example                         |
|------------|----------------------------------|---------------------------------|
| forEach()  | Executes a function for each item| numbers.forEach(n => console.log(n)) |
| map()      | Returns new array with modified values | let doubled = numbers.map(n => n * 2) |
| filter()   | Returns new array with elements that pass test | let evens = numbers.filter(n => n % 2 === 0) |
| reduce()   | Reduces array to a single value  | let sum = numbers.reduce((a, b) => a + b, 0) |

Example:
```javascript
let doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

let evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

let sum = numbers.reduce((total, n) => total + n, 0);
console.log(sum); // 15
```

---

## 6️⃣ Practice Exercise
1. Create an array of **your favorite fruits**.
2. Add a new fruit to the end and remove the first fruit.
3. Use a loop to print all fruits.
4. Use `.map()` to create a new array with fruit names in uppercase.
5. Use `.filter()` to create a new array with fruits containing the letter "a".

Example solution:
```javascript
let fruits = ["apple", "banana", "cherry"];
fruits.push("orange");
fruits.shift();

fruits.forEach(fruit => console.log(fruit));

let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits);

let aFruits = fruits.filter(fruit => fruit.includes("a"));
console.log(aFruits);
```

