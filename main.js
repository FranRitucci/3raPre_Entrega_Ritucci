let nombreUsuario = (prompt("Ingrese su nombre"));
let queDeseaHacer = (prompt(nombreUsuario + ", para operar ingrese: 'deposito' o 'extraccion'. Para finalizar: 'salir'"));

let saldoEnCuenta = 0;

function sumar(parametro1, parametro2){
    let saldoEnCuenta = parametro1 + parametro2;
    return saldoEnCuenta;
}

function restar(montoDisponible, montoExtraido){
    saldoEnCuenta = montoDisponible - montoExtraido;
    return saldoEnCuenta;
}

while (queDeseaHacer != "salir") {
    while (queDeseaHacer != "extraccion" && queDeseaHacer != "deposito") {
        alert("La operacion que sedea no se reconoce, ingrese 'deposito' o ingrese 'extraccion'");
        queDeseaHacer = prompt("Ingrese: deposito o extraccion");
    }

    switch (queDeseaHacer) {
        case "deposito":
            alert(nombreUsuario + ", puedes depositar un monto desde $5.000 hasta $20.000");
            let depositar = Number(prompt(nombreUsuario + ", ingrese el monto a depositar:"));
            if (depositar <= 20000 && depositar >= 5000) {
                saldoEnCuenta = sumar(saldoEnCuenta, depositar);
                alert(nombreUsuario + ", su saldo en cuenta es: $" + saldoEnCuenta + " y ya se encuentra acreditado.");
                saludoAgradecimiento();
            } else {
                while (depositar > 20000 || depositar < 5000) {
                    depositar = Number(prompt(nombreUsuario + ", puede depositar minimamente $5.000 y maximo $20.000"));
                }
                saldoEnCuenta = sumar(saldoEnCuenta, depositar);
                alert("Su saldo en cuenta es: " + saldoEnCuenta);
                saludoAgradecimiento();
            }
            break;

        case "extraccion":
            if (saldoEnCuenta < 1000) {
                alert(nombreUsuario + ", el saldo disponible en cuenta es menor al minimo de retiro. Su saldo en cuenta es: $" + saldoEnCuenta + ". Ingrese ' cancelar ' para volver al menu");
                let cancelarOperacion = (prompt("Ingrese 'cancelar' para cancelar y seguir operando."));
                while (cancelarOperacion != "cancelar"){
                    alert(nombreUsuario + ", el saldo disponible en cuenta es menor al minimo de retiro. Su saldo en cuenta es: $" + saldoEnCuenta + ". Ingrese ' cancelar ' para cancelar");
                    cancelarOperacion = (prompt("Ingrese 'cancelar' para cancelar y seguir operando."));
                }
            } else if (saldoEnCuenta >= 1000) {
                alert(nombreUsuario + ", puedes extraer minimamente $1.000 y tu saldo disponible en cuenta es: $" + saldoEnCuenta);
                let retiro = Number(prompt(nombreUsuario + ", su saldo disponible es: $ " + saldoEnCuenta + ". ingrese el monto a retirar:"));
                while (retiro < 1000){
                    alert(nombreUsuario + ", puedes extraer minimamente $1.000 y tu saldo disponible en cuenta es: $" + saldoEnCuenta);
                    retiro = Number(prompt(nombreUsuario + ", su saldo disponible es: $" + saldoEnCuenta + "ingrese el monto a retirar:"));
                }
                dineroExtraido()
                saldoEnCuenta = restar(saldoEnCuenta, retiro);
                alert("Su saldo en cuenta es: $" + saldoEnCuenta);
                saludoAgradecimiento()
            } else {
                while (retiro > saldoEnCuenta) {
                    retiro = Number(prompt(nombreUsuario + ", puede retirar minimamente $1.000 y su saldo disponible en cuenta que es: $" + saldoEnCuenta));
                }
                saldoEnCuenta = restar(saldoEnCuenta, retiro);
                alert("Su saldo en cuenta es: " + saldoEnCuenta);
                saludoAgradecimiento();
            }
            break;
    }
    queDeseaHacer = (prompt(nombreUsuario + ", para operar ingrese: 'deposito' o 'extraccion'. Para finalizar: 'salir'"));
}

function dineroExtraido() {
    alert("¡Exitoso! El dinero se ha extraido hacia tu billetera virtual.")
}

function saludoAgradecimiento() {
    alert("¡Gracias por operar con nuestra Billetera Virtual!")
}