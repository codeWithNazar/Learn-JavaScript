# Step 3: Operators in JavaScript

## 1️⃣ What are Operators?
Operators are **special symbols** used to perform **operations on values or variables**. They are essential for calculations, comparisons, and logical decisions.

---

## 2️⃣ Types of Operators

### **1. Arithmetic Operators**
Used for **mathematical operations**.
| Operator | Description        | Example       |
|----------|------------------|---------------|
| +        | Addition          | 5 + 3 = 8     |
| -        | Subtraction       | 5 - 3 = 2     |
| *        | Multiplication    | 5 * 3 = 15    |
| /        | Division          | 6 / 3 = 2     |
| %        | Modulus (remainder)| 5 % 2 = 1    |
| **       | Exponentiation    | 2 ** 3 = 8    |

Example:
```javascript
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a % b); // 1
```

---

### **2. Assignment Operators**
Used to **assign or update values**.
| Operator | Example             | Meaning            |
|----------|-------------------|------------------|
| =        | x = 5              | Assign 5 to x     |
| +=       | x += 3             | x = x + 3         |
| -=       | x -= 2             | x = x - 2         |
| *=       | x *= 4             | x = x * 4         |
| /=       | x /= 2             | x = x / 2         |

Example:
```javascript
let x = 5;
x += 3; // x = 8
console.log(x);
```

---

### **3. Comparison Operators**
Used to **compare values**. Returns **true or false**.
| Operator | Example    | Meaning           |
|----------|-----------|------------------|
| ==       | 5 == '5'  | Equal (value)    |
| ===      | 5 === '5' | Equal (value + type)|
| !=       | 5 != 3    | Not equal        |
| !==      | 5 !== '5' | Not equal (value + type)|
| >        | 5 > 3     | Greater than     |
| <        | 3 < 5     | Less than        |
| >=       | 5 >= 5    | Greater or equal |
| <=       | 3 <= 5    | Less or equal    |

Example:
```javascript
console.log(5 == '5');  // true
console.log(5 === '5'); // false
```

---

### **4. Logical Operators**
Used for **logical operations**, often in conditions.
| Operator | Example       | Meaning                  |
|----------|--------------|--------------------------|
| &&       | true && false | AND                      |
| ||       | true || false | OR                       |
| !        | !true        | NOT                      |

Example:
```javascript
let isAdult = true;
let hasID = false;
console.log(isAdult && hasID); // false
console.log(isAdult || hasID); // true
console.log(!isAdult);          // false
```

---

### **5. Ternary Operator**
A **shortcut for if-else** statements.
```javascript
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Yes
```

---

## 3️⃣ Practice Exercise
1. Create two variables: `a` = 10, `b` = 5.
2. Use arithmetic operators to calculate: addition, subtraction, multiplication, division, and modulus.
3. Use comparison operators to check if `a` is greater than `b`, equal to `b`, or not equal.
4. Create a variable `isAdult` and `hasID`, then use logical operators to check if the person can enter a club.
5. Use a ternary operator to print "Allowed" or "Not Allowed" based on the age being >= 18.

Example solution:
```javascript
let a = 10;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

console.log(a > b);
console.log(a == b);
console.log(a != b);

let isAdult = true;
let hasID = false;
console.log(isAdult && hasID);
console.log(isAdult || hasID);

let age = 20;
let result = age >= 18 ? "Allowed" : "Not Allowed";
console.log(result);
```

