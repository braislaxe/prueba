 
 
 
 
 
 
 
 
 
 
 
 // CREATE ELEMENTS AND EVENTS


/*
const parrafo=document.createElement("p");
parrafo.innerText= "Negreira Ladron";
document.body.appendChild(parrafo);

const div = document.getElementById("div");
div.appendChild(parrafo);

const button =document.createElement("button");
button.innerText="No Tocar"
div.appendChild(button);

button.addEventListener("click",queHaces);
function queHaces()
{
  alert("Bro te dije q no lo tocaras☠️☠️");
}
button.addEventListener("mouseover", noloHagas);
button.addEventListener("mouseout", asimeGusta);
function noloHagas(){
  const No=document.createElement("p");
No.innerText= "QUE HACES!!";
document.body.appendChild(No);
  alert("PERO TU QUIEN TE CREES")
}
function asimeGusta(){
  const asiSi=document.createElement("p");
asiSi.innerText= "dejalo ahi";
document.body.appendChild(asiSi);
}

button.addEventListener("mouseover", Mover);
button.addEventListener("click", Click);
function Mover(){
  const X = Math.round(Math.random() * 200) + "px";
  const Y = Math.round(Math.random() * 150) + "px";
    button.style.position = "relative";
    button.style.left = X; 
    button.style.top = Y;
}

function Click() {
  alert("LO CONSEGUISTE!!");
  button.style.backgroundColor="red";
}
*/










// CLASSES PLAYERS









/*
class Player{
    constructor(nombre, sombreroColor){
      this._nombre=nombre;
      this._sombreroColor=sombreroColor
    }
    saludar(){
      return "Hola "+ this._nombre + ", su sombrero es de color "+ this._sombreroColor;
    }
  }
  
  let player1=new Player("Mario", "Rojo");
  let player2=new Player("Luigi", "Verde");

*/













//CLASSES LIBROS














/*
class Libro{
    constructor(titulo, autor, genero, anho){
        this._titulo=titulo;
        this._autor=autor;
        this._genero=genero;
        this._anho=anho;
    }
    retornarInfoLibro(){
        return "Este libro se llama " + this._titulo + " , está escrito por " + this._autor + " y es del género " + this._genero + " del año " + this._anho;
    }
}

let libros = [];
let librosIngresados = parseInt(prompt("cuantos libros quieres ingresar"));

while(libros.length < librosIngresados){
    let titulo=prompt("¿cual es el titulo del libro?");
    let autor=prompt("¿cual es el autor del libro?");
    let genero=prompt("¿cual es el genero del libro?");
    let anho=prompt("¿cuando se hizo el libro?");

    if(validarLibro(titulo, autor, genero, anho))
    {
      libros.push(new Libro(titulo, autor, genero, anho));
    } 
    else{
      alert("tiene que llenar toda la información correctamente");
    }
}

//Hacer una función llamada validar libro que valide que ningún dato esté vacío, y que el año sea numérico de 4 números (usar propiedad length)
//Validar que el género sea aventura terror o fantasía


function validarLibro(titulo, autor, genero, anho){
  if(titulo == "" || titulo == null || anho == "" || autor == "" || autor == null || genero == ""  || (genero != "aventura" && genero != "fantasia" && genero != "terror")  || anho.length != 4 || isNaN(anho)){ // .length nos devuelve la cantida de letras que tiene cualquier dato (tmb sirve para ver los items de los arreys)
    
    return false;
  }
  {
    return true;
  }
}


for(let x of libros){  
  alert(x.retornarInfoLibro());
}
mostrarAutores();
// Crear una función para mostrar los autores //(sin que se repitan)//
function mostrarAutores()
{
  for(let libro of libros){
      alert( libro._titulo + " esta hecho por " + libro._autor);
  }
}

let eleccionGenero = prompt("elige un genero");
alert(buscarGenero(eleccionGenero));

function buscarGenero(eleccionGenero){
  let textoLibros;
  for(let libro of libros){
    if(libro._genero == eleccionGenero){
      textoLibros+= libro.retornarInfoLibro();
    }
  }
  return textoLibros;
}

*/














