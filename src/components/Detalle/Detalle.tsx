import React, { Component } from 'react';
import store from '../../stores/stores';
import { observer } from 'mobx-react';
//import '../Detalle/Detalle.css';

const root  = 'https://backendapi.turing.com/images/products/';

@observer
class Detalle extends Component {
    constructor(props: {}){
        super(props);
        store.getDetalle();
    }

    render() {
        return <div className='DetalleCont'>
        <img className="DetalleCont__img" src={store.detalle? root + store.detalle.thumbnail : ""} alt=""/>
        <h3 className="DetalleCont__nombre" >{ store.detalle && store.detalle.name}</h3>
        <p className="DetalleCont__desc" >{store.detalle && store.detalle.description}</p>
        <div className={`DetalleCont__price ${store.detalle && store.detalle.discounted_price == "0.00" && "discounted"}`}>
        <h3 className="DetalleCont__price__txt" >{store.detalle && store.detalle.discounted_price == "0.00"? store.detalle.price : store.detalle && store.detalle.discounted_price}</h3>
        </div>
        <button className="DetalleCont__btn" onClick={()=>{
            store.setBag(store.bag + 1);
            store.addItem();
        }}>Añadir al carrito</button>
    </div>
    }
}

export default Detalle;