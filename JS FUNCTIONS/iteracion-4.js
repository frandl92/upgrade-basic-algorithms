// Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];

let total = 0;
let promedio = 0;

function average(param) {
    for (let i = 0; i < param.length; i++) {
        total += param[i];
        promedio = total / param.length
    }
  }

  average (numbers)
  console.log(total)
  console.log(promedio)


