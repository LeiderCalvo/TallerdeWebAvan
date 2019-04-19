import React, { Component } from 'react';
import store from '../../stores/stores';
//import '../Card/Card.css';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
const root  = 'https://backendapi.turing.com/images/products/';

function Card(props: any) {
    //console.log(props.product.name);
    return <div className="CardCont">
        <img className="CardCont__img" src={root+props.product.thumbnail} alt=""/>
        <h3 className="CardCont__nombre" >{ props.product.name}</h3>
        <p className="CardCont__desc" >{props.product.description}</p>
        <div className={`CardCont__price ${props.product.discounted_price == "0.00" && "discounted"}`}>
        <h3 className="CardCont__price__txt" >{props.product.discounted_price == "0.00"? props.product.price : props.product.discounted_price}</h3>
        </div>
        <button className="CardCont__btn" onClick={()=>{
            store.setDetallle(props.product);
            console.log("seteando", props.product.name)
        }}><Link to="/Detalle">Ver Detalle</Link></button>
    </div>
}

export default Card;