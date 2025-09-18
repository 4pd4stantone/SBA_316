const weeks = 2 + 9;
const sets = 3 + 9;

const workoutTable = document.getElementById("workout-table");
const table = document.createElement("table");


for (let r = 0; r < weeks; r++) {
  const tr = document.createElement("tr");
  
  for (let s = 0; s < sets; s++) {
    if (s === 0 && r ===0) {
    const td = document.createElement("td");
    tr.appendChild(td);
    td.textContent = "Week";
    td.style.backgroundColor = 'rgb(1, 70, 22)';
    td.style.color = 'lightgreen';
    td.style.fontWeight = "bold";
    } else if (s === 0) {
    const td = document.createElement("td");
    tr.appendChild(td);
    td.style.fontWeight = "bold";
    td.textContent = `Wk${r}`;
    td.style.textDecoration = "underline";
    } else if (s === 1 && r === 0) {
    const td = document.createElement("td");
    tr.appendChild(td);
    td.textContent = `Weight`;
    td.style.fontWeight = "bold";
    td.style.textAlign = 'center';
    td.style.backgroundColor = 'rgb(1, 70, 22)';
    td.style.color = "lightgreen";
    } else if (s === 1 && r > 0) {
    const td = document.createElement("td");
    tr.appendChild(td);
    let input = document.createElement('input');
    td.appendChild(input)
    input.setAttribute("type", "number");
    input.setAttribute("name", "number");
    input.setAttribute("placeholder", "000");
    input.setAttribute("min", "1");
    input.setAttribute("max", "999");
    input.setAttribute("style", "width: 40px; text-align: center; color: darkgreen");
    td.style.textAlign = "center";
    td.style.width = "40px";
    td.style.padding = "0 20px";
    td.style.backgroundColor = "rgb(189, 255, 189)"
    } else if (s > 1 && r === 0) {
    const td = document.createElement("td");
    tr.appendChild(td);
    td.style.fontWeight = "bold"
    td.textContent = `Set${s-1}`
    td.style.textDecoration = "underline";
    } else {
    const td = document.createElement("td");
    tr.appendChild(td);
    td.textContent = 0;
    td.style.textAlign = "center"
    }
    
  }

  table.appendChild(tr);


}


workoutTable.appendChild(table);

const lastRow = workoutTable.lastElementChild.lastElementChild;
// console.log(lastRow)

lastRow.lastElementChild.style.borderRadius = "0px 0px 10px 0px";

lastRow.firstElementChild.style.borderRadius = "0px 0px 0px 10px";

document.body.style.background = "linear-gradient(#c7ffe3,#004f53)"

const frag = document.createDocumentFragment()
let button = document.createElement('button')
frag.appendChild(button)
button.id = "add-exercise"
button.textContent = "Add Exercise";

console.log(frag)

const addExerDiv = document.querySelector('#add-exercise-div')
addExerDiv.appendChild(frag)

