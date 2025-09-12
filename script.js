const colorBox = document.getElementById("color-box");
const inputColor = document.getElementById("color-input");
const randomBtn = document.getElementById("random-color-btn");

// Random color generator button
randomBtn.addEventListener("click", (e) => {
  colorBox.style.backgroundColor = randomColor();
});

// Random color generator function
randomColor = () => {
  const hexColor = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${hexColor}`;
};

// the color  code show in the input field
const setInputColor = () => {
  inputColor.value = randomColor();
};

// Using the input field to change the color
const inputChangeColor = () => {
  const newColor = inputColor.value;
  colorBox.style.backgroundColor = newColor;
};

inputColor.addEventListener("change", (e) => {
  inputChangeColor();
});
