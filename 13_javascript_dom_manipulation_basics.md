# Step 13: DOM Manipulation in JavaScript

## 1️⃣ What is DOM?
The **DOM (Document Object Model)** represents the HTML structure of a page as a **tree of objects**. JavaScript can **access and modify these elements dynamically**.

---

## 2️⃣ Selecting Elements
### By ID
```javascript
let heading = document.getElementById("myHeading");
```

### By Class Name
```javascript
let items = document.getElementsByClassName("item");
```

### By Tag Name
```javascript
let paragraphs = document.getElementsByTagName("p");
```

### Using Query Selector
```javascript
let firstItem = document.querySelector(".item"); // first element with class 'item'
let allItems = document.querySelectorAll(".item"); // all elements with class 'item'
```

---

## 3️⃣ Modifying Content
### Change Text
```javascript
heading.textContent = "New Heading";
```

### Change HTML
```javascript
heading.innerHTML = "<span>New Heading</span>";
```

### Change Styles
```javascript
heading.style.color = "red";
heading.style.fontSize = "24px";
```

---

## 4️⃣ Adding & Removing Elements
### Create and Append
```javascript
let newItem = document.createElement("li");
newItem.textContent = "Item 4";
document.getElementById("myList").appendChild(newItem);
```

### Remove Element
```javascript
let item = document.getElementById("item1");
item.remove();
```

---

## 5️⃣ Event Handling with DOM
```javascript
let button = document.getElementById("btn");
button.addEventListener("click", () => {
  document.getElementById("output").textContent = "Button clicked!";
});
```

---

## 6️⃣ Practice Exercise
1. Select an element by ID and change its text.
2. Select multiple elements by class and change their style.
3. Create a new list item and append it to an existing list.
4. Remove an element from the DOM.
5. Add a button click event that updates content on the page.

Example solution:
```html
<h1 id="myHeading">Hello</h1>
<ul id="myList">
  <li id="item1" class="item">Item 1</li>
  <li class="item">Item 2</li>
</ul>
<button id="btn">Click Me</button>
<p id="output"></p>
<script>
document.getElementById("myHeading").textContent = "New Heading";
let items = document.getElementsByClassName("item");
for(let i=0; i<items.length; i++) {
  items[i].style.color = "blue";
}

let newItem = document.createElement("li");
newItem.textContent = "Item 3";
document.getElementById("myList").appendChild(newItem);
document.getElementById("item1").remove();

document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("output").textContent = "Button clicked!";
});
</script>
```

