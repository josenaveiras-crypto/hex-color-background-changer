const button = document.querySelector('#btn');
const colorBox = document.querySelector('#color-box');
const hexValue = document.querySelector('#hex-value');

// ¡Buena suerte!
button.addEventListener("click", generarColor);

function generarColor() {
    console.log("CLICK CORRECTO");
    console.log(generarColorHexadecimal());
    const colorAleatorio = generarColorHexadecimal();
    hexValue.textContent = colorAleatorio;
    colorBox.style.backgroundColor = colorAleatorio;

}

function generarColorHexadecimal() {
  return "#" + Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");
}

