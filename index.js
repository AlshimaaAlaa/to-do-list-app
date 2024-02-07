let container = document.querySelector(".container");
let formInput = document.querySelector("#form__input");
let addBtn = document.querySelector(".form__AddBtn");
let list = document.querySelector(".list");
let searchInput = document.querySelector("#searchInput");
let searchBtn = document.querySelector(".searchBtn");

addBtn.addEventListener("click", () => {
  // Create list item
  let listItems = document.createElement("li");
  listItems.textContent = formInput.value;
  listItems.className = "list__item";
  list.appendChild(listItems);

  // Create delete button
  let deleteToDo = document.createElement("h1");
  deleteToDo.textContent = "\u00d7";
  deleteToDo.className = "deleteToDo";
  listItems.appendChild(deleteToDo);

  formInput.value = ""; // Clear input after adding to-do
  saveData();
});

list.addEventListener("click", (ele) => {
  if (ele.target.tagName === "LI") {
    ele.target.classList.toggle("checked");
  } else if (ele.target.tagName === "H1") {
    ele.target.parentElement.remove();
  }
  saveData();
});

searchBtn.addEventListener("click", () => {
  let searchValue = searchInput.value;
  let listItems = document.querySelectorAll(".list__item");
  listItems.forEach((item) => {
    let itemText = item.textContent;
    if (itemText.includes(searchValue)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
  searchInput.value = ""; // Clear search input value after search.
  saveData();
});

//local storage.
function saveData() {
  localStorage.setItem("data", list.innerHTML);
}
function showData() {
  list.innerHTML = localStorage.getItem("data");
}
showData();

