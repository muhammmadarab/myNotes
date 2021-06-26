darkMode();
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

  let y = document.querySelectorAll("div.impNote .card-body sup");
  for (let i = 0; i < y.length; i++) {
    y[i].classList.add("bg-dark");
  }

  // modal
  let modal = document.querySelector(".modal-content");
  modal.classList.add("bg-dark", "text-light");
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

  let y = document.querySelectorAll("div.impNote .card-body sup");
  for (let i = 0; i < y.length; i++) {
    y[i].classList.remove("bg-dark");
  }

  // modal
  let modal = document.querySelector(".modal-content");
  modal.classList.remove("bg-dark", "text-light");
}
