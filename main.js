let nombreUsuario = (prompt("Ingrese su nombre"));
let queDeseaHacer = (prompt("Ingrese: extraccion o deposito"));

while (queDeseaHacer != "extraccion" && queDeseaHacer != "deposito") {
    alert("La operacion que sedea no se reconoce, ingrese 'extraccion' o ingrese 'deposito'");
    queDeseaHacer = prompt("Ingrese: extraccion o deposito");
}

switch (queDeseaHacer) {
    case "extraccion":
        alert(nombreUsuario + ", puedes extraer un monto desde $1.000 hasta $10.000");
        let retiro = Number(prompt(nombreUsuario + ", ingrese el monto a retirar:"));
        if (retiro <= 10000 && retiro >= 1000) {
            dineroExtraido() ;
            saludoAgradecimiento() ;
        } else {
            while (retiro > 10000 || retiro < 1000) {
                retiro = Number(prompt(nombreUsuario + ", puede retirar minimamente $1.000 y maximo $10.000"));
            }
            dineroExtraido() ;
            saludoAgradecimiento() ;
        }
        break;

    case "deposito":
        alert(nombreUsuario + ", puedes depositar un monto desde $5.000 hasta $20 000");
        let depositar = Number(prompt(nombreUsuario + ", ingrese el monto a depositar:"));
        if (depositar <= 20000 && depositar >= 5000) {
            dineroAcreditado() ;
            saludoAgradecimiento() ;
        } else {
            while (depositar > 20000 || depositar < 5000) {
                depositar = Number(prompt(nombreUsuario + ", puede depositar minimamente $5.000 y maximo $20.000"));
            }
            dineroAcreditado() ;
            saludoAgradecimiento() ;
        }
        break;

    default:
        alert("La operacion que sedea no se reconoce, ingrese 'extraccion' o ingrese 'deposito'");
}

function dineroExtraido (){
    alert("¡Exitoso! El dinero ya esta disponible en tu billetera virtual.")
}

function dineroAcreditado (){
    alert("¡Exitoso! El dinero se acreditara en los proximos minutos en tu cuenta de inversion.")
}

function saludoAgradecimiento (){
    alert ("¡Gracias por operar con nuestra Billetera Virtual! Si deseas seguir operando recarge la pagina web.")
}