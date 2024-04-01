// Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings
// tenga la misma longitud deberá devolver el primero.
// Puedes usar este array para probar tu:
const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "CaptainA.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(arrayAvengers) {
  let longestWord = "";
  for (let i = 0; i < arrayAvengers.length; i++) {
    if (longestWord < arrayAvengers[i].length) {
      longestWord = arrayAvengers[i];
    }
  }
  return longestWord;
}
let x = findLongestWord(avengers);
console.log(x);

// function findLongestWord(arrayAvengers) {
//   let longestWord = "";
//   for (let i = 0; i < arrayAvengers.length; i++) {
//     if (longestWord.length < arrayAvengers[i].length) {
//       longestWord = arrayAvengers[i];
//     }
//   }
//   return longestWord;
// }
let b = findLongestWord(avengers);
console.log(b);
