const colors = require('colors');
const lugar = require('./lugar/lugar');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


lugar.getLugarLtLg(argv.direccion)
    .then(resp => {
        console.log("===========================".yellow);
        console.log("Lugar :", colors.yellow(argv.direccion.toUpperCase()));
        console.log('Temperatura : ', colors.yellow(resp.main.temp));
        console.log('Humedad     :', colors.yellow(`${resp.main.humidity}%`));
        console.log("===========================".yellow);
    })
    .catch(err => {
        const { response: { status } } = err;
        if (status === 404) {
            console.log('No se puede determinar el clima de', argv.direccion);
        }
    })