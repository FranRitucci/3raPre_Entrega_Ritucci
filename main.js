let nombreUsuario = (prompt("Ingrese su nombre"));
let queDeseaHacer = (prompt(nombreUsuario + ", para operar ingrese: 'deposito' o 'extraccion'. Para finalizar: 'salir'"));

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
                dineroAcreditado();
                saludoAgradecimiento();
            } else {
                while (depositar > 20000 || depositar < 5000) {
                    depositar = Number(prompt(nombreUsuario + ", puede depositar minimamente $5.000 y maximo $20.000"));
                }
                dineroAcreditado();
                saludoAgradecimiento();
            }
            break;

        case "extraccion":
            alert(nombreUsuario + ", puedes extraer un monto desde $1.000 hasta $10.000");
            let retiro = Number(prompt(nombreUsuario + ", ingrese el monto a retirar:"));
            if (retiro <= 10000 && retiro >= 1000) {
                dineroExtraido();
                saludoAgradecimiento();
            } else {
                while (retiro > 10000 || retiro < 1000) {
                    retiro = Number(prompt(nombreUsuario + ", puede retirar minimamente $1.000 y maximo $10.000"));
                }
                dineroExtraido();
                saludoAgradecimiento();
            }
            break;
    }
    queDeseaHacer = (prompt(nombreUsuario + ", para operar ingrese: 'deposito' o 'extraccion'. Para finalizar: 'salir'"));
}

function dineroExtraido() {
    alert("¡Exitoso! El dinero ya esta disponible en tu billetera virtual.")
}

function dineroAcreditado() {
    alert("¡Exitoso! El dinero se acreditara en los proximos minutos en tu cuenta.")
}

function saludoAgradecimiento() {
    alert("¡Gracias por operar con nuestra Billetera Virtual!")
}