// CLASSES PERSONAJES










/*

import Personaje from "./Personaje.js"

const lblVidaVillano = document.getElementById("lblVida");
const btnGolpear = document.getElementById("btnGolpear");

let heroe = new Personaje(100, 50);
let villano = new Personaje (100, 50);

document.body.addEventListener("onload",iniciarValores());
btnGolpear.addEventListener("click", atacar);

function iniciarValores(){
  lblVidaVillano.innerHTML = villano._vida;
}


function atacar(){
  let dano = heroe.atacar();
  villano._vida = villano._vida - dano;
  actualizarHTML();
}


function actualizarHTML(){
    if(villano._vida>0)
    {
      lblVidaVillano.innerHTML = villano._vida; 
    }
    else{
      lblVidaVillano.innerHTML = "Ya se murió";
      const parrafo = document.createElement("p");
      parrafo.innerHTML =  "&#128128";     

      document.body.appendChild(parrafo);
    }
}

*/









//GEOMETRIA








/*
//circulo
const pi = 3.14159;
let radioCirculo=parseFloat(prompt("ingrese el radio del circulo"));
//rectangulo
let baseRectangulo=parseFloat(prompt("ingrese la base del rectangulo"));
let alturaRectangulo=parseFloat(prompt("intruduzca la altura del rectangulo"));
//triangulo
let lado1Triangulo=parseFloat(prompt("intruduzca la medida del lado 1 del triangulo"));
let lado2Triangulo=parseFloat(prompt("intruduzca la medida del lado 2 del triangulo"));
let lado3Triangulo=parseFloat(prompt("intruduzca la medida del lado 3 del triangulo"));
let baseTriangulo=parseFloat(prompt("ingrese la base del triangulo"));
let alturaTriangulo=parseFloat(prompt("ingrese la altura del triangulo"));
//cilindro
let radioCilindro=parseFloat(prompt("ingrese el radio de la base del cilindro"));
let alturaCilindro=parseFloat(prompt("ingrese la altura del cilindro"));
//piramide
let lado1Piramide=parseFloat(prompt("ingrese el lado 1 de la piramide"));
let lado2Piramide=parseFloat(prompt("ingrese el lado 2 de la piramide"));
let alturaPiramide=parseFloat(prompt("ingrese la altura de la piramide"));
//calcular perimetros
function perimetroCirculo(){
  return (2*pi*radioCirculo);
}

function perimetroRectangulo(){
 return (2*baseRectangulo+2*alturaRectangulo);
}

function perimetroTriangulo(){
  return (lado1Triangulo+lado2Triangulo+lado3Triangulo);
}


alert("el perimetro del circulo es: " +  perimetroCirculo() + ", el perimetro del rectangulo es: "+ perimetroRectangulo()+ " y el perimetro del triangulo es: "+ perimetroTriangulo());


//calcular superficies

function superficieCirculo(){
  return (pi*Math.pow(radioCirculo, 2)); //Math.pow() sirve para elevar numeros, donde dentro del parentesis, primero va el numero y luego a lo que lo quieres elevar (x,y)--> x^y
}

function superficieRectangulo(){
  return (baseRectangulo*alturaRectangulo);
}

function superficieTriangulo(){
  return (baseTriangulo*alturaTriangulo/2);
}

function superficiePiramide(){
  return(lado1Piramide*lado2Piramide);
}

alert("la superficie del circulo es: "+ superficieCirculo() + ", la superficie del rectangulo es: "+ superficieRectangulo()+ " y la superficie del triangulo es:"+ superficieTriangulo());


//calcular volumenes

function volumenCilindro(){
  return(pi*Math.pow(radioCilindro, 2)*alturaCilindro);
}

function volumenPiramide(){
 return(superficiePiramide()*alturaPiramide/3);
}

alert("el volumen del cilindro es: "+ volumenCilindro()+" y el volumen de la piramide es: "+ volumenPiramide());

*/












