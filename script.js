//your code here!

const list = document.getElementById("infi-list");

let itemCount = 0;

// Function to add items to the list
function addItems(num) {
  for (let i = 0; i < num; i++) {
    itemCount++;
    const li = document.createElement("li");
    li.textContent = `Item ${itemCount}`;
    list.appendChild(li);
  }
}

// Add 10 items initially
addItems(10);

// Infinite scroll logic
list.addEventListener("scroll", () => {
  // If user reaches bottom
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2); // add 2 new items
  }
});
