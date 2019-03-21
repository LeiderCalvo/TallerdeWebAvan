import { observable } from 'mobx';

import api from '../utils/api';

export type depsArray = { name: String, department_id: number }[];

class Store {

    @observable departments : depsArray | null = null;

    constructor(){
        //this.departments = observable.box(null);
    }

    getDepartments(){
        var callback = (result : depsArray) => {
            console.log('departamentos cargados', result);
            this.departments = result;
        }
        api.getDepartments(callback);
    }
}

const store = new Store();

export default store;