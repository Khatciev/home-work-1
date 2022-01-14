document.addEventListener("DOMContentLoaded", function () {
 const btn = document.querySelector(".todo-btn");
 const input = document.querySelector(".todo-input");
 const list = document.querySelector(".todo-list");
 const tasks = ["Нужно создать Todo на чистом JS :("];

 btn.addEventListener("click", handleAddClick);

 function handleAddClick() {
  if (input.value.trim()) {
   tasks.push(input.value);
   render();
  }
  input.value = "";
 }

 function handleClickRemove(index) {
  console.log(index)
  tasks.splice(index, 1);
  render();
 }

 function render() {
  list.innerHTML = "";

  tasks.forEach((text, index) => {
   const li = list.appendChild(document.createElement("li"));
   const btn = list.appendChild(document.createElement("button"));

   li.innerText = text;
   btn.setAttribute("index", `${index}`);
   btn.innerText = "X";
   btn.setAttribute("class", "delete-btn");

   btn.onclick = () => {
    handleClickRemove(btn.getAttribute("index"));
   };
  });
 }

 render();
});