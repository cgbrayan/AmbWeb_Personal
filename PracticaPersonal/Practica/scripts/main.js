/*const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world";

//Variables, almacenan valores, palabra clave "let"
let myVariable = "Brayan"; // O declarar la variable y luego asignar un valor
//El valor se recupera llamando al nombre de la variable
myVariable;
//Puede cambiar el valor a la variable
myVariable = "Steve";

//Tipos de datos, ya vimos el String, tambien permite usar '' en vez de ""
let myVariableInt = 10; //Integer
let myVariableBool = true; //Boolean
let myVariableArray = [1, "Bob", "Steve", 10]; //Array
let myVariableObject = document.querySelector("h1"); //Todo en Js es un objeto,almacena cualquier cosa
*/
//Operadores
/*
 +,-,*,/
 Asignacion =
 Igualdad estricta ===, verifica si dos valores son iguales y tambien de tipo de dato, retorna true falsee
 No,no-Igual a !, !==, devuelve true o false*/

//Condicionales
/*let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}

//Funciones
function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}
//Solo hace el calculo pero no se ve, porque no se imprime, llama a la funcion y da argumentos
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);*/

//Eventos
/*Selecciona el elemento html, luego llama a la funcion addEventListener() pasando
el nombre del evento para escuchar y una funcion a ejecutar cuando ocurra el evento*/
//La funcion se llama funcion anonima porque no tiene nombre
/*document.querySelector("html").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});

//Otra manera de escribir funciones anonimas es usando la llamada funcion de flecha
document.querySelector("html").addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
});*/

//CODIGO DE LA PAGINA DE EJEMPLO
//Usando las funciones de JS y DOM API para alternar la visualizacion de una de las dos imagenes

//Almaceno una referencia a mi elemento img
const myImage = document.querySelector("img");

//La propiedad de cotrolador de eventos es una funcion anonima, una funcion de flecha
/*Caad vez que hace clic en el elemento, el codigo recupera el valor del atributo de la imagen
en este caso el scr(source)*/
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  //Comprueba si el valor es igual a la ruta de la imagen original, si es asi cambia de valor a otra imagen
  if (mySrc === "images/image1.jpg") {
    myImage.setAttribute("src", "images/image2.jpeg");
  } else {
    myImage.setAttribute("src", "images/image1.jpg");
  }
};

//Toma de referencias al boton y encabezado, almacenando cada una de las variables internas
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  //PROMPT cuadro de dialogo
  const myName = prompt("Please enter your name.");
  //Si no hay valor, vuelve a ejecutar desde el principio
  //Al usar ! recordar que devuelve un booleano, si es null 
  if (!myName) {
    setUserName();
  } else {
    //Metodo para almacenar datos en el almacenamiento local del navegador bajo la clave name
    //Almacena los datos de manera persistente en el navegador, incluso si cierra la ventana o apaque el navegador
    //Es parte de la API de Web Storage
    localStorage.setItem("name", myName);
    //Cambia el contenido de texto del elemento referenciado por myHeading, inserta el nombre del usuario
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

//Ahora el codigo de inicializacion, porque estructura la aplicacion cuando se carga por primera vez
//Usando el localStorage.getItem intenta recuperar el valor asociado a la clave name del almacenamiento local
/*Valida con un ! si hay un nombre guardado, si no lo hay llama a la funcion setUserName()
donde se abrira un cuadro de dialogo prompt solicitando ingresar un nombre y guardarlo en el localStorage
pero si hay un nombre guardado, el else se recupera y se guarda en storedName, por ultimo se 
actuailiza el contenido del mensaje*/
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

//Este es el evento para ejecutar la funcion del boton
//Al hacer clic se ejecuta la funcion setUserName()
myButton.onclick = () => {
  setUserName();
};
