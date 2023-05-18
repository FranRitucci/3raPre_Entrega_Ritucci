//ARRAY QUE CONSERVA LAS CONDICIONES DE SEGURIDAD PARA VALIDAR UN USUARIO HUMANO. PROMPTs CON WHILEs PARA VALIDAR LA RESPUESTA CORRECTA Y PERMITIR EL AVANCE
const validacionSeguridad = ["2 + 2 =", "3 x 3 =", "Escriba: aUtobUs", "Nombre propio de 6 letras:", "El ultimo campeon del mundo:"];

let domBienvenida = document.getElementById("domValidacion");
domBienvenida.innerHTML = "Resuelva las siguientes pautas para comprobar que usted NO es un robot:" ;

let seguridad0 = document.getElementById("validacion0");
seguridad0.innerHTML = `${validacionSeguridad[0]}`;
let input1 = document.getElementById("valorBox0")
input1.addEventListener('input', () => {
    console.log(input1.value)
});

if (input1.value != 4){
    let validacionErronea = document.getElementById("validacionCorrecta");
    validacionErronea.innerHTML = "Incorrecto";
    validacionCorrecta.className = "incorrecto";
    
} else{
    validacionErronea = document.getElementById("validacionCorrecta");
    validacionErronea.innerHTML = "Correcto";
    validacionCorrecta.className = "correcto";
}

let validarValor = document.getElementById("boxSecurity0");
validarValor.addEventListener("submit", validarEntrada);

function validarEntrada(e) {
    e.preventDefault ();
    console.log("Formulario validado");
}


let seguridad1 = document.getElementById("validacion1");
seguridad1.innerHTML = `${validacionSeguridad[1]}`;

let seguridad2 = document.getElementById("validacion2");
seguridad2.innerHTML = `${validacionSeguridad[2]}`;

let seguridad3 = document.getElementById("validacion3");
seguridad3.innerHTML = `${validacionSeguridad[3]}`;

let seguridad4 = document.getElementById("validacion4");
seguridad4.innerHTML = `${validacionSeguridad[4]}`;




// alert(validacionSeguridad[0]);
// let validacion1 = Number(prompt(""));
// while (validacion1 != 4) {
//     validacion1 = (prompt("2+2 ="));
// }
// alert(validacionSeguridad[1]);
// let validacion2 = Number(prompt(""));
// while (validacion2 != 9){
//     validacion2 = Number(prompt("3x3 ="));
// }
// alert(validacionSeguridad[2]);
// let validacion3 = (prompt(""));
// while (validacion3 != "aUtobUs"){
//     validacion3 = (prompt("aUtobUs ="));
// }
// alert(validacionSeguridad[3]);
// let validacion4 = (prompt(""));
// while (validacion4.length !== 6 ||/[^a-zA-Z]/.test(validacion4)){
//     validacion4 = (prompt("Un nombre de 6 letras ="));
// }
// alert(validacionSeguridad[4]);
// let validacion5 = (prompt(""));
// while (validacion5.toLowerCase() != "argentina"){
//     validacion5 = (prompt("La mejor seleccion de futbol mundial ="));
// }
// alert("Usted cumplio con la verificacion de seguridad y reconoce que la selccion ARGENTINA es la mas grande del mundo. Puede continuar");

// // //VARIABLES QUE CONFORMAN EL PERFIL DEL USUARIO Y LA OPERACION CON LA QUE DESEA PROCEDER
// let nombreUsuario = (prompt("Ingrese su nombre"));
// let apellidoUsuario = (prompt("Ingrese su apellido"));
// let suEdad = Number(prompt("Ingrese su edad"));
// let queDeseaHacer = (prompt(nombreUsuario + ", para operar ingrese: 'deposito', 'extraccion' o ' mi perfil '. Para finalizar: 'salir'"));

// //VARIABLE QUE CONSERVA EL SALDO EN CUENTA. INICIALIZADA EN 0 Y FUNCIONES QUE INCREMENTAN Y DECREMENTAN EL SALDO SEGUN DEPOSITOS Y EXTRACCIONES
// let saldoEnCuenta = 0;

// function sumar(parametro1, parametro2) {
//     let saldoEnCuenta = parametro1 + parametro2;
//     return saldoEnCuenta;
// }

// function restar(montoDisponible, montoExtraido) {
//     saldoEnCuenta = montoDisponible - montoExtraido;
//     return saldoEnCuenta;
// }

