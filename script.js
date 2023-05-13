if ((document.re = "loading")) {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  var nbrBtns = document.getElementsByClassName("btn");

  for (let i = 0; i < nbrBtns.length; i++) {
    var nbr_btn = nbrBtns[i];
    nbr_btn.addEventListener("click", calculate);
  }
}

function calculate(event) {
  var button = event.target.value;

  //   var the_form = document.getElementsByName("my_form");
  var textField = document.getElementById("result");

  if (button !== "=") {
    textField.value += button;
  } else {
    textField.value = textField.value;
  }

  const carArray = ["/", "*", "-", "+", "."];
  let lastCar = textField.value[textField.value.length - 1];

  let operator = false;

  if (carArray.includes(lastCar)) {
    operator = true;
  }

  if (operator) {
    // textField.value.replace(lastCar, button);
  }
}
