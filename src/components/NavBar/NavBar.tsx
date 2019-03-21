import React, { Component } from 'react';
import { observer } from 'mobx-react';
import '../NavBar/NavBar.css';
import store from '../../stores/stores';

const NavBar = () => {
    console.log(store.departments);
    if (!store.departments) return <p>Cargando...</p>;

    return (
        <nav className="container">
            <h1 className="container__logo">SHOPMATE</h1>

            <div className="container__links">
                {store.departments.map((dep) => {
                    return <a className="container__links__section" key={dep.department_id}
                        href={`/department/${dep.name}`}>
                        {dep.name}
                    </a>;
                })}
            </div>

            {//<ShearBar/>
                //<Cart/>
            }

        </nav>
    );
}


export default observer(NavBar);