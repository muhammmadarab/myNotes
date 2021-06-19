showNotes();

// add note function
let addNoteBtn = document.getElementById("addNoteBtn");
addNoteBtn.addEventListener("click", function (e) {
  let noteInput = document.getElementById("noteTextInput");
  let note = localStorage.getItem("note");

  if (note == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(note);
  }

  notesObj.push(noteInput.value);
  localStorage.setItem("note", JSON.stringify(notesObj));
  noteInput.value = "";

  showNotes();
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
  notesObj.forEach(function (element, index) {
    noteHTML += `
      <div class="card m-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button onclick="deleteNote(this.id)" id="${index}" class="btn btn-primary">Delete Note</button>
        </div>
      </div>
    `;

    let notesContainer = document.getElementById("notes");

    if (notesObj.length != 0) {
      notesContainer.innerHTML = noteHTML;
    } else {
      notesContainer.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
  });
}

function deleteNote(index) {
  let note = localStorage.getItem("note");
  if (note == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(note);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("note", JSON.stringify(notesObj));
  showNotes();

  if (notesObj.length == 0) {
    location.reload();
  }
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
