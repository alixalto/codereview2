function hideResults() {
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("react").setAttribute("class", "hidden");
  document.getElementById("c").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
  document.getElementById("r").setAttribute("class", "hidden");
}

window.onload = function() {
  btn0.addEventListener('click', showQuestion1)
}

function showQuestion1(event) {
  event.preventDefault();

  const introPage = document.getElementById("intro");
  introPage.setAttribute("class", "hidden");

  const question1Page = document.getElementById("question1");
  question1Page.removeAttribute("class");

  btn1.addEventListener('click', showQuestion2)
}


function showQuestion2(event) {
  event.preventDefault();

  const question1Page = document.getElementById("question1");
  question1Page.setAttribute("class", "hidden");

  const question2Page = document.getElementById("question2");
  question2Page.removeAttribute("class");

  const snackValue = document.getElementById("snack").value;
  console.log(snackValue);

  const responseValue1 = parseInt(snackValue);
  console.log(responseValue1);

  btn2.addEventListener('click', showQuestion3);
}




function showQuestion3(event) {
  event.preventDefault();

  const question2Page = document.getElementById("question2");
  question2Page.setAttribute("class", "hidden");

  const question3Page = document.getElementById("question3");
  question3Page.removeAttribute("class");

  const activityValue = document.getElementById("activity").value;
  console.log(activityValue);

  const responseValue2 = parseInt(activityValue);
  console.log(responseValue2);

  btn3.addEventListener('click', showQuestion4)
}


function showQuestion4(event) {
  event.preventDefault();

  const question3Page = document.getElementById("question3");
  question3Page.setAttribute("class", "hidden");

  const question4Page = document.getElementById("question4");
  question4Page.removeAttribute("class");

  const animalValue = document.getElementById("animal").value;
  console.log(animalValue);

  const responseValue3 = parseInt(animalValue);
  console.log(responseValue3);

  btn4.addEventListener('click', showQuestion5)
}


function showQuestion5(event) {
  event.preventDefault();

  const question4Page = document.getElementById("question4");
  question4Page.setAttribute("class", "hidden");

  const question5Page = document.getElementById("question5");
  question5Page.removeAttribute("class");

  const intergalacticValue = document.getElementById("intergalactic").value;
  console.log(intergalacticValue);

  const responsevalue4 = parseInt(intergalacticValue);
  console.log(responsevalue4);

  btn5.addEventListener('click', showResults)
}

function showResults(event) {
  event.preventDefault();

  const resultsPage = document.getElementById("results");
  resultsPage.setAttribute("class", "hidden");

  const question5Page = document.getElementById("question5");
  question5Page.setAttribute("class", "hidden");

  const resultsPage = document.getElementById("results");
  resultsPage.removeAttribute("class");

  const antiqueValue = document.getElementById("antique").value;
  console.log(antiqueValue);

  const responsevalue5 = parseInt(antiqueValue);
  console.log(responsevalue5);

  console.log("broke")

  btn5.addEventListener('click', showResults)

}

