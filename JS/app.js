let myDOM = document;

// Formalizador de objetos (estrucutras para mi)
const mydog = {
    name : "Firulais"
};

const mycat = {
    "name" : "kity"
};

console.log(mydog.name);
console.log(mycat.name);

// Constructor de objetos

class Raton {
    constructor (Nombre, Edad) {
        this.Nombre = Nombre;
        this.Edad = Edad;        
    }
}

const myMouse = new Raton ("Perez", 10);

// Otra manera de construir objetos a partir de una funcion

function Rata (Nombre, Edad){
    this.Nombre = Nombre; // Se convierte en un objeto por el uso del this.
    this.Edad = Edad;
}

const myRata = new Rata ("Laly", 45);

/* 
Hay caracteristicas que hacen mas util implementar objetos
basados en constructor y en otros casos con function.
*/
