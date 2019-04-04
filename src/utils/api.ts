import { depsArray, catsArray, valuesArray, productsArray } from '../stores/stores'

//Base de la URL a la que se debe llamar para acceder al API(Base de datos y sus peticiones)
var apiRoot = 'https://backendapi.turing.com';

/*
    le digo a esta funcion "getDepartments" que llame a la funcion "callback" que le acabo de pasar, y que le pase el resultado llegado del api.
*/
function getDepartments(callback: (result: depsArray)=> void){
    /*
        fetch recibe la url completa del llamado al api, luego cuando llega la respuesta, llega a rawInfo y lo convierte a json, cuando esto ya se completo entonces (then), lo pasa a "departments" y lo mete como parametro a la funcion "callback", la cual cuando reciba el resultado hará lo que quiera con ella en el componente que fue creada. todo esto es Asincrono
    */
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

function getAttributesValues(attribute_id: String, callback: (result: valuesArray)=> void){
    fetch(`${apiRoot}/attributes/values/${attribute_id}`)
        .then(( rawInfo )=>{
            return rawInfo.json();
        })
        .then(( attributeValues )=>{
            callback(attributeValues);
        });
}

function getProducts(callback: (result: productsArray)=> void){
    fetch(`${apiRoot}/products`)
        .then(( rawInfo )=>{
            return rawInfo.json();
        })
        .then(( products )=>{
            callback(products.rows);
        });
}
//Exportar por funciones
export default {
    getDepartments,
    getCategories,
    getAttributesValues,
    getProducts,
};