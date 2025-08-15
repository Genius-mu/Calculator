const display = document.querySelector("#display");

const appearToDisplay = (input) => {
  display.value += input;
};

const calculate = () => {
  if (display.value == "") {
    display.value = "No Value";
  } else {
    display.value = eval(display.value);
  }

  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
};

const clearDisplay = () => {
  display.value = "";
};
