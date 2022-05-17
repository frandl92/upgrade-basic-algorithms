// **Iteración #6: Función swap**

// Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

// Sugerencia de array:


const array = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']




function swap(params, param1, param2) {
  let pal1 = params[param1];
  params[param1] = params[param2];
  params[param2] = pal1 
}

swap(array, 0, 3);
console.log(array)