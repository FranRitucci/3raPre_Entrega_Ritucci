let nombreUsuario = (prompt("Ingrese su nombre"));
let apellidoUsuario = (prompt("Ingrese su apellido"));
let suEdad = (prompt("Ingrese su edad"));
let queDeseaHacer = (prompt(nombreUsuario + ", para operar ingrese: 'deposito', 'extraccion' o ' mi perfil '. Para finalizar: 'salir'"));

let saldoEnCuenta = 0;

function sumar(parametro1, parametro2) {
    let saldoEnCuenta = parametro1 + parametro2;
    return saldoEnCuenta;
}

function restar(montoDisponible, montoExtraido) {
    saldoEnCuenta = montoDisponible - montoExtraido;
    return saldoEnCuenta;
}

function dineroExtraido() {
    alert("¡Exitoso! El dinero se ha extraido hacia tu billetera virtual.")
}

function saludoAgradecimiento() {
    alert("¡Gracias por operar con nuestra Billetera Virtual!")
}

while (queDeseaHacer != "salir") {
    while (queDeseaHacer != "extraccion" && queDeseaHacer != "deposito" && queDeseaHacer != "mi perfil") {
        alert("La operacion que sedea no se reconoce, ingrese 'deposito', 'extraccion' o ingrese 'mi perfil'");
        queDeseaHacer = prompt("Ingrese: deposito, extraccion o mi perfil");
    }

    switch (queDeseaHacer) {
        case "deposito":
            alert(nombreUsuario + ", puedes depositar un monto desde $5.000 hasta $20.000");
            let depositar = Number(prompt(nombreUsuario + ", ingrese el monto a depositar:"));
            if (depositar <= 20000 && depositar >= 5000) {
                saldoEnCuenta = sumar(saldoEnCuenta, depositar);
                alert(nombreUsuario + " ¡dinero acreditado! Su saldo en cuenta es: $" + saldoEnCuenta);
                saludoAgradecimiento();
            } else {
                while (depositar > 20000 || depositar < 5000) {
                    depositar = Number(prompt(nombreUsuario + ", puede depositar minimamente $5.000 y maximo $20.000"));
                }
                saldoEnCuenta = sumar(saldoEnCuenta, depositar);
                alert(nombreUsuario + " ¡dinero acreditado! Su saldo en cuenta es: $" + saldoEnCuenta);
                saludoAgradecimiento();
            }
            break;

        case "extraccion":
            if (saldoEnCuenta < 1000) {
                alert(nombreUsuario + ", el saldo disponible en cuenta es menor al minimo de retiro. Su saldo en cuenta es: $" + saldoEnCuenta + ". Ingrese ' cancelar ' para volver al menu");
                let cancelarOperacion = (prompt("Ingrese 'cancelar' para cancelar y seguir operando."));
                while (cancelarOperacion != "cancelar") {
                    alert(nombreUsuario + ", el saldo disponible en cuenta es menor al minimo de retiro. Su saldo en cuenta es: $" + saldoEnCuenta + ". Ingrese ' cancelar ' para cancelar");
                    cancelarOperacion = (prompt("Ingrese 'cancelar' para cancelar y seguir operando."));
                }
            } else if (saldoEnCuenta >= 1000) {
                alert(nombreUsuario + ", puedes extraer minimamente $1.000 y tu saldo disponible en cuenta es: $" + saldoEnCuenta);
                let retiro = Number(prompt(nombreUsuario + ", su saldo disponible es: $" + saldoEnCuenta + ". ingrese el monto a retirar:"));
                while (retiro < 1000) {
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

        case "mi perfil":
            const miUsuario = {
                nombre: nombreUsuario,
                apellido: apellidoUsuario,
                edad: suEdad,
                saldo: saldoEnCuenta,
                versionApp: "Version2.0"
            }
            alert("Detalles del usuario>> Nombre: " + miUsuario.nombre + " >Apellido: " + miUsuario.apellido + " >Edad: " + miUsuario.edad + " >Saldo: " + miUsuario.saldo + " >AppVersion: " + miUsuario.versionApp);
            break;
    }
    queDeseaHacer = (prompt(nombreUsuario + ", para operar ingrese: 'deposito', 'extraccion' o 'mi perfil'. Para finalizar: 'salir'"));
}