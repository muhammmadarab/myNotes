showNotes();
darkMode();

// add note function
let addNoteBtn = document.getElementById("addNoteBtn");
addNoteBtn.addEventListener("click", function (e) {
  let noteInput = document.getElementById("noteTextInput");
  let noteTitle = document.getElementById("noteTitleInput");
  let note = localStorage.getItem("note");

  if (note == null) {
    notesObj = [];
  } else {
    // notesObj = '{ "title": "noteTitle.value", "noteV": "noteInput.value" };';
    notesObj = JSON.parse(note);
  }

  notesObj.push(noteTitle.value, noteInput.value);
  localStorage.setItem("note", JSON.stringify(notesObj));
  noteInput.value = "";
  noteTitle.value = "";

  showNotes();
  darkMode();
});

// function to show notes
function showNotes() {
  let note = localStorage.getItem("note");
  if (note == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(note);
  }

  let noteHTML = "";
  // notesObj.forEach(function (element, index) {
  //   noteHTML += `
  //     <div class="card m-3" style="width: 18rem;">
  //       <div class="card-body">
  //           <h5 class="card-title">Note ${note.title}</h5>
  //           <p class="card-text">${element}</p>
  //           <button onclick="deleteNote(this.id)" id="${index}" class="btn btn-primary">Delete Note</button>
  //       </div>
  //     </div>
  //   `;

  for (let i = 0; i < notesObj.length / 2; i++) {
    // notesObj.forEach(function (element, index) {
    noteHTML += `
          <div class="card m-3" style="width: 18rem;">
            <div class="card-body">
                <h3 class="card-title text-uppercase">${notesObj[i * 2]}</h3>
                <p class="card-text">${notesObj[i * 2 + 1]}</p>
                <button onclick="deleteNote(this.id)" id="${i}" class="btn btn-primary">Delete Note</button>
            </div>
          </div>
        `;
    document.getElementById("notes").innerHTML = noteHTML;
  }

  // });
}

// function to delete notes
function deleteNote(index) {
  let note = localStorage.getItem("note");
  if (note == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(note);
  }

  notesObj.splice(index, 2);
  localStorage.setItem("note", JSON.stringify(notesObj));
  showNotes();
  darkMode();

  if (notesObj.length == 0) {
    location.reload();
  }
}

function delAllNotes() {
  window.localStorage.removeItem("note");
  location.reload();
}

// searchbar function
// let searchBar = document.getElementById("searchInput");
// searchBar.addEventListener("input", function () {

//   let searchText = searchBar.value.toLowerCase();
//   let noteCards = document.getElementsByClassName("card");
//   Array.from(noteCards).forEach(function(element) {
//     let noteText = document.getElementsByTagName("p")[0].innerText.toLowerCase();
//     if (noteText.includes(searchText)) {
//       element.style.display = "block";
//     } else {
//       element.style.display = "none";
//     }
//   });
// });

// dark mode
function switchVal() {
  let darkSwitch = document.getElementById("darkModeSwitch").checked;
  let switchValue = darkSwitch.toString();
  localStorage.setItem("switch", switchValue);
  darkMode();
}

function darkMode() {
  let darkSwitchValue = localStorage.getItem("switch");
  let darkSwitch = document.getElementById("darkModeSwitch");

  if (darkSwitchValue == "true") {
    darkSwitch.checked = true;
    darkTheme();
  } else {
    lightTheme();
  }
}

function darkTheme() {
  // body
  document.querySelector("body").style.backgroundColor = "#121212";

  // nav
  document.querySelector("nav").classList.add("darkNav");

  // input section
  document
    .querySelector("#inputSection")
    .classList.add("darkContainer", "lowOpacity");
  document
    .querySelector("#noteTextInput")
    .classList.add("bg-dark", "text-light");

  document
    .querySelector("#noteTitleInput")
    .classList.add("bg-dark", "text-light");

  // card container
  document.querySelector("#noteContainer").classList.add("darkContainer");
  document
    .querySelector("#noteContainer h2")
    .classList.add("pt-3", "lowOpacity");
  let x = document.querySelectorAll("#notes .card");
  for (let i = 0; i < x.length; i++) {
    x[i].classList.add("bg-dark", "text-light", "darkCard");
  }
}

function lightTheme() {
  // body
  document.querySelector("body").style.backgroundColor = "#ffffff";

  // nav
  document.querySelector("nav").classList.remove("darkNav");

  // input section
  document
    .querySelector("#inputSection")
    .classList.remove("darkContainer", "lowOpacity");
  document
    .querySelector("#noteTextInput")
    .classList.remove("bg-dark", "text-light");

  document
    .querySelector("#noteTitleInput")
    .classList.remove("bg-dark", "text-light");

  // card container
  document.querySelector("#noteContainer").classList.remove("darkContainer");
  document
    .querySelector("#noteContainer h2")
    .classList.remove("pt-3", "lowOpacity");
  let x = document.querySelectorAll("#notes .card");
  for (let i = 0; i < x.length; i++) {
    x[i].classList.remove("bg-dark", "text-light", "darkCard");
  }
}
