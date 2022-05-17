// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];

  function repeatCounter(array) {
    let counter = {};
    for (let i = 0; i < array.length; i++) {
      if (array[i] in counter){
        counter[array[i]]++
      } else {
        counter[array[i]] = 1;
      }
    }
    console.log(counter)
  }

  repeatCounter(counterWords)







//   let duplicados = 0;
//   const duplicated = [];
  
//   function repeatCounter(param) {
//     for (let i = 0; i < param.length; i++) {
//       for (let e = 0; e < param.length; e++) {
//          if (param[i]==param[e]){
//            duplicados ++;
//         }
//       }
//      if (!duplicated.includes(param[i])) {
//        duplicated.push(param [i], duplicados)
//      } 
//      duplicados = 0;
//   }
// }

// repeatCounter(counterWords)
// console.log(duplicated)
 
