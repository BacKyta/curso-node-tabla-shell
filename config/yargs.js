const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

require('colors');

const argv = yargs(hideBin(process.argv))
                .option('b', {
                    alias:'base',
                    type: 'number',
                    demandOption: true, // requerido
                    describe:'Es la base de la tabal de multiplicar'
                })
                .option('l', {
                    alias:'listar',
                    type: 'boolean',
                    default: false,
                    describe:'Muestra la tabla en consola'
                })
                .option('h', {
                    alias:'hasta',
                    type: 'number',
                    default: false,
                    describe:'Hasta cuanto es la tabla'
                })
                .check((argv, options) =>{
                    if ( isNaN( argv.b )) {
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })
                .argv;


module.exports = {argv};