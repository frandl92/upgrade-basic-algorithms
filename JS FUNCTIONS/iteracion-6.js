// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

const duplicates = [
    'sushi',
    'pizza',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];


  function removeDuplicates(param) {
    for (let i = 0; i < param.length; i++) {
        for (let e = 0; e < param.length; e++) {
           if (param[i]==param[e] && i!==e){
            //    console.log(param[e])
               param.splice(e,1)
                e--;
           }
        }
    }
  }

  removeDuplicates (duplicates)
  console.log(duplicates)