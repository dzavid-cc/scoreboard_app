let scoreHome = document.getElementById("scoreHome");
let scoreGuest = document.getElementById("scoreGuest");
let resultHome = 0;
let resultGuest = 0;

function addOne() {
  resultHome += 1;
  scoreHome.textContent = resultHome;
}

function addTwo() {
  resultHome += 2;
  scoreHome.textContent = resultHome;
}

function addThree() {
  resultHome += 3;
  scoreHome.textContent = resultHome;
}

function addOneGuest() {
  resultGuest += 1;
  scoreGuest.textContent = resultGuest;
}

function addTwoGuest() {
  resultGuest += 2;
  scoreGuest.textContent = resultGuest;
}

function addThreeGuest() {
  resultGuest += 3;
  scoreGuest.textContent = resultGuest;
}

function resetScore() {
  resultHome = 0;
  scoreHome.textContent = 0;
  resultGuest = 0;
  scoreGuest.textContent = 0;
}