// //FUNCIONES PARA PRESENTAR ALERTAS DE CONFIRMACION Y SALUDO PARA EL USUARIO AL FINALIZAR LAS OPERACIONES
// function dineroExtraido() {
//     alert("¡Exitoso! El dinero se ha extraido hacia tu billetera virtual.")
// }

// function saludoAgradecimiento() {
//     alert("¡Gracias por operar con Billetera Virtual 2.0!")
// }

// //NUCLEO DEL PROGRAMA. WHILE QUE MANTIENE EL PROGRAMA EN CICLO - WHILE PARA VALIDAR EL INGRESO DE LAS OPERACIONES CORRECTAS - SWITCH QUE CONTIENE LAS OPERACIONES
// while (queDeseaHacer.toLowerCase() != "salir") {
//     while (queDeseaHacer.toLowerCase() != "extraccion" && queDeseaHacer.toLowerCase() != "deposito" && queDeseaHacer.toLowerCase() != "mi perfil") {
//         alert("La operacion que sedea no se reconoce, ingrese 'deposito', 'extraccion' o ingrese 'mi perfil'");
//         queDeseaHacer = prompt("Ingrese: 'deposito', 'extraccion' o 'mi perfil'");
//     }

//     switch (queDeseaHacer.toLowerCase()) {
//         case "deposito":
//             alert(nombreUsuario + ", puedes depositar un monto desde $5.000 hasta $20.000");
//             let depositar = Number(prompt(nombreUsuario + ", ingrese el monto a depositar:"));
//             if (depositar <= 20000 && depositar >= 5000) {
//                 saldoEnCuenta = sumar(saldoEnCuenta, depositar);
//                 alert(nombreUsuario + " ¡Dinero acreditado! Su saldo en cuenta es: $" + saldoEnCuenta);
//                 saludoAgradecimiento();
//             } else {
//                 while (depositar > 20000 || depositar < 5000) {
//                     depositar = Number(prompt(nombreUsuario + ", puede depositar minimamente $5.000 y maximo $20.000"));
//                 }
//                 saldoEnCuenta = sumar(saldoEnCuenta, depositar);
//                 alert(nombreUsuario + " ¡dinero acreditado! Su saldo en cuenta es: $" + saldoEnCuenta);
//                 saludoAgradecimiento();
//             }
//             break;

//         case "extraccion":
//             if (saldoEnCuenta < 1000) {
//                 alert(nombreUsuario + ", el saldo disponible en cuenta es menor al minimo de retiro. Su saldo en cuenta es: $" + saldoEnCuenta + ". Ingrese ' cancelar ' para volver al menu");
//                 let cancelarOperacion = (prompt("Ingrese 'cancelar' para cancelar y seguir operando."));
//                 while (cancelarOperacion.toLowerCase() != "cancelar") {
//                     alert(nombreUsuario + ", el saldo disponible en cuenta es menor al minimo de retiro. Su saldo en cuenta es: $" + saldoEnCuenta + ". Ingrese ' cancelar ' para cancelar");
//                     cancelarOperacion = (prompt("Ingrese 'cancelar' para cancelar y seguir operando."));
//                 }
//             } else if (saldoEnCuenta >= 1000) {
//                 alert(nombreUsuario + ", puedes extraer minimamente $1.000 y tu saldo disponible en cuenta es: $" + saldoEnCuenta);
//                 let retiro = Number(prompt(nombreUsuario + ", su saldo disponible es: $" + saldoEnCuenta + ". ingrese el monto a retirar:"));
//                 while (retiro < 1000 || retiro > saldoEnCuenta) {
//                     alert(nombreUsuario + ", puedes extraer minimamente $1.000 y tu saldo disponible en cuenta es: $" + saldoEnCuenta);
//                     retiro = Number(prompt(nombreUsuario + ", su saldo disponible es: $" + saldoEnCuenta + " ingrese el monto a retirar:"));
//                 }
//                 dineroExtraido()
//                 saldoEnCuenta = restar(saldoEnCuenta, retiro);
//                 alert("Su saldo en cuenta es: $" + saldoEnCuenta);
//                 saludoAgradecimiento()
//             } else {
//                 while (retiro > saldoEnCuenta) {
//                     retiro = Number(prompt(nombreUsuario + ", puede retirar minimamente $1.000 y su saldo disponible en cuenta que es: $" + saldoEnCuenta));
//                 }
//                 saldoEnCuenta = restar(saldoEnCuenta, retiro);
//                 alert("Su saldo en cuenta es: " + saldoEnCuenta);
//                 saludoAgradecimiento();
//             }
//             break;

