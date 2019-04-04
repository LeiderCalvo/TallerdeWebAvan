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
                        <input type="checkbox" checked={store.currentColor == color.attribute_value_id? true : false} name={`${color.value}`}
                        onChange={() =>{
                            store.setColor(color.attribute_value_id);
                        }}/>
                        {color.value}
                    </div>
                })
            
        }</div>

        <h3>size</h3>
        <div className='Filterscont__sizes'>{
            
            store.sizes && store.sizes.map((size) => {
                return <div key={size.attribute_value_id} className={store.currentSize == size.attribute_value_id? "Filterscont__sizes__size__active" : "Filterscont__sizes__size__cat"}>
                    <input type="checkbox" checked={store.currentSize == size.attribute_value_id? true : false} name={`${size.value}`}
                    onChange={() =>{
                        store.setSize(size.attribute_value_id);
                    }}/>
                    {size.value}
                </div>
            })
        
        }</div>

        <h3>Precio</h3>
        <div className='Filterscont__dobleSlider'>
            <input min='0' max='100' step='0.5' type="range" name='rangoPrecio'/>
            <input min='0' max='100' step='0.5' type="range" name='rangoPrecio2'/>
        </div>
        
        {/* no el api de esto
            <h3>Brand</h3>
            <p>Listado de marcas, desde el api</p>
           */ 
        }

        <button onClick={()=>{

        }}>Appley</button>
        <button onClick={()=>{
          store.setCategorie(null);
          store.setColor(null);
          store.setDepartment(null);
          store.setSize(null);
        }}>Clear all</button> 
    </div>
    }
}

export default Filters;