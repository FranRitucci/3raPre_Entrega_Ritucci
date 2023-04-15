let nombreUsuario = (prompt("Ingrese su nombre"));
let queDeseaHacer = (prompt("Ingrese: extraccion o deposito"));

while (queDeseaHacer != "extraccion" && queDeseaHacer != "deposito") {
    alert("La operacion que sedea no se reconoce, ingrese 'extraccion' o ingrese 'deposito'");
    queDeseaHacer = prompt("Ingrese: extraccion o deposito");
}

switch (queDeseaHacer) {
    case "extraccion":
        alert(nombreUsuario + ", puedes extraer hasta $10 000");
        let retiro = Number(prompt("Ingrese el monto a retirar:"));
        if (retiro <= 10000) {
            dineroExtraido() ;
            saludoAgradecimiento() ;
        } else {
            alert("El limite de retiro diario es $10,000. No ingrese un monto superior.");
            while (retiro > 10000) {
                retiro = Number(prompt("Ingrese el monto a retirar:"));
            }
            dineroExtraido() ;
            saludoAgradecimiento() ;
        }
        break;

    case "deposito":
        alert(nombreUsuario + ", puedes depositar hasta $20 000");
        let depositar = Number(prompt("Ingrese el monto a depositar:"));
        if (depositar <= 20000) {
            dineroAcreditado() ;
            saludoAgradecimiento() ;
        } else {
            alert("El limite de deposito diario es $20,000. No ingrese un monto superior.")
            while (depositar > 20000) {
                depositar = Number(prompt("Ingrese el monto a depositar:"));
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