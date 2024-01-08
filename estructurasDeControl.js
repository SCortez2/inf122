var numero = 13;
if(numero % 2 === 0)// se puede con 2 ==
{
   console.log(numero + 'es par');
} else{
    console.log(numero + 'no es par');
}
if(numero % 5 == 0 )
{
   console.log(numreo + 'es variable de 5');
}else{
    console.log(numero + 'no es variable de 5');
}
for(let i=0; i<=5; i++) //funcion exclu
{
   console.log(i);
} //taicoding, 3 days ago * repaso
let contador = 0;
for(let i=10;i>0;i--)
{
    console.log(i);
}
let contador2 = 0;
while(contador2 < 5)
{
    contador++;
    console.log(contador2);
}
let contador3 = 10;
while(contador3 > 0)
{
    contador3--;
    console.log(contador3);
}
//Aritmetica
let suma = 7+2;
console.log(suma);
let resta = 5-2;
console.log(resta);
let multiplicacion = 3*5;
console.log(multiplicacion);
let division = 4/2;
console.log(division);
let modulo = 10%4;
console.log(modulo);
//comparacion
let mayorQue = 10> 5;
console.log(mayorQue);
let mayorIgualQue = 13>=14;
console.log(mayorIgualQue);
let menorQue = 10<20;
console.log(menorQue);
let menorIgualQue = 25<=5;
console.log(menorIgualQue);
let igualQue = 'Hola' === 'Hola';
console.log(igualQue);
let diferenteQue = 'Hola' !== 'hola';
console.log(diferenteQue);
//logicos
let and = true && true;
console.log(and);
let or = false || true;
console.log(or);
let not = !false;
console.log(not);
//combinacion de operadores
let sumaMultiplicacionModulo = 2+4*3%3;//en ese orden
console.log(sumaMultiplicacionModulo);
let restaMultDivSuma = 5-7*8/2+3;//en ese orden
console.log(restaMultDivSuma);

const persona = {
    nombre: "Carlos",
    edad: 25,
    ocupacion: "Desarrollador",
};
console.log(persona.edad);
console.log(persona.nombre);
console.log(persona.ocupacion);
console.log(persona);
const colores = ["verde","rojo","azul"];
console.log(colores);
console.log("Mi nombre es "+persona.nombre+" y tengo "+persona.edad);
console.log("------------------");
console.log(persona.edad);
persona["apellido"] = "Perez";
console.log(persona);
persona["ci"] = 1234567;
console.log(persona);
persona.nombre = "Pedrito";
console.log(persona);
const colores1 = ["rojo","verde","azul"];
console.log("------------------");
console.log(persona.nombre);
persona["nombre"] = "Goku";
console.log(persona.edad);
persona["edad"] = 20;
console.log(persona.ocupacion);
persona["ocupacion"] = "Stramer";
//arrays
console.log(colores.length);
console.log(colores[0]);
console.log(colores[1]);
console.log(colores[2]);
console.log(colores[3]);

for(let i=0;i<colores.length;i++)
{
     console.log("Elemento: "+colores[i]+" ,Indice: "+i);
}

colores.push("amarillo"); //agregando un elemento al array
colores.push("cafe");
colores.push("morado");
colores.reverse(); //invierte la lista(array)
console.log(colores);
colores.sort(); //ordena de forma alfaberica
console.log(colores);

colores.push("NEGRO");
colores.push("BLANCO");
colores.sort();
console.log(colores);

colores.push(43);
colores.push(21);
console.log(colores); //se almacena valores numericos xq es una lista de datos

colores.push(true);
colores.push(false);
colores.sort();
console.log(colores);

colores.push([4,5,6]);
colores.sort();
console.log(colores);

var elemento = colores.pop(); //eliminar o remover el ultimo elemento
console.log(elemento);
console.log(colores);

colores.find("amarillo"); //buscar o encontrar / el 'findIndex' 
colores.findIndex("");
// Lunes 08/01/2024
var encontrado = colores.find(function (elemento){return elemtno === "rojo"});
var elemento = colores.findIndex(function (elemento){return elemento === 1});
colores.findIndex(function(elemento){return elemento ===true});
function saludar (nombre) {return "Hola, "+ nombre + "!";} //crear nombre, no array
const mensaje = saludar("Tatiana");