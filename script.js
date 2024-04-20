//your code here!
document.addEventListener("DOMContentLoaded", function() {
  const list = document.getElementById("infi-list");

  // Function to add list items
  function addListItem() {
    const listItem = document.createElement("li");
    listItem.textContent = "List Item";
    list.appendChild(listItem);
  }

  // Add 10 list items by default
  for (let i = 0; i < 10; i++) {
    addListItem();
  }

