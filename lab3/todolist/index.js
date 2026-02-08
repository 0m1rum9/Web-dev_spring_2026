const list = document.getElementById("todo");
const input = document.getElementById("input");
const btn = document.getElementById("add");

btn.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const deletebtn = document.createElement("button");
  deletebtn.textContent = "delete";

  const span = document.createElement("span");
  span.textContent = text;

  deletebtn.addEventListener("click", () => {
    li.remove();
  });

  checkbox.addEventListener("change", () => {
    span.style.textDecoration = checkbox.checked ? "line-through" : "none";
  });

  li.append(span);

  li.append(checkbox);
  li.append(deletebtn);

  list.append(li);

  input.value = "";
});

