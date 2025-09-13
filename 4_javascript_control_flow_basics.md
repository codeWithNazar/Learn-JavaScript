# Step 4: Control Flow in JavaScript

## 1️⃣ What is Control Flow?
Control flow determines **the order in which code executes**. It allows programs to **make decisions** and **repeat tasks**.

---

## 2️⃣ Conditional Statements
Conditional statements **run code only if a certain condition is true**.

### **1. if Statement**
```javascript
let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
}
```

### **2. if...else Statement**
```javascript
let age = 16;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

### **3. else if Statement**
```javascript
let score = 75;
if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}
```

### **4. switch Statement**
```javascript
let day = 3;
switch(day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}
```

---

## 3️⃣ Loops
Loops **repeat a block of code multiple times**.

### **1. for Loop**
```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

### **2. while Loop**
```javascript
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
```

### **3. do...while Loop**
Executes the code **at least once**, then checks the condition.
```javascript
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);
```

### **4. for...of Loop**
Used for **arrays**.
```javascript
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}
```

### **5. for...in Loop**
Used for **objects**.
```javascript
let person = { name: "WebApp", age: 25 };
for (let key in person) {
  console.log(key + ": " + person[key]);
}
```

---

## 4️⃣ Practice Exercise
1. Write a program that checks if a number is **positive, negative, or zero** using if-else.
2. Write a program using a `for` loop to print numbers from 1 to 10.
3. Create an array of **colors** and use a `for...of` loop to print each color.
4. Create an object with **person details** and use a `for...in` loop to print key-value pairs.
5. Write a program using `switch` to print the **day of the week** based on a number (1-7).

Example solution:
```javascript
let number = 5;
if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}

let person = { name: "WebApp", age: 25 };
for (let key in person) {
  console.log(key + ": " + person[key]);
}

let day = 3;
switch(day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  default: console.log("Invalid day");
}
```

