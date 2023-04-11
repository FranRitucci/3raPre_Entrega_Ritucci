let nombreUsuario = (prompt("Ingrese su nombre"));
let queDeseaHacer = (prompt("Ingrese: extraccion o deposito"));

switch (queDeseaHacer){
    case "extraccion":
        alert (nombreUsuario  + ", puedes extraer hasta $10 000");
        let retiro = Number (prompt("Ingrese el monto a retirar:"));
        if (retiro <=10000){
            alert("¡Exitoso! El dinero ya esta disponible en su billetera virtual");
        } else{
            alert ("El limite de retiro diario es $10,000. Ingrese ese importe o menos")
        }
        break;

    case "EXTRACCION":
        alert ("Puedes extraer hasta $10 000");
        break;

    case "deposito":
        alert ("Puedes depositar hasta $20 000");
        break;

    case "DEPOSITO":
        alert ("Puedes depositar hasta $20 000");
        break;
}