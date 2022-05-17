// queremos dormirnos, tenemos insomnio, queremos un bucle que cuente hasta 10 ovejas, cada una será un cosole.log(1 oveja... 2 ovejas... etc.) y que
// cuando sea 10 salga un console.log("zzz") para indicar que nos hemos dormido
// tenemos este array -> const comidas = ["Cebolla", "Arroz", "Aceite", "Macarrones", "Aceitunas"];
// queremos mostrar por pantalla las palabras que contengan una e en su nombre;
/*  tenemos este array -> const alumnos = [
    {
        name: "daniel";
        age: "14"
    },
    {
        name: "alejandro";
        age: "11"
    },
    {
        name: "jose luis";
        age: "12"
    },
    {
        name: "antonio";
        age: "2341"
    },
    {
        name: "pedro";
        age: "40"
    },
    {
        name: "pepe";
        age: "12"
    },
    {
        name: "anuel prrr";
        age: "30"
    },
] */
// queremos, sacar por pantalla el nombre de todos los alumnos que tengan más de 18 años y menos de 100

for (let i = 0; i < 10; i++) {
    console.log(i + " ovejas meeeeee")
    if (i === 9) {
        console.log("zzzzz")
    }
}



const comidas = ["Cebolla", "Arroz", "Aceite", "Macarrones", "Aceitunas"];

for (let i = 0;  i < comidas.length; i++) {
    if (comidas[i].includes("e")) {
        console.log(comidas[i])   
    }
}

const alumnos = [

    {

        name: "daniel",

        age: 14

    },

    {

        name: "alejandro",

        age: 11

    },

    {
        name: "jose luis",

        age: 12
    },

    {
        name: "antonio",

        age: 2341
    },

    {
        name: "pedro",

        age: 40
    },

    {
         name: "pepe",

        age: 12
    },

    {
        name: "anuel prrr",

        age: 30
    },

]


// queremos, sacar por pantalla el nombre de todos los alumnos que tengan más de 18 años y menos de 100

for (let i = 0; i < alumnos.length; i++) {
    console.log(alumnos[i])
    if (alumnos[i].age > 18 && alumnos[i].age < 100 ) {
        console.log (alumnos[i])
    }
}