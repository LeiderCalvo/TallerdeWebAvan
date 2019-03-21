import { depsArray } from '../stores/stores'

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

function getCategories(callback: (result: any)=> void) {
    fetch(`${apiRoot}/categories`)
        .then(( rawInfo ) => {
            return rawInfo.json();
        })
        .then(( departments ) => {
            callback(departments);
        });
}

export default {
    getDepartments,
    getCategories,
};