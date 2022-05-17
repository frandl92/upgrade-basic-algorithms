// Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

// Puedes usar este array para probar tu función:

// const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
// function findLongestWord(param) {
//   // insert code
// }


const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

let palabra_mas_larga = '';

function findLongestWord (param) {
    
   for (let i = 0; i < param.length; i++) {
       if (param[i].length > palabra_mas_larga.length) {
           palabra_mas_larga = param[i]
       }
    }       
   }

findLongestWord (avengers)

console.log(palabra_mas_larga);