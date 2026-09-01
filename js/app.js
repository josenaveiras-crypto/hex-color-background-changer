const button = document.querySelector('#btn');
const colorBox = document.querySelector('#color-box');
const hexValue = document.querySelector('#hex-value');
const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

function getRandomHexColor() {
  let hexColor = '#';

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexValues.length);
    hexColor += hexValues[randomIndex];
  }

  return hexColor;
}

function changeBoxColor() {
  const color = getRandomHexColor();

  colorBox.style.backgroundColor = color;
  hexValue.textContent = color;
}

button.addEventListener('click', changeBoxColor);

changeBoxColor();

