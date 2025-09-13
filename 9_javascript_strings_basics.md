# Step 9: Strings & String Methods in JavaScript

## 1️⃣ What is a String?
A **string** is a sequence of characters, used to represent **text** in JavaScript. Strings are enclosed in **single quotes ('')**, **double quotes ("")**, or **backticks (``)** for template literals.

```javascript
let name = "WebApp";
let greeting = 'Hello';
let message = `Hi, ${name}!`;
console.log(message); // Hi, WebApp!
```

---

## 2️⃣ Common String Operations

### **Concatenation**
Combine strings using `+` or template literals.
```javascript
let firstName = "John";
let lastName = "Doe";
console.log(firstName + " " + lastName); // John Doe
console.log(`${firstName} ${lastName}`);  // John Doe
```

### **String Length**
```javascript
let text = "Hello";
console.log(text.length); // 5
```

### **Changing Case**
```javascript
let name = "WebApp";
console.log(name.toUpperCase()); // WEBAPP
console.log(name.toLowerCase()); // webapp
```

### **Accessing Characters**
```javascript
let text = "Hello";
console.log(text[0]); // H
console.log(text.charAt(1)); // e
```

### **Slicing Strings**
```javascript
let text = "Hello World";
console.log(text.slice(0, 5)); // Hello
console.log(text.substring(6)); // World
```

### **Splitting Strings**
```javascript
let text = "apple,banana,cherry";
let fruits = text.split(",");
console.log(fruits); // ["apple", "banana", "cherry"]
```

### **Replacing Text**
```javascript
let text = "I like cats";
let newText = text.replace("cats", "dogs");
console.log(newText); // I like dogs
```

### **Checking Substrings**
```javascript
let text = "Hello World";
console.log(text.includes("World")); // true
console.log(text.startsWith("Hello")); // true
console.log(text.endsWith("World"));   // true
```

---

## 3️⃣ Practice Exercise
1. Create a string with your **full name**.
2. Print the **length** of the string.
3. Convert the string to **uppercase** and **lowercase**.
4. Extract your **first name** using `.slice()` or `.substring()`.
5. Replace a word in a string and check if another word exists.

Example solution:
```javascript
let fullName = "John Doe";
console.log(fullName.length); // 8
console.log(fullName.toUpperCase()); // JOHN DOE
console.log(fullName.toLowerCase()); // john doe

let firstName = fullName.slice(0, 4);
console.log(firstName); // John

let newName = fullName.replace("Doe", "Smith");
console.log(newName); // John Smith
console.log(newName.includes("John")); // true
```

