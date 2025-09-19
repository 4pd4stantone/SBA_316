
const enterWeeksEl = document.getElementById('top-input-fields');

enterWeeksEl.firstElementChild.addEventListener('click', setupWorkoutWeeks)
enterWeeksEl.lastElementChild.addEventListener('change', setupWorkoutSets)

let selectedWeeks = 0;
let weeks = 2;
let sets = 3;

buildWorkoutTable(weeks, sets)

function selectWeeks() {
  while (true) {
    let input = parseInt(window.prompt("How many weeks will you do this workout? (Enter a number from 1-10):"));
    
    if (!isNaN(input) && input >= 1 && input <= 10) {
      selectedWeeks = input - 1;
      return Math.max(2, 2 + (input -1))// Use Math.max to ensure value is always 2-10.
    } else {
      window.alert("Please enter a valid number between 1 and 10.");
    }
  }
}

function setupWorkoutSets() {
    sets = Number(enterWeeksEl.lastElementChild.value) + 2;
    buildWorkoutTable(weeks, sets);
}

function setupWorkoutWeeks() {
  weeks = selectWeeks();
  buildWorkoutTable(weeks, sets);
}

function buildWorkoutTable(weeks, sets) {
const workoutTable = document.getElementById("workout-table");
workoutTable.innerHTML = "";
let table = document.createElement("table");

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
    td.classList.add('set-box')
    td.textContent = 0;
    td.style.textAlign = "center";
    td.addEventListener("click", incrementByOne);
    td.addEventListener("contextmenu", function(e) {
      e.preventDefault();
      decreaseByOne(e);
    });
    // console.log(td)
    }
  }
  table.appendChild(tr);
}


workoutTable.appendChild(table);

const lastRow = workoutTable.lastElementChild.lastElementChild;
// console.log(lastRow)

lastRow.lastElementChild.style.borderRadius = "0px 0px 10px 0px";

lastRow.firstElementChild.style.borderRadius = "0px 0px 0px 10px";
}
buildWorkoutTable(weeks, sets);

document.body.style.background = "linear-gradient(#c7ffe3,#004f53)"

const frag = document.createDocumentFragment()
let button = document.createElement('button')
frag.appendChild(button)
button.id = "add-exercise";
button.textContent = "Add Exercise";

// console.log(frag)

const addExerDiv = document.querySelector('#add-exercise-div')
addExerDiv.appendChild(frag)

// Template!!! using cloneNode Methods: Review video form Sept. 10th, 2nd part 1:50 to see how to create a function to use template.

//BOM methods: window.open() and window.focus()
let logoDiv = document.getElementById('logoDiv')
// console.log(logoDiv)
logoDiv.addEventListener("click", newWindow);

let myWebsite; 
function newWindow() {
    myWebsite = window.open(
      "https://VictorStanton.com",//website if not running at the moment.
      "Victor Stanton",
      "width=800, height=400, resizable=yes, scrollbars=yes location=yes");
      myWebsite.focus();
}

const setBox = document.getElementsByClassName('set-box')

function incrementByOne(e) {
  let setBoxValue = Number(e.target.textContent);
  e.target.textContent = setBoxValue + 1;
  if (e.target.textContent > 0) {
    e.target.style.backgroundColor = 'green';
    e.target.style.color = 'white'
  }
}

//right click to decrease as dblclick failed
function decreaseByOne(e) {
  let setBoxValue = Number(e.target.textContent);
  if (setBoxValue > 0) {
  e.target.textContent = setBoxValue - 1;
  } 
  if (setBoxValue == 0){
    e.target.style.backgroundColor = 'white';
    e.target.style.color = 'green'
  }
}


