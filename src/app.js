const name = 'world';
console.log(`Hello ${name}`);

const btn = document.getElementById('botonMetalMeter');
btn.addEventListener('click', NumAleatorio, false);

export function NumAleatorio() {

    document.getElementById("img0").style.display = "none";
    document.getElementById("img1").style.display = "none";
    document.getElementById("img2").style.display = "none";
    document.getElementById("img3").style.display = "none";
    document.getElementById("img4").style.display = "none";
    document.getElementById("botonMetalMeter").innerHTML = "Prueba otra vez";

    var Numero = Math.random() * (5 - 1) + 1;
    if (Numero < 2){
        document.getElementById("textoResultado").innerHTML = "Puntuación: 1 (Reguetonero)";
        document.getElementById("descripcionResultado").innerHTML = "Un reguetonero es el enemigo número uno de un metalero. Si te cruzas con algún melenudo ¡huye!, pueden detectar tu presencia a varios metros de distancia.";
        document.getElementById("img1").style.display = "flex";
    }else if (Numero < 3){
        document.getElementById("textoResultado").innerHTML = "Puntuación: 2 (Rapero)";
        document.getElementById("descripcionResultado").innerHTML = "No tan perseguidos como los reguetoneros, pero bastante odiados por los heavys. Puedes pasar desapercibido si no dices palabras raras como 'bro'.";
        document.getElementById("img2").style.display = "flex";
    }else if  (Numero < 4){
        document.getElementById("textoResultado").innerHTML = "Puntuación: 3 (Popero)";
        document.getElementById("descripcionResultado").innerHTML = "Todavía tienes arreglo, pero tienes que trabajar muy duro. Empieza escuchando a Dio, bebe mucha cerveza y vístete de negro y poco a poco te harás un camino hacia el metal.";
        document.getElementById("img3").style.display = "flex";
    }else if  (Numero < 5){
        document.getElementById("textoResultado").innerHTML = "Puntuación: 4 (Metalero)";
        document.getElementById("descripcionResultado").innerHTML = "Por tu venas corre sangre de un verdadero hijo del metal. El mismísimo Odín se siente orgulloso de ti.";
        document.getElementById("img4").style.display = "flex";
    }
}