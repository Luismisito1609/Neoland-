// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
for (let a = 0; a <= 9; a++) {
  console.log(a);
}

// 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo
// cuando el resto del numero dividido entre 2 sea 0.
for (let b = 0; b <= 9; b++) {
  if (b % 2 == 0) {
    console.log(b);
  }
}

// 1.3 Crea un bucle para conseguir dormir contando ovejas.
// Este bucle tiene que dar 10 vueltas, es decir, 10 console.log.
// Muestra por consola un mensaje diciendo 'Intentando dormir 🐑' en cada vuelta del bucle
// y cambia el mensaje en la décima vuelta a 'Dormido!'.
for (let c = 0; c <= 10; c++) {
  if (c < 10) {
    console.log("Intentando dormir 🐑");
  } else {
    console.log("Dormido");
  }
}
