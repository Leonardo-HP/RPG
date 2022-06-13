
alert ("tras una honesta pero tranquila vida de herrero, creando armaduras para grandes caballeros desde la comodidades de tu taller \n Un dia decides que es momento de crear tus propias aventuras, vendes tu taller compras un caballo y te lanzas a la aventura.  \n \n sin realmente saber lo que estas haciendo, vas a caballo hacia donde tu instinto te guia... ")
alert ("Despues de cabalgar un par de dias, te encuentras con una aldea \n Siguiendo tu estomago te encuentras con una taverna, de la cual te recibe un un hombre corpulento, dueño del lugar, mirandote con extrañesa... ")

let nombreAventurero = prompt("Saludos viajero! cual es tu nombre?")



class Aventurero{
  constructor(nombre, oro,){
  this.nombre = nombre
  this.oro = oro
  
}
}

const heroe1 = new Aventurero( nombreAventurero , 20  ) 




alert( "Con que tu nombre es "+ heroe1.nombre + " ? que curioso nombre, pero quien soy yo para juzgar?" );



primerDialogo()

function primerDialogo(){
let respuesta1 = parseInt(prompt("y dime " + heroe1.nombre + " que es lo que buscas en esta aldea?  \n 1 Busco pelea \n 2 Busco oro \n 3 Tengo hambre" ));



switch (respuesta1){

    case 1:
    alert("Sera mejor que te andes con cuidado y no busques problemas aqui LARGATE! ") 
    break;

  case 2:
    respuestaOro()
    break;

  case 3:
    alert("Bueno normalmente no hago muchas caridades pero por tu aspecto comprare ese karma...") 
    alert ("RECIBES PASTEL DE MANZANA")
    alert("Bueno y ahora que probaste bocado, tal vez podrias hacer algo por nosotros a cambio...")
    respuestaOro()
    break;

}
if (respuesta1 >=3) { 
alert("por favor escoge una de las opciones disponibles");
primerDialogo()
}
}

function respuestaOro(){
    let respuesta2 = parseInt(prompt("Tal vez no tengamos mucho pero si nos ayudas tal vez podriamos recompensarte, que dices "+ heroe1.nombre + " ? \n 1 acepto \n 2 No me interesa \n 3 quiero pelear!! " ));
}






