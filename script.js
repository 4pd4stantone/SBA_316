

// const fragZone = document.getElementById('coolFragZone')

// const fragment = document.createDocumentFragment();
// fragment.appendChild(document.createElement)


// adding weeks and sets to workout plan
const weeks = 2 + 5;
const sets = 3 + 4;

const workoutTable = document.getElementById("workout-table");
// const table = document.createElement("table");
let table = "<table>"

for (let r = 0; r < weeks; r++) {
  // const tr = document.createElement("tr");
  let tr = "<tr>"
  for (let s = 0; s < sets; s++) {
    // const td = document.createElement("td");
    // tr.appendChild(td);
    if (s === 0 && r ===0) {
      let td = `<td style="background-color: darkgreen; color: darkgreen">Ex1</td>`
      tr += td
    } else if (s === 0) {
      let td = `<td>Wk${r}</td>`
      tr += td
    } else if (s === 1 && r === 0) {
      let td = `<td style="text-align: center;background-color: lightgreen">Weight</td>`
      tr += td
    } else if (s === 1 && r > 0) {
      let td = `<td style="padding: 0 20px;background-color: rgb(189, 255, 189)"><input type="number" name="number" placeholder="000" min='1' max='999' style="width: 40px; text-align: center"></td>`
      tr += td
    } else if (s > 1 && r === 0) {
      let td = `<td>Set${s-1}</td>`
      tr += td
    } else {
      let td = `<td>00</td>`
      tr += td
    }
  }
  // table.appendChild(tr);
  tr += "</tr>"
  table += tr
}
table += "</table>"
workoutTable.innerHTML = table
// workoutTable.appendChild(table);
