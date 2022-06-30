// //INVENTARIO 
// //--------------------------------------------------------------------
// const inventario = []

// //Objetos Consumibles
// //---------------------------------------------------------------------

class Consumible {
  constructor(id, nombreConsumible, cantidadMejora, tipoMejora, valor) {
    this.id = id
    this.nombreConsumible = nombreConsumible
    this.cantidadMejora = cantidadMejora
    this.tipoMejora = tipoMejora
    this.valor = valor
  }
}
//--------------------------------------------------------------------
const consumibles = [
new Consumible(101,"pastelDeManzana1",10,"vida",10),
new Consumible(102,"pocionDeFuerza",10,"fuerza",20),
new Consumible(103,"pocionDeFuerza",2,"fuerza",50),
new Consumible(104,"cangrejoAsado",2,"vida",10),
new Consumible(105,"RataAsada",10,"vida",8),
]
// //-----------------------------------------------------------------------

// //Lista Enemigos
// //---------------------------------------------------------------------

  class Enemigo {
    constructor(id, nombreEnemigo, fuerzaEnemigo, drop) {
      this.id = id
      this.nombreEnemigo = nombreEnemigo
      this.fuerzaEnemigo = fuerzaEnemigo
      this.drop = drop
    }
  }
//-----------------------------------------------------------------------
const enemigos =[
new Enemigo(106,"Tavernero",10,10),
new Enemigo(107,"Lobo",10,10),
new Enemigo(108,"Goblin",10,10),
new Enemigo(109,"ardillaEnojada",10,10),
new Enemigo(110,"elProfeFerLuna",10,10),
]





// // inventario.push(consumibles.find(item => item.id == 101));

// //! DIALOGOS---------------------------------------------------------------------------------------------------------

class Parrafo {
  constructor(id, parrafo) {
    this.id = id
    this.parrafo = parrafo
  }
}
//--------------------------------------------------------------------
const parrafos = [
new Parrafo(001,"Tras una honesta pero tranquila vida de herrero, creando armaduras para grandes caballeros desde la comodidades de tu taller \n Un dia decides que es momento de crear tus propias aventuras, vendes tu taller compras un caballo y te lanzas a la aventura.  \n \n sin realmente saber lo que estas haciendo, vas a caballo hacia donde tu instinto te guia... "),
new Parrafo(002,"Despues de cabalgar un par de dias, te encuentras con una aldea \n Siguiendo tu estomago te encuentras con una taverna, de la cual te recibe un un hombre corpulento, dueño del lugar, mirandote con extrañesa... "),
new Parrafo(003,"Saludos viajero! cual es tu nombre?"),
new Parrafo(004,"Con que tu nombre es"),
new Parrafo(005,". . . que curioso nombre, pero quien soy yo para juzgar?")
]




// //! PELEA---------------------------------------------------------------

// function pelea(parametro){

//   debugger
//   let dado = (confirm("usar un dado?"))
  
//     if (dado == true ) {
//   fuerzaAventurero = (Math.random()* 20)


//    alert("Fuerza del dado: " + parseInt(fuerzaAventurero) )
//     }
//     else {
//   fuerzaAventurero = (heroe1.fuerza + 2)
//     }
  

//   if (fuerzaAventurero > parametro)
//   {
//      heroe1.oro += 2
//       alert("Ganaste la pelea ganas 2 de oro")
//   }
  
//     else {
//       heroe1.oro -= 2
//       heroe1.vida -=10
//       alert("Quedas noqueado en el suelo sin saber que paso, pierdes 2 de oro y 2 de vida")
//   }
  
// if (heroe1.vida <= 0){
//   alert("Estas muerto")
  

// }
//   }
  
// //! COMER/USAR POCION----------------------------------------------------------------------

// // function comer(idConsumible){
// //todo esto tiene que ingresarse desde el html somehow y tiene que poderse usar despues de ver el inventario
// function comer(){
// let idConsumible = 103
// let buffo = consumibles.find((Consumible) =>Consumible.id === parseInt(idConsumible))

// //todo el consumible debe desaparecer del inventario

