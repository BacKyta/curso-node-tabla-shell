const { argv } = require('./config/yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');


console.clear();
// console.log(argv);

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch( err => console.log( err ))





























// console.log( process.argv ); // con el slice(2) te devuelve los parametros de las banderas no los de node(donde se ejcura) y la direccion del archivo

// const [,, arg3 = 'base=5' ] = process.argv; 
// const [, base = 5 ] = arg3.split('=');// dive por el igual en 2 elementos y extraigo el segindo que es la nueva base

// console.log( base );
// const base = 3;

//* El package.json es el  punto inciial de cualquier poryecto en node, nos ayuda a sabar a nostros y a node
//* que comandos se ejecutan para ejecutar la apicacion, como los test o el build.

//* es el lugar donde se alamcena la informacion de la app, como el versionamiento nombre, 
//* licencias, dependencias que usara la app en desarrollo o produccion

//? Package lock.json

//* Aqui me cie como fueron construidas las dependencias, o como se deben construir las depndencias
//* que estan en el package.json

//* el package lock es donde se guarda informacion mas detallada de las versiones de las dependecias
//* que usa nuestro proyecto.

