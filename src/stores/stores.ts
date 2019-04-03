import { observable, autorun, toJS, action, computed } from 'mobx';

import api from '../utils/api';

//Crear tipos de datos y exportarlos para usarlos en otras clases
export type depsArray = { name: String, department_id: number }[];
export type catsArray = { name: String, category_id: number, department_id: number }[];
export type valuesArray = { attribute_value_id: number, value: String}[];

//Esta clase debe encargarse de hacer las llamadas al api
class Store {

    //mobx nos permite tener variables observadas, que notifican sus cambios automaticamente
    //En typeScript a cada variable se le debe definir su o sus tipos de dato
    @observable departments : depsArray | null  = null;
    @observable categories : catsArray  | null | false = null;
    @observable colors : valuesArray | null | false = null;
    @observable sizes : valuesArray | null | false = null;
    
    @observable loadingdeps : boolean = false;
    @observable currentDept: number  | null =  null;
    @observable currentCat: number  | null =  null;
    @observable currentColor: number  | null =  null;
    @observable currentSize: number  | null =  null;

    //@computed sirve para hacer que un valor que depende de otros se auto actualize
    @computed get currentFilter(){
        var dep = this.departments && this.departments.find(e => e.department_id == this.currentDept);
        var cat = this.categories && this.categories.find(e => e.category_id == this.currentCat);

        var res = `${dep ? 'Deparment: ' + dep.name : ''} ${cat ? ', Categorie: ' + cat.name : ''}`;
        return res;
    }



    constructor(){
        //this.departments = observable.box(null);
    }

    //Trae desde el api o desde el local storage los datos de los departamentos
    @action getDepartments(){
        //La llamada al api es asincrona, por eso usamos este boolean que nos diga si una llamada ya esta en ejecucion
        if(this.loadingdeps)return;

        var deptsLocal = localStorage.getItem('departments');
        var deptsLocalTime = localStorage.getItem('departments-time');
        //Si existen datos en el localStorage y ademas llevan menos de 10 días, traemos los datos del localStorage
        //Date.now() retorna el tiempo en milisegundos que ha pasado desde 1970. Medida llamada UNIX
        if(deptsLocal && deptsLocalTime && Date.now() - JSON.parse(deptsLocalTime) < 10 * 24 * 60 * 60 * 1000){
            this.departments = JSON.parse(deptsLocal);
            return;
        }

        //Digo que una llamada al api fue echa
        this.loadingdeps = true;
        var callback = (result : depsArray) => {
            console.log('departamentos cargados', result);
            
            this.departments = result;
            //Meto los datos que llegaron al api, al localStorage para asi no volver a hacer la peticion
            localStorage.setItem('departments', JSON.stringify(toJS(result)));
            localStorage.setItem('departments-time', JSON.stringify(toJS(Date.now())));
        }
        api.getDepartments(callback);
    }



    @action setDepartment(id : number | null){
        this.currentDept = id;
        this.currentCat = null;
    }

    @action setCategorie(id : number | null){
        this.currentCat = id;
    }

    @action setColor(id : number | null){
        this.currentColor = id;
    }

    @action setSize(id : number | null){
        this.currentSize = id;
    }



    //@action sirve para darle a una funcion la capacidad de modificar una variable observable
    @action getCategories(){
        //Si ya existen las categorias, no hago llamada al api
        if(this.categories != null)return;

        var catsLocal = localStorage.getItem('categories');
        var catsLocalTime = localStorage.getItem('categories-time');

        //Si existen datos en el localStorage y ademas llevan menos de 10 días, traemos los datos del localStorage
        //Date.now() retorna el tiempo en milisegundos que ha pasado desde 1970. Medida llamada UNIX
        if(catsLocal && catsLocalTime && Date.now() - JSON.parse(catsLocalTime) < 10 * 24 * 60 * 60 * 1000){
            this.categories = JSON.parse(catsLocal);
            return;
        }

        //Digo que una llamada al api fue echa
        this.categories = false;
        api.getCategories((result : catsArray) => {
            console.log('categorias cargadas', result);
            this.categories = result;

            //Meto los datos que llegaron al api, al localStorage para asi no volver a hacer la peticion
            localStorage.setItem('categories', JSON.stringify(toJS(result)));
            localStorage.setItem('categories-time', JSON.stringify(toJS(Date.now())));
        });
    }


    @action getColorValues(){
        if(this.colors != null)return;
        
        var colorValues = localStorage.getItem('colorValues');
        var colorLocalTime = localStorage.getItem('colorValues-time');
        
        if(colorValues && colorLocalTime && Date.now() - JSON.parse(colorLocalTime) < 10 * 24 * 60 * 60 * 1000){
            this.colors = JSON.parse(colorValues);
            return;
        }
        
        //Digo que una llamada al api fue echa
        this.colors = false;
        api.getAttributesValues('2', (result : valuesArray) => {
            console.log('valores de color cargados', result);
            this.colors = result;
            
            localStorage.setItem('colorValues', JSON.stringify(toJS(result)));
            localStorage.setItem('colorValues-time', JSON.stringify(toJS(Date.now())));
        });
    }

    @action getSizeValues(){
        if(this.sizes != null)return;

        var sizeValues = localStorage.getItem('sizeValues');
        var sizeLocalTime = localStorage.getItem('sizeValues-time');

        //Si existen datos en el localStorage y ademas llevan menos de 10 días, traemos los datos del localStorage
        if(sizeValues && sizeLocalTime && Date.now() - JSON.parse(sizeLocalTime) < 10 * 24 * 60 * 60 * 1000){
            this.sizes = JSON.parse(sizeValues);
            return;
        }

        //Digo que una llamada al api fue echa
        this.sizes = false;
        api.getAttributesValues('1', (result : valuesArray) => {
            console.log('valores de size cargados', result);
            this.sizes = result;

            //Meto los datos que llegaron al api, al localStorage para asi no volver a hacer la peticion
            localStorage.setItem('sizeValues', JSON.stringify(toJS(result)));
            localStorage.setItem('sizeValues-time', JSON.stringify(toJS(Date.now())));
        });
    }
}

const store = new Store();

//corre automaticamente cuando una variable,que uso en el cuerpo de esta funcion,cambia
autorun(()=>{
    
});
export default store;