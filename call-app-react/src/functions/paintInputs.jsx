export const paintInputs = (checkBoxContainer, value, color) => {
  let checkBoxes = checkBoxContainer.querySelectorAll(".step-checkbox");
  console.log(checkBoxes);
  for (let i = 0; i < value; i++) {
    console.log(value);
    checkBoxes[i].style.backgroundColor = color;
  }
};
