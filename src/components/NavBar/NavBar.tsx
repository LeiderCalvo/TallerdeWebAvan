import React, { Component } from 'react';
import { observer } from 'mobx-react';
import '../NavBar/NavBar.css';
import Bag from '../Bag/Bag';
import Searcher from '../Searcher/Searcher';
import store from '../../stores/stores';

const NavBar = () => {
    if (!store.departments) return <p>Cargando...</p>;
    return (
        <nav className="container">
            <h1 className="container__logo">SHOPMATE</h1>

        {//aunque pageTitle es una funcion,por ser @computed se comporta como una variable y la llamo como tal
        }
            <div className="container__links">
                {store.departments.map((dep) => {
                    return <div className={store.currentDept == dep.department_id? "container__links__section__active" : "container__links__section"} key={dep.department_id}
                        onClick={() =>{
                            store.currentDept = dep.department_id;
                        }}>
                        {dep.name}
                    </div>;
                })}
            </div>

            <Searcher/>
            <Bag/>
            <p>{store.bag}</p>
        </nav>
    );
}


export default observer(NavBar);