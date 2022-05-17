// Definimos un objeto con los datos de una spiderman
var spiderman = {
    nombre: "Peter",
    apellidos: "Parker", 
    pais: "USA",
    profesion: "Student"
}
    
for (var key in spiderman) {
    console.log("Spiderman tiene " + key + " con valor: " + spiderman[key]);
}

// Spiderman tiene nombre con valor: Peter
// Spiderman tiene apellidos con valor: Parker
// Spiderman tiene apellidos con valor: Parker