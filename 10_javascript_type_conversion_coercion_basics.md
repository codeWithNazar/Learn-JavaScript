# Step 10: Type Conversion & Coercion in JavaScript

## 1️⃣ What is Type Conversion?
Type conversion is when you **manually convert** a value from one type to another. This is also called **explicit conversion**.

### Examples of Explicit Conversion
```javascript
// String to Number
let str = "123";
let num = Number(str);
console.log(num + 1); // 124

// Number to String
let number = 456;
let text = String(number);
console.log(text + "7"); // "4567"

// Boolean Conversion
console.log(Boolean(0)); // false
console.log(Boolean(123)); // true
```

---

## 2️⃣ What is Type Coercion?
Type coercion is when JavaScript **automatically converts types**. This is called **implicit conversion**.

### Examples of Implicit Conversion
```javascript
console.log('5' + 2); // '52' → number converted to string
console.log('5' - 2); // 3   → string converted to number
console.log('5' * '2'); // 10  → both strings converted to numbers
console.log(true + 1); // 2   → true converted to 1
```

---

## 3️⃣ Rules of Type Coercion
1. **String + Any Type** → converts the other type to string.
2. **Number - String or Number * String** → converts string to number.
3. **Boolean in arithmetic** → true = 1, false = 0.

---

## 4️⃣ Checking Types
Use `typeof` to check the type after conversion.
```javascript
let value = '123';
console.log(typeof value); // string
value = Number(value);
console.log(typeof value); // number
```

---

## 5️⃣ Practice Exercise
1. Convert a string "100" into a number and add 50.
2. Convert a number 200 into a string and concatenate with "50".
3. Predict the output of '10' - 5 and '10' + 5.
4. Convert different values (0, 1, "", "hello") into boolean.

Example solution:
```javascript
let strNum = "100";
console.log(Number(strNum) + 50); // 150

let num = 200;
console.log(String(num) + "50"); // "20050"

console.log('10' - 5); // 5
console.log('10' + 5); // "105"

console.log(Boolean(0));    // false
console.log(Boolean(1));    // true
console.log(Boolean(""));  // false
console.log(Boolean("hello")); // true
```

