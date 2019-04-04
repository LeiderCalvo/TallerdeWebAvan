import React, { Component } from 'react';
import store from '../../stores/stores';
//import '../Card/Card.css';
import { observer } from 'mobx-react';
/*
@observer
class Card extends Component{

    constructor(props: {product: {}}){
        super(props);
    }

    render(){
        return <div className="CardCont">
            <h3>{this.props.product.name}</h3>
        </div>
    }
}*/
const root  = 'https://backendapi.turing.com/images/products/';

function Card(props: any) {
    //console.log(props.product.name);
    return <div className="CardCont">
        <img className="CardCont__img" src={root+props.product.thumbnail} alt=""/>
        <h3 className="CardCont__nombre" >{ props.product.name}</h3>
        <p className="CardCont__desc" >{props.product.description}</p>
        <div className="CardCont__price"><h3 className="CardCont__price__txt" >{props.product.price}</h3></div>
    </div>
}

export default Card;