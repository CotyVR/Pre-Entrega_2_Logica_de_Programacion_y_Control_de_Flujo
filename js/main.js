// Adivinar el numero en el que estoy pensando. Respuesta 2.
const respuesta = 2
let intentos = 0
let acierto = false

// Bucle de los intentos. Tienes 4.
while (intentos < 4 && !acierto) {
  const resultado = Number(prompt("¿En qué número estoy pensando? Pista se encuentra entre el 1 y el 10"));
  if (resultado === respuesta) {
    acierto = true;
    alert("¡Felicidades! Acertaste");
  } else {
    intentos++;
    alert(`Buuu, no, no es ese número. Intentos faltantes: ${4 - intentos}`);
  }
}

if (!acierto) {
  alert("Perdiste");
}