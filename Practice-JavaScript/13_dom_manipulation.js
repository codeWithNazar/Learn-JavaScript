// Step 13: DOM Manipulation Practice
// Use with an HTML file

document.getElementById("myHeading").textContent = "New Heading";

let newItem = document.createElement("li");
newItem.textContent = "Item 3";
document.getElementById("myList").appendChild(newItem);

document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("output").textContent = "Button clicked!";
});

// Practice:
// 1. Select an element and change its style.
// 2. Add and remove items from a list.
// 3. Add a button click event that updates text.
