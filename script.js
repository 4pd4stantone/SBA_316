

// const fragZone = document.getElementById('coolFragZone')

// const fragment = document.createDocumentFragment();
// fragment.appendChild(document.createElement)


// adding weeks and sets to workout plan
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
    td.textContent = "Ex1";
    td.style.backgroundColor = 'darkgreen';
    td.style.color = 'darkgreen'
    } else if (s === 0) {
    const td = document.createElement("td");
    tr.appendChild(td);
    td.textContent = `Wk${r}`;
    } else if (s === 1 && r === 0) {
    const td = document.createElement("td");
    tr.appendChild(td);
    td.textContent = `Weight`;
    td.style.textAlign = 'center';
    td.style.backgroundColor = 'lightgreen';
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
    td.textContent = `Set${s-1}`
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

document.body.style.background = "linear-gradient(rgb(199, 255, 227), rgb(0, 79, 83))"

