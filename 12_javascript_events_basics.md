# Step 12: Events in JavaScript

## 1️⃣ What are Events?
Events are **actions that occur in the browser**, such as clicking a button, typing text, or loading a page. JavaScript can **respond to these events** using event listeners.

---

## 2️⃣ Common Types of Events
| Event           | Description                      |
|----------------|----------------------------------|
| click           | When an element is clicked      |
| mouseover       | When the mouse hovers over an element |
| keydown / keyup | When a key is pressed or released |
| load            | When the page or image loads     |
| submit          | When a form is submitted        |
| change          | When input value changes        |

---

## 3️⃣ Adding Event Listeners
### Using `onclick` (Inline)
```html
<button onclick="sayHello()">Click Me</button>
<script>
function sayHello() {
  alert("Hello!");
}
</script>
```

### Using `addEventListener` (Recommended)
```html
<button id="myBtn">Click Me</button>
<script>
let button = document.getElementById("myBtn");
button.addEventListener("click", function() {
  alert("Button clicked!");
});
</script>
```

---

## 4️⃣ Mouse Events
```javascript
let box = document.getElementById("box");
box.addEventListener("mouseover", () => console.log("Mouse over!"));
box.addEventListener("mouseout", () => console.log("Mouse out!"));
```

---

## 5️⃣ Keyboard Events
```javascript
document.addEventListener("keydown", (event) => {
  console.log(`Key pressed: ${event.key}`);
});
```

---

## 6️⃣ Form Events
```html
<form id="myForm">
  <input type="text" id="nameInput">
  <button type="submit">Submit</button>
</form>
<script>
let form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevents page reload
  console.log("Form submitted!");
});
</script>
```

---

## 7️⃣ Practice Exercise
1. Create a button and log a message when it is clicked.
2. Create a div and log messages when the mouse enters and leaves it.
3. Detect key presses and display the key pressed.
4. Create a form and prevent default submission, logging input values instead.

Example solution:
```html
<button id="clickBtn">Click Me</button>
<div id="hoverDiv" style="width:100px;height:100px;background-color:lightblue"></div>
<form id="myForm">
  <input type="text" id="nameInput">
  <button type="submit">Submit</button>
</form>
<script>
document.getElementById("clickBtn").addEventListener("click", () => console.log("Button clicked!"));
let div = document.getElementById("hoverDiv");
div.addEventListener("mouseover", () => console.log("Mouse entered"));
div.addEventListener("mouseout", () => console.log("Mouse left"));
document.addEventListener("keydown", (event) => console.log(`Key pressed: ${event.key}`));
let form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Input value:", document.getElementById("nameInput").value);
});
</script>
```

