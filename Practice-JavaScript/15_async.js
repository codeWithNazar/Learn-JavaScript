// Step 15: Asynchronous JavaScript Practice

function waitMessage() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Hello after 2 seconds"), 2000);
  });
}

// Using then
waitMessage().then(msg => console.log(msg));

// Using async/await
async function showMessage() {
  let msg = await waitMessage();
  console.log(msg);
}
showMessage();

// Practice:
// 1. Create a promise that resolves with your name after 1s.
// 2. Log it using .then().
// 3. Rewrite using async/await.
