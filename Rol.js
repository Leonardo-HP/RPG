
let nombreAventurero = prompt("Saludos viajero! cual es tu nombre?")

alert( "Con que tu nombre es "+ nombreAventurero + " ? que curioso nombre, pero quien soy yo para juzgar?" );



primerDialogo()

function primerDialogo(){
let respuesta1 = parseInt(prompt("y dime " + nombreAventurero + " que es lo que buscas en esta aldea?  \n 1 Busco pelea \n 2 Busco oro" ));



switch (respuesta1){

    case 1:
    alert("Sera mejor que te andes con cuidado y no busques problemas aqui LARGATE! ")
    break;

  case 2:
    respuestaOro()
    break;
}
if (respuesta1 >=3) { 
alert("por favor escoge una de las opciones disponibles");
primerDialogo()
}

}

function respuestaOro(){
    let respuesta2 = parseInt(prompt("como todos...bueno tal vez no tengamos mucho pero si nos ayudas tal vez podriamos recompensarte, que dices "+ nombreAventurero + " ? \n 1 acepto \n 2 cambie de opinion quiero pelea" ));
}


