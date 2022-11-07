window.onload = function() {
  btn0.addEventListener('click', showQuestion1);
  btn1.addEventListener('click', showQuestion2);
  btn2.addEventListener('click', showQuestion3);
  btn3.addEventListener('click', showQuestion4);
  btn4.addEventListener('click', showQuestion5);
  btn5.addEventListener('click', showResults);
}

function showQuestion1(event) {
  event.preventDefault();
  nextPage("intro", "question1");
}

function showQuestion2(event) {
  event.preventDefault();
  nextPage("question1", "question2");
}

function showQuestion3(event) {
  event.preventDefault();
  nextPage("question2", "question3");
}


function showQuestion4(event) {
  event.preventDefault();
  nextPage("question3", "question4");
}


function showQuestion5(event) {
  event.preventDefault();
  nextPage("question4", "question5");
}

function showResults(event) {
  event.preventDefault();
  nextPage("question5", "results");

  const total = getIntValue("snack") +
      getIntValue("activity") +
      getIntValue("animal") +
      getIntValue("intergalactic") +
      getIntValue("antique");

  if (total <= 3) {
    showElement("ruby");
  } else if (total <= 6) {
    showElement("react");
  } else if (total <= 9) {
    showElement("c");
  } else if (total <= 12) {
    showElement("python");
  } else {
    showElement("r");
  }
}

function getIntValue(id) {
  return parseInt(document.getElementById(id).value);
}

function showElement(id) {
  document.getElementById(id).removeAttribute("class");
}

function hideElement(id) {
  document.getElementById(id).setAttribute("class", "hidden");
}

function nextPage(hide, show) {
  hideElement(hide);
  showElement(show);
}