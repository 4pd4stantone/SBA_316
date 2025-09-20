
// 1. Use getElementById
const enterWeeksEl = document.getElementById("top-input-fields");

//3. Navigate between Elements using First and Last Child Elements.
//12. Use at least 2 Event Listeners associated with event handler functions.
enterWeeksEl.firstElementChild.addEventListener("click", setupWorkoutWeeks);
enterWeeksEl.lastElementChild.addEventListener("change", setupWorkoutSets);

let selectedWeeks = 0;
let weeks = 2;
let sets = 3;

buildWorkoutTable(weeks, sets);

function selectWeeks() {
  while (true) {
    let input = parseInt(
      window.prompt(
        "How many weeks will you do this workout? (Enter a number from 1-10):"
      )
    );

    if (!isNaN(input) && input >= 1 && input <= 10) {
      selectedWeeks = input - 1;
      return Math.max(2, 2 + (input - 1)); // Used Math.max to ensure value is always 2-10.
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
// 4. Iterate over a collection of elements to accomplish some task.
function buildWorkoutTable(weeks, sets) {
  const workoutTable = document.getElementById("workout-table");
  workoutTable.innerHTML = "";
  //5. Use the createElement.
  let table = document.createElement("table");

  for (let r = 0; r < weeks; r++) {
    const tr = document.createElement("tr");

    for (let s = 0; s < sets; s++) {
      if (s === 0 && r === 0) {
        const td = document.createElement("td");
        //6. Use the appendChild attribute.
        tr.appendChild(td);
        //8. Use textContent in response to user interaction.
        td.textContent = "Week";
        td.style.backgroundColor = "rgb(1, 70, 22)";
        td.style.color = "lightgreen";
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
        td.style.textAlign = "center";
        td.style.backgroundColor = "rgb(1, 70, 22)";
        td.style.color = "lightgreen";
      } else if (s === 1 && r > 0) {
        const td = document.createElement("td");
        tr.appendChild(td);
        let input = document.createElement("input");
        td.appendChild(input);
        input.setAttribute("type", "number");
        input.setAttribute("name", "number");
        input.setAttribute("placeholder", "000");
        input.setAttribute("min", "1");
        input.setAttribute("max", "999");
        input.setAttribute(
          "style",
          "width: 40px; text-align: center; color: darkgreen"
        );
        td.style.textAlign = "center";
        td.style.width = "40px";
        td.style.padding = "0 20px";
        td.style.backgroundColor = "rgb(189, 255, 189)";
      } else if (s > 1 && r === 0) {
        const td = document.createElement("td");
        tr.appendChild(td);
        td.style.fontWeight = "bold";
        td.textContent = `Set${s - 1}`;
        td.style.textDecoration = "underline";
      } else {
        const td = document.createElement("td");
        tr.appendChild(td);
        //11. modify attribute in response to user interaction
        td.classList.add("set-box");
        td.textContent = 0;
        td.style.textAlign = "center";
        td.addEventListener("click", incrementByOne);
        td.addEventListener("contextmenu", function (e) {
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

document.body.style.background = "linear-gradient(#c7ffe3,#004f53)";

//7. Use Document Fragment
const frag = document.createDocumentFragment();
let button = document.createElement("button");
frag.appendChild(button);
button.id = "add-exercise";
button.textContent = "Add Exercise";

// console.log(frag)
// 2. Use querySelector
const addExerDiv = document.querySelector("#add-exercise-div");
addExerDiv.appendChild(frag);

// adding an event listener that triggers the window.alert() in the add exercise button.

let exerciseBtn = document.getElementById("add-exercise");
console.log(exerciseBtn);
exerciseBtn.addEventListener("click", alertMessage);

function alertMessage() {
  return window.alert("Add exercise feature coming soon");
}

// Template!!! using cloneNode Methods: Review video form Sept. 10th, 2nd part 1:50 to see how to create a function to use template.

//13. BOM methods: window.open() and window.focus()
let logoDiv = document.getElementById("logoDiv");
// console.log(logoDiv)
logoDiv.addEventListener("click", newWindow);

let myWebsite;
function newWindow() {
  myWebsite = window.open(
    "https://VictorStanton.com", //website is not running at the moment.
    "Victor Stanton",
    "width=800, height=400, resizable=yes, scrollbars=yes location=yes"
  );
  myWebsite.focus();
}

const setBox = document.getElementsByClassName("set-box");

function incrementByOne(e) {
  let setBoxValue = Number(e.target.textContent);
  e.target.textContent = setBoxValue + 1;
  if (e.target.textContent > 0) {
    //9. Modify style in response to user interaction.
    e.target.style.backgroundColor = "green";
    e.target.style.color = "white";
  }
}

//right click to decrease as dblclick failed
function decreaseByOne(e) {
  let setBoxValue = Number(e.target.textContent);
  if (setBoxValue > 0) {
    e.target.textContent = setBoxValue - 1;
  }
  if (setBoxValue == 0) {
    e.target.style.backgroundColor = "white";
    e.target.style.color = "green";
  }
}

// 14&15. HTML & Javascript Form Validation

const form = document.getElementById("form");
const nameForm = form.elements["name"];
const emailForm = form.elements["email"];
const zipForm = form.elements["zip"];

form.addEventListener("submit", validateSignUp);

function validateSignUp(e) {

  //Prevent page reload
  e.preventDefault();

  const nameVal = validateName();
  if (nameVal === false) {
    return false;
  }

  const emailVal = validateEmail();
  if (emailVal === false) {
    return false;
  }

  const zipVal = validateZip();
  if (zipVal === false) {
    return false;
  }

  alert(`${nameVal}, thank you for signing up for email updates.`);

  form.reset();

  return true;
}

function validateName() {
  let nameVal = nameForm.value.trim();
  //name must includ only letters and a space for first&last name.
  const fullName = /^[A-Za-z]+ [A-Za-z]+$/
  if (!fullName.test(nameVal)) {
    alert("Please enter your first and last name");
    nameForm.focus();
    return false;
  }
  return nameVal
}

function validateEmail() {
  let emailVal = emailForm.value;

  const atpos = emailVal.indexOf("@");
  const dotpos = emailVal.lastIndexOf(".");

  if (atpos < 1) {
    alert("Email must include @ symbol and it can't be the first character");
    emailForm.focus();
    return false;
  }

  if (dotpos - atpos < 2) {
    alert(
      "Invalid structure: @.\nYou must include a domain name after the @ symbol."
    );
    emailForm.focus();
    return false;
  }
  return emailVal;
}

function validateZip() {
  let zipVal = zipForm.value.trim();
//zipcode must includ only 5 numbers, no letters
  if (zipVal.length !== 5 || isNaN(zipVal)) {
    alert("Zip code must only be 5 digits");
    zipForm.focus();
    return false;
  }

  return zipVal;
}