// CLASSES ANIMALES





/*

import Animal from "./Animal.js"
import Gato from "./gato.js"
import Perro from "./Perro.js"

*/

/*
let animal1=new Animal("Juan", "Fuerte", 4, "grande");
alert(animal1.gritar());
*/

/* 

let gato1=new Gato("Michi", "Flojo", 1, "mini", "Comun Europeo");
alert(gato1._raza);
alert(gato1.gritar());


let perro1=new Perro("Firulis", "fuerte", 4, "grande", "Border Collie");
alert(perro1._raza);
alert(perro1.gritar());


*/


//CARROUSEL

const products = [
  { id: 1, name: 'Calcetines', price: 10, image: 'img/2925e67b-d6e6-428e-a9b9-818c8654461a Small.jpeg' },
  { id: 2, name: 'Chaqueta', price: 80, image: 'img/481a71af-029b-4b3a-a587-21688f2b9382 Small.jpeg' },
  { id: 3, name: 'Zapatos', price: 120, image: 'img/air-force-1-07-zapatillas-GjGXSP.png' },
  { id: 4, name: 'Sudadera', price: 50, image: 'img/nike-sudadera-323-1.jpeg' },
  { id: 5, name: 'Pantalones', price: 20, image: 'img/pantalon-largo-nike-dri-fit-academy-drill-kpz-black-white-0.jpeg' }
];

crearListaProdHTML();

// Carrito de compras
let cart = [];

// Obtener el elemento del carrito
const cartItems = document.getElementById('cart-items');
const totalAmount = document.getElementById('total-amount');
const emptyCartBtn = document.getElementById('empty-cart-btn');

// Función para renderizar los productos disponibles
function crearListaProdHTML() {
  const productList = document.getElementById('product-list');
  productList.innerHTML = '';

  for (const product of products) {
  const listItem = document.createElement('li');
  listItem.innerHTML = '<img class="product-image" src="' + product.image + '" alt="' + product.name +
    '">' + '<span class="product-name">' + product.name + '</span>' + '<span>$' + product.price +
    '</span>' + '<button class="add-to-cart-btn" onclick="agregarAlcarrito(' + product.id + ')">Agregar</button>';

  productList.appendChild(listItem);
}

}

// Función para agregar un producto al carrito
function agregarAlcarrito(productId) {
  const productoSeleccionado = products.find(function (producto) { 
    return producto.id === productId; // guardo el producto en "productoSeleccionado"
  });
  
  const productoEncontradoCarr = cart.find(function (prodCarrito) {
    return prodCarrito.product.id === productId; // retorna el producto cuando lo encontró en el carrito, y si NO está retorna undefined
  });
  
  if (productoEncontradoCarr) {
    productoEncontradoCarr.quantity++; // aumento en UNO la cantidad
    productoEncontradoCarr.price = productoEncontradoCarr.quantity * productoSeleccionado.price; // actualizo el precio multiplicando la cantidad por el precio del producto seleccionado
  } else {
    cart.push({ product: productoSeleccionado, quantity: 1, price: productoSeleccionado.price }); // agrego el nuevo producto al carrito
  }
  
  agregarCarritoHTML();
}

// Función para renderizar el carrito
function agregarCarritoHTML() {
  cartItems.innerHTML = '';
  totalAmount.innerHTML = '';

  for (const cartItem of cart) {
  const listItem = document.createElement('li');
  listItem.innerHTML = '<img class="product-image" src="' + cartItem.product.image + '" alt="' +
    cartItem.product.name + '">' + '<span class="product-name">' + cartItem.product.name + '</span>' +
    '<span>' + cartItem.quantity + '</span>' + '<span>$' + cartItem.price + '</span>' +
    '<button class="remove-from-cart-btn" onclick="removeFromCart(' + cartItem.product.id +
    ')">Eliminar</button>';
  cartItems.appendChild(listItem);
  }

}
