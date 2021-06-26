// window.addEventListener("load", function () {
//   console.clear();
// });

showNotes();

// add note function
let addNoteBtn = document.getElementById("addNoteBtn");
addNoteBtn.addEventListener("click", function (e) {
  let noteTitle = document.getElementById("noteTitleInput");
  let noteInput = document.getElementById("noteTextInput");
  let imp = document.getElementById("impSwitch");
  let notes = localStorage.getItem("notes");

  if (noteInput.value.length == 0) {
    let btn = document.getElementById("emptyNoteModalBtn");
    btn.click() = true;
  } else {
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }

    notesObj.push({
      title: noteTitle.value,
      note: noteInput.value,
      imp: imp.checked,
    });

    localStorage.setItem("notes", JSON.stringify(notesObj));

    noteTitle.value = "";
    noteInput.value = "";
    imp.checked = false;

    showNotes();
    darkMode();
  }
});

// function to show notes
function showNotes() {
  let note = localStorage.getItem("notes");
  let imp = localStorage.getItem("imp");
  let noteHTML = "";

  if (note == null) {
    notesObj = [];
    noteHTML = `<p class="text-center my-5">Nothing to show! Use "Add Note" section above to add notes.</p>`;
  } else {
    notesObj = JSON.parse(note);
    if (note.length == 2) {
      noteHTML = `<p class="text-center my-5">Nothing to show! Use "Add Note" section above to add notes.</p>`;
    }
  }
  notesObj.forEach(function (notesObj, index) {
    if (notesObj.title.length == 0) {
      notesObj.title = "Note no.: ";
      notesObj.title += index + 1;
    }

    if (notesObj.imp === true) {
      imp = "impNote";
    } else {
      imp = "";
    }
    noteHTML += `
            <div class="card m-3 ${imp}" style="width: 18rem;">
              <div class="card-body">
                  <sup class="fs-5 position-relative text-danger  text-uppercase fw-bold d-none">important</sup>
                  <h3 class="card-title text-uppercase ">${notesObj.title}</h3>
                  <hr>
                  <p class="card-text">${notesObj.note}</p>
                  <button onclick="deleteNote(this.id)" id="${index}" class="btn btn-primary">Delete Note</button>
              </div>
            </div>
          `;
  });

  document.getElementById("notes").innerHTML = noteHTML;
}

// function to delete notes
function deleteNote(index) {
  let note = localStorage.getItem("notes");
  if (note == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(note);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  localStorage;
  showNotes();
  darkMode();
}

function delAllNotes() {
  window.localStorage.removeItem("notes");
  showNotes();
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
