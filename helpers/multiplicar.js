const fs = require('node:fs');

const colors = require('colors');

const crearArchivo = async ( base = 5, listar = false, hasta = 20 ) =>{

    try {

        let salida  = '';
        let consola = '';
    
        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ base * i}\n`;
            consola += `${ base } ${'x'.green} ${ i } ${'='.green} ${ base * i}\n`;
        }

        if ( listar ) {
            console.log('=================='.green);
            console.log('Tabla del: '.green, colors.blue( base )  );
            console.log('=================='.green);
            console.log(consola);
        }
    
        //* Si sucede un error se atrapa mediante try catch
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida ); // toma como base la carpeta actual para crear el archivo y alamcenarlo
     
        return `tabla-${ base }.txt`; 

    } catch (error) {
        throw error;
    }

}

module.exports = { crearArchivo };

//? Esto se ejecuta dentro del callback si es writeFile
//if (err) throw err; // da error cuando no hay permisos de escritura en la carpeta
