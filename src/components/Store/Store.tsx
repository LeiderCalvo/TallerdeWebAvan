import React, { Component } from 'react';
import Filters from '../Filters/Filters';

class Store extends Component{

    render(){
        return <div>
            <h1>Store page</h1>

            <Filters />

            <p>productos</p>
        </div>
    }
}

export default Store;