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

// Constructor de objetos, lo puedo hacer con class o con function

//ej. con class

class Raton {
    constructor (Nombre, Edad) {
        this.Nombre = Nombre; //El this es propio de objetos.
        this.Edad = Edad;        
    }
}

const myMouse = new Raton ("Perez", 10);

// ej. con function
// Otra manera de construir objetos a partir de una funcion

function Rata (Nombre, Edad){
    this.Nombre = Nombre; // La funcion se convierte en un objeto por el uso del this.
    this.Edad = Edad;
}

const myRata = new Rata ("Laly", 45);

/* 
Hay caracteristicas que hacen mas util implementar objetos
basados en constructor y en otros casos con function.
*/

/*
Ejercicio

Completar la class buton

Que se dibuje un boton en html luego de llamar al render.

Van a crear otra class input/text o el que sea y que se dibuje igual que boton en el html.

*/

class Boton {
    constructor(parentID, text) {
        this.parentID = parentID;
        this.text = text;
    }
    render()
    {   
        let myappi = document.getElementById(this.parentID);
        // Notar como pasa el contenido de las variables por javascript al html.
        myappi.innerHTML = "<button name = boton >" + this.text + "</button>"; 
    }
}
let primerboton = new Boton("Ejercicio de la clase 4","Adentrooo");
//Es interesante, Primero hay que crear un objeto, luego declarar una variable del tipo del objeto
//y por ultimo, hay que llamar a la funcion que esta adentro del objeto...
 primerboton.render();