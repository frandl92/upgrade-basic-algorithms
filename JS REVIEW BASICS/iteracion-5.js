
function rollDice(caras){
    let resultado = Math.floor (Math.random() * (caras-1) + 1)
    console.log(resultado)
}

rollDice(10);