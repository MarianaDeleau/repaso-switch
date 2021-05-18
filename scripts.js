//📺 Televisor


// const prenderTele = confirm('Desea prender la tele?');
// let canal = 9;
// let volumen = 10;
// if(prenderTele){
//     alert(`canal:${canal} volumen:${volumen}`);
//     const menu = prompt('Ingrese una opcion');
//     switch (menu) {
//         case 'cambiar':
//             canal = prompt('ingrese un canal de 0 al 99')
//             break;
//         case 'siguiente':
//             canal++
//             break;
//         case 'anterior':
//             canal--
//             break;
//         case 'subir':
//             volumen += 5
//             break;
//         case 'bajar':
//             volumen -= 5
//             break;
//         case 'mutear':
//             volumen = 0
//             break;
//         default:
//             alert('opcion invalida')
//     }
//     alert(`canal:${canal} volumen:${volumen}`);
// }else{
//     alert('Chau');
// }



//🐛 Tamagochi 

// const tamagochi = 'Lolo';
// let salud = Math.floor((Math.random() * (11-0))+0);
// let felicidad = Math.floor((Math.random() * (11-0))+0);
// let limpieza = Math.floor((Math.random() * (11-0))+0);
// let energia = Math.floor((Math.random() * (11-0))+0);

// alert(`${tamagochi} = salud: ${salud}, felicidad: ${felicidad}, limpieza: ${limpieza} y energía: ${energia}`);

// const menu = prompt('Ingrese una acción: alimentar, jugar, dormir, vacunar, bañar, retar, acariciar');

// switch(menu) {

//     case 'alimentar':
//         energia = energia+3
//         felicidad = felicidad+2
//         break;

//     case 'jugar':
//         felicidad= felicidad+2
//         energia=energia+2
//         limpieza=limpieza-1
//         break;
//     case 'dormir':
//         salud= salud+2
//         energia=energia+5
//         limpieza=limpieza-2
//         break;    
//     case 'vacunar':
//         felicidad= felicidad-6
//         salud= salud+5
//         break;    
//     case 'bañar':
//         salud= salud+3
//         break;    
//     case 'retar':
//         felicidad= felicidad-3
//         break;    
//     case 'acariciar':
//         felicidad= felicidad+4
//         break;    
                    
// }

// alert(`${tamagochi} = salud: ${salud}, felicidad: ${felicidad}, limpieza: ${limpieza} y energía: ${energia}`);

// 🧮 Calculadora

// const form = document.getElementById("calculadora");

// console.log();

// const calcular = (event) => {
//   event.preventDefault();

//   const num1 = parseInt(event.target.num1.value);
//   const num2 = parseInt(event.target.num2.value);
//   const op = event.target.operacion.value;

//   let respuesta;

//   switch (op) {
//     case "suma":
//       respuesta = num1 + num2;
//       break;

//     case "resta":
//       respuesta = num1 - num2;
//       break;

//     case "multiplicacion":
//       respuesta = num1 * num2;
//       break;

//     default:
//       respuesta = num1 / num2;
//   }

//   rta.innerText = respuesta;
// };

// form.addEventListener("submit", calcular);

// 💵 ATM

let dinero = 5000;
const pin = prompt('ingrese pin');
if (pin==='0808'){

    const operacion = prompt('Ingrese una operación a realizar: EXTRAER, DEPOSITAR, TRASNFERIR, CAMBIAR PIN, SALIR');

    switch(operacion){
        case 'extraer':
                const mensajeExtraccion=prompt('cuanto desea extraer?');
                const extraccion=parseInt(mensajeExtraccion);
                let saldo=dinero-extraccion;
                if(extraccion<=dinero){
                    alert(`saldo restante: ${saldo} `);
                } else {
                    alert('saldo insuficiente')
                }
                break;

        case 'depositar':
                const mensajeDepositar=prompt('cuanto desea depositar?');
                const deposito=parseInt(mensajeDepositar);
                let saldo2=dinero+deposito
                alert(`saldo restante: ${saldo2}`);
                break;
        
        case 'transferir':
                const mensajeCbu=prompt('imgrese el CBU destinatario');
                const cbu1='2';
                const cbu2='3';
                const mensajeTransferir=prompt('cuanto desea trasferir?');
                const transferencia= parseInt(mensajeTransferir);
            if(mensajeCbu===(cbu1 || cbu2) && transferencia<=dinero){
                const saldo3=dinero-transferencia;
                alert(`saldo restante: ${saldo3}`);                
            } else {
                alert('Operación inválida');
            }
            break;
        
        case 'cambiar pin':
            prompt('imgrese el PIN nuevo');
            const mensajePinViejo=prompt('ingrese PIN anterior');
            if(mensajePinViejo===pin){
                alert('Operación confirmada');

            } else{ 
                alert('Operación inválida');
            }
            break;
        
            default:
            
            alert('gracias por su visita')
    }

} else {
    alert('PIN incorrecto, vuelva a empezar la operación');
}
