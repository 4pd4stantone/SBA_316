

// const fragZone = document.getElementById('coolFragZone')

// const fragment = document.createDocumentFragment();
// fragment.appendChild(document.createElement)


// adding weeks and sets to workout plan
const weeks = 5;
const sets = 5;

const workoutTable = document.getElementById("workout-table");
const table = document.createElement("table");

for (let r = 0; r < weeks; r++) {
  const tr = document.createElement("tr");
  for (let s = 0; s < sets; s++) {
    const td = document.createElement("td");
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

workoutTable.appendChild(table);
console.log(table)