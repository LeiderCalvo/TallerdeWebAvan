import React, { Component } from 'react';
import { observer } from 'mobx-react';
import '../NavBar/NavBar.css';
import store from '../../stores/stores';

const NavBar = () => {
    if (!store.departments) return <p>Cargando...</p>;
    return (
        <nav className="container">
            <h1 className="container__logo">SHOPMATE</h1>

        {//aunque es una funcion,por ser @computed se comporta como una variable y la llamo como tal
        }
        <h1>{store.pageTitle}</h1>

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

            {//<ShearBar/>
                //<Cart/>
            }

        </nav>
    );
}


export default observer(NavBar);