import React, { Component } from 'react';
import store from '../../stores/stores';
import { observer } from 'mobx-react';
import '../Filters/Filters.css';

@observer
class Filters extends Component {

    constructor(props: {}){
        super(props);

        store.getColorValues();
        store.getSizeValues();
    }

    render() {
        return <div className='Filterscont'>
        <h3 className='Filterscont__cantidad'>{store.departments && `Filter ${store.departments.length} items`}</h3>
        <p>{store.currentFilter}</p>
        <h3>Color</h3>
        <div className='Filterscont__colors'>{
            
                store.colors && store.colors.map((color) => {
                    return <div key={color.attribute_value_id} className={store.currentColor == color.attribute_value_id? "Filterscont__colors__color__active" : "Filterscont__colors__color__cat"}>
                        <input type="checkbox" name={`${color.value}`}
                        onClick={() =>{
                            store.setColor(color.attribute_value_id);
                        }}/>
                        {color.value}
                    </div>
                })
            
        }</div>
        <h3>size</h3>
        <p>traer las size del api</p>
        <h3>Price Range</h3>
        <p>crear la barra de precio</p>
        <h3>Brand</h3>
        <p>Listado de marcas, desde el api</p>

        <button>Appley</button>
        <button>Clear all</button> 
    </div>
    }
}

export default Filters;