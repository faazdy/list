const form = document.querySelector("form");
const input = document.querySelector("#cosa");
const deleteAll = document.querySelector('#removeAll');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newCosa = document.createElement("li");
  const lista = document.querySelector("ul");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const borrar = document.createElement("button");

  lista.appendChild(newCosa);
  newCosa.innerHTML = input.value;
  newCosa.appendChild(checkbox);
  newCosa.appendChild(borrar);
  borrar.innerText = "X";

  input.value = "";

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        newCosa.style.color = "green";
        newCosa.style.backgroundColor = 'rgb(217, 248, 171)'
        newCosa.style.textDecoration = "line-through";
      } else {
        newCosa.style.color = "";
        newCosa.style.backgroundColor = ''
        newCosa.style.textDecoration = "";
      }
  });
  borrar.addEventListener("click", () => {
    newCosa.remove();
  });
});

deleteAll.addEventListener('click', ()=>{
    const item = document.querySelectorAll('li')
    item.forEach(li => li.remove());
})

