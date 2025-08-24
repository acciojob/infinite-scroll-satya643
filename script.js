const list = document.getElementById("infi-list");

let itemCount = 0;

// Function to add items
function addItems(num) {
  for (let i = 0; i < num; i++) {
    itemCount++;
    const li = document.createElement("li");
    li.textContent = `Item ${itemCount}`;
    list.appendChild(li);
  }
}

// Add 10 default items
addItems(10);

// Detect scroll to bottom
list.addEventListener("scroll", () => {
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2); // add 2 more items
  }
});
