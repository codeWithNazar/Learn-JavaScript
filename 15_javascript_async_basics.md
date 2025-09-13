# Step 15: Asynchronous JavaScript (Promises & async/await)

## 1️⃣ What is Asynchronous JavaScript?
Asynchronous JavaScript allows **non-blocking code execution**. This means the program can perform other tasks while waiting for operations like **API calls or timers**.

---

## 2️⃣ Callbacks
A function passed as an argument to another function to be executed later.
```javascript
function greet(name) {
  console.log(`Hello, ${name}`);
}

function processUserInput(callback) {
  let name = "WebApp";
  callback(name);
}

processUserInput(greet); // Hello, WebApp
```
- Drawback: Can lead to **callback hell** if nested deeply.

---

## 3️⃣ Promises
A **Promise** represents the eventual **completion or failure** of an asynchronous operation.

### Creating a Promise
```javascript
let promise = new Promise((resolve, reject) => {
  let success = true;
  if(success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});
```

### Using `.then()` and `.catch()`
```javascript
promise
  .then(result => console.log(result))
  .catch(error => console.log(error));
```

---

## 4️⃣ Chaining Promises
```javascript
new Promise((resolve, reject) => {
  resolve(5);
})
.then(result => result * 2)
.then(result => result + 3)
.then(result => console.log(result)) // 13
.catch(error => console.log(error));
```

---

## 5️⃣ async / await (ES8+)
Simplifies working with Promises.
```javascript
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function asyncFunction() {
  console.log("Start");
  await wait(2000); // wait 2 seconds
  console.log("End after 2 seconds");
}

asyncFunction();
```

- `async` keyword marks a function as asynchronous.
- `await` pauses execution until the Promise resolves.

---

## 6️⃣ Error Handling in async/await
```javascript
async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch(error) {
    console.log('Error:', error);
  }
}

fetchData();
```

---

## 7️⃣ Practice Exercise
1. Create a Promise that resolves after 2 seconds with a message.
2. Use `.then()` to log the message.
3. Convert the Promise usage into `async/await`.
4. Handle any errors using `.catch()` and `try/catch`.

Example solution:
```javascript
function waitMessage() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Hello after 2 seconds"), 2000);
  });
}

// Using .then() and .catch()
waitMessage()
  .then(msg => console.log(msg))
  .catch(err => console.log(err));

// Using async/await
async function asyncMsg() {
  try {
    let msg = await waitMessage();
    console.log(msg);
  } catch(err) {
    console.log(err);
  }
}

asyncMsg();
```