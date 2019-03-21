import { observable } from 'mobx';

import api from '../utils/api';

export type depsArray = { name: String, department_id: number }[];
export type catsArray = { name: String, category_id: number, department_id: number }[];

class Store {

    @observable departments : depsArray | null  = null;
    @observable loadingdeps : boolean = false;
    @observable categories : catsArray  | null | false = null;

    constructor(){
        //this.departments = observable.box(null);
    }

    getDepartments(){
        if(this.loadingdeps)return;

        this.loadingdeps = true;
        var callback = (result : depsArray) => {
            console.log('departamentos cargados', result);
            this.departments = result;
        }
        api.getDepartments(callback);
    }

    getCategories(){
        if(this.categories != null)return;

        this.loadingdeps = false;
        api.getCategories((result : catsArray) => {
            console.log('categorias cargadas', result);
            this.categories = result;
        });
    }
}

const store = new Store();

export default store;