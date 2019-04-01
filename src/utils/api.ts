import { depsArray, catsArray } from '../stores/stores'

//Base de la URL a la que se debe llamar para acceder al API(Base de datos y sus peticiones)
var apiRoot = 'https://backendapi.turing.com';

function getDepartments(callback: (result: depsArray)=> void){
    fetch(`${apiRoot}/departments`)
        .then(( rawInfo ) => {
            return rawInfo.json();
        })
        .then(( departments ) => {
            callback(departments);
        });
}

function getCategories(callback: (result: catsArray)=> void) {
    fetch(`${apiRoot}/categories`)
        .then(( rawInfo ) => {
            return rawInfo.json();
        })
        .then(( categories ) => {
            callback(categories.rows);
        });
}

//Exportar por funciones
export default {
    getDepartments,
    getCategories,
};