//         case "mi perfil":
//             const miUsuario = {
//                 nombre: nombreUsuario,
//                 apellido: apellidoUsuario,
//                 edad: suEdad,
//                 saldo: saldoEnCuenta,
//                 versionApp: "Version2.0"
//             }
//             alert("Detalles del usuario>> Nombre: " + miUsuario.nombre + " >Apellido: " + miUsuario.apellido + " >Edad: " + miUsuario.edad + " >Saldo: " + miUsuario.saldo + " >AppVersion: " + miUsuario.versionApp);
//             break;
//     }
//     queDeseaHacer = (prompt(nombreUsuario + ", para operar ingrese: 'deposito', 'extraccion' o 'mi perfil'. Para finalizar: 'salir'"));
// }

// //ARRAY DE OBJETOS QUE CONTIENEN PERSONAS REPRESENTANTES DE BILLETERA VIRTUAL
// const representantes = [
//     {
//         nombre: "nicolas",
//         ubicacion: "buenos aires",
//         whatsapp: 1133557799
//     },
//     {
//         nombre: "santiago",
//         ubicacion: "interior de argentina",
//         whatsapp: 34222446688
//     },
//     {
//         nombre: "alejo",
//         ubicacion: "buenos aires",
//         whatsapp: 1144779900
//     },
//     {
//         nombre: "sofia",
//         ubicacion: "exterior de argentina",
//         whatsapp: 5580809256
//     },
//     {
//         nombre: "lola",
//         ubicacion: "exterior de argentina",
//         whatsapp: 5581899157,
//     },
// ];

// //ARRAY PEQUEÑO QUE CONTIENE LAS DOS SUCURSALES FISICAS ACTUALES
// const sucursales = ["*Sucursal1>> Pais: ESPAÑA - Direccion: Calle falsa 123", "**Sucursal2>> Pais: ARGENTINA - Direccion: Av. 9 de Julio 1535"];

// //VARIABLE QUE OFRECE CONOCER A LOS REPRESENTANTES O SALIR
// let contactarRepresentante = (prompt("Para conocer a nuestros representantes presione cualquier tecla. Si usted NO desea contactar con uno de nuestros representantes ingrese 'salir'"));

// //CICLO QUE CONTIENE LAS FUNCONES NECESARIAS PARA DEVOLVER VIA CONSOLA AL USUARIO LOS RESULTADOS DE UN REPRESENTANTE DEPENDIENDO SU UBICACION
// while (contactarRepresentante.toLowerCase() != "salir") {
//     let ubicacionUsuario = (prompt("ingrese su ubicacion: 'buenos aires', 'interior de argentina' o 'exterior de argentina'"));
//     while (ubicacionUsuario.toLowerCase() != "buenos aires" && ubicacionUsuario.toLowerCase() != "interior de argentina" && ubicacionUsuario.toLowerCase() != "exterior de argentina") {
//         ubicacionUsuario = (prompt("ingrese su ubicacion: 'buenos aires', 'interior de argentina' o 'exterior de argentina'"));
//     }
//     if (ubicacionUsuario.toLowerCase() === "buenos aires") {
//         const resultadoRepresentante1 = representantes.filter((localizacion) => localizacion.ubicacion.includes("buenos aires"));
//         console.log(resultadoRepresentante1);
//     } if (ubicacionUsuario.toLowerCase() === "interior de argentina") {
//         const resultadoRepresentante2 = representantes.filter((localizacion) => localizacion.ubicacion.includes("interior de argentina"));
//         console.log(resultadoRepresentante2);
//     } if (ubicacionUsuario.toLowerCase() === "exterior de argentina") {
//         const resultadoRepresentante3 = representantes.filter((localizacion) => localizacion.ubicacion.includes("exterior de argentina"));
//         console.log(resultadoRepresentante3);
//     }

//     contactarRepresentante = (prompt("Podra ver un asesor disponible segun su ubicacion ingresada en CONSOLA. Ingrese 'salir' para finalizar o presione cualquier tecla para continuar"));
// }

// //VARIABLE QUE OFRECE AL USUARIO CONOCER LAS SUCURSALES VIA ALERT. WHILE QUE DA LA POSIBILIDAD DE SALIR DEFINITIVAMENTE
// let conocerSucursales = (prompt("Para conocer nuestras sucursales y su ubicacion presione cualquier tecla. Para cancelar ingrese 'salir'"));
// while (conocerSucursales.toLocaleLowerCase() != "salir"){
//     alert(sucursales);

//     conocerSucursales = (prompt("Para ver nuestras sucursales nuevamente presione cualquier tecla. Para cancelar ingrese 'salir'"));
// }