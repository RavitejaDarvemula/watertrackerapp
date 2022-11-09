let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;
function increment() {
  count += 1;
  countEl.textContent = count;
}

function decrement() {
  count -= 1;
  countEl.innerText = count;
}
function save() {
  let constr = " " + count + " " + "-";
  saveEl.textContent += constr;
  console.log(count);
  countEl.textContent = 0;
  count = 0;
}