// return heroe1.vida += buffo.cantidadMejora

// }


function resetCounter() {
  counterVal = 0;
  updateDisplay(counterVal);
}

var counterVal = 0;

function incrementClick() {
    updateDisplay(++counterVal);
}

function updateDisplay(counterVal) {
   
    switch (counterVal) {
      case (1):
      document.getElementById("titulo").innerHTML = parrafos.find(item => item.id == 001).parrafo;
      break

      case(2):
      document.getElementById("titulo").innerHTML = parrafos.find(item => item.id == 002).parrafo;
      break

      case(3):
      document.getElementById("titulo").innerHTML = parrafos.find(item => item.id == 003).parrafo;
      break

      // aqui se pregunta el nombre 

      case(4):
      document.getElementById("titulo").innerHTML = parrafos.find(item => item.id == 004).parrafo + ;
break

    }
}


hacerDialogo()

function seEscucha(){
  console.log("marca"),
  titulo = document.getElementById("titulo"), titulo.innerText = "1"
}

function hacerDialogo() {

let continuar = document.querySelector("button")
continuar.addEventListener("click",()=> (seEscucha(), incrementClick() ) )
}






// //-----------------------------------------------------------------------------



// function resultado(){
//   let buscar = "001"
// let resultado = parrafos.find((parrafo)  => parrafo.id === "001");
// console.log(resultado)
// }





//teniendo un array de objetos find nos permite hacer una busqueda de un objeto puntual
// y lo buscamos por la propiedad que mas nos convenga 






class Aventurero{
  constructor(nombre, oro, vida, fuerza){
  this.nombre = nombre
  this.oro = oro
  this.vida = vida
  this.fuerza = fuerza
}
}

const heroe1 = new Aventurero( nombreAventurero , 20 , 10, 10 ) 

// alert( "Con que tu nombre es "+ heroe1.nombre + " ? que curioso nombre, pero quien soy yo para juzgar?" );








// //---------------------------------------------------------------------


// primerDialogo()

// function primerDialogo(){
// let respuesta1 = parseInt(prompt("y dime " + heroe1.nombre + " que es lo que buscas en esta aldea?  \n 1 Busco pelea \n 2 Busco oro \n 3 Tengo hambre" ));

// switch (respuesta1){

//     case 1:
//     alert("Sera mejor que te andes con cuidado y no busques problemas aqui LARGATE! ") 
//     break;

//   case 2:
//     respuestaOro()
//     break;

//   case 3:
//     alert("Bueno normalmente no hago muchas caridades pero por tu aspecto comprare ese karma...") 
//     inventario.push(consumibles.find(item => item.id == 101));
//     alert ("RECIBES PASTEL DE MANZANA") 
//     alert("Bueno y ahora que probaste bocado, tal vez podrias hacer algo por nosotros a cambio...")
    
//    respuestaOro()
//     break;

// }
// if (respuesta1 > 3) { 
// alert("por favor escoge una de las opciones disponibles");
// primerDialogo()
// }
// }

// //--------------------------------------------------------------------------------------

// function respuestaOro(){
//     let respuesta2 = parseInt(prompt("Tal vez no tengamos mucho pero si nos ayudas tal vez podriamos recompensarte, que dices "+ heroe1.nombre + " ? \n 1 acepto \n 2 No me interesa \n 3 quiero pelear!! " ));


// switch (respuesta2){

//   case 1:
//   alert("Excelente! pues dejame contarte de que trata el asunto... ") 
//   break;

// case 2:
// alert("Es tu decision...pero no habra mucho que hacer por aqui...apenas estan maquetando los dialogos")
// respuestaOro()
//   break;

// case 3:
//   alert("...ok.. creo que es hora de que alguien te muetre modales!! Alza los puños") 
// let idEnemigo = 106
// enemigoAPelear = enemigos.find(item => item.id == idEnemigo)
// pelea(enemigoAPelear.fuerzaEnemigo)

//   break;

// }

// if (respuesta2 > 3) { 
// alert("por favor escoge una de las opciones disponibles");
// respuesta2()
// }
// }



