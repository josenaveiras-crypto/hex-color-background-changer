# Cambiar el color de un cuadrado hexadecimal

Este ejercicio consiste en generar un color hexadecimal aleatorio al pulsar un botón y aplicarlo a un cuadrado concreto del DOM, en lugar de cambiar el fondo completo de la página.

## Qué incluye esta versión

- HTML sencillo y limpio.
- CSS sin dependencias externas ni Bootstrap.
- Un elemento con ID llamado `color-box` que cambia de color al hacer clic.
- Un texto con el valor hexadecimal actual.

## Estructura

- `index.html`: contiene el botón y el cuadrado que cambia de color.
- `css/main.css`: estilos con CSS puro.
- `js/app.js`: lógica para generar y aplicar el color hexadecimal.

## Pasos a seguir

1. Abre `index.html` y observa cómo está estructurado el cuadrado y el botón.
2. Busca los elementos del DOM con `querySelector`.
3. Comprueba que el evento `click` funciona con una prueba simple en la consola.
4. Genera un color hexadecimal aleatorio con una función.
5. Actualiza el `backgroundColor` del cuadrado y el texto del valor hexadecimal.
6. Haz que el cambio también se produzca al cargar la página para ver un color inicial.

## Restricciones

1. No copies y pegues una solución completa; intenta entender cada línea.
2. Separa la lógica en funciones pequeñas y claras.
3. Mantén el ejercicio simple y legible.

## Función para obtener un color hexadecimal aleatorio

```js
function getRandomHexColor() {
  const hexValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let hexColor = '#';

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexValues.length);
    hexColor += hexValues[randomIndex];
  }

  return hexColor;
}
```

Esta función genera una cadena como `#A1B2C3` y luego se usa para cambiar el `backgroundColor` del cuadrado.

## Cómo probarlo

1. Abre el index.html con el Live Server.
2. Haz clic en el botón.
3. El cuadrado debe cambiar de color y mostrarse el código hexadecimal.

