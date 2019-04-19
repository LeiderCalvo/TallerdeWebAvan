import React, { Component } from 'react';
import '../../index.css';

class Searcher extends Component <any, any>{
    constructor(props:any){
        super(props);

        this.state = {
            isOpen: false,
        }

        this.descolapsar = this.descolapsar.bind(this);
    }

    descolapsar(){
        console.log(this);
        this.setState((estadoAnterios: any)=>{
            return {
                isOpen: !estadoAnterios.isOpen,
            };
        });
    }

    render(){
        return <div className="contenedor">
        <input
          onInput={(event) => {
            //this.props.onSearch(event.target.value);
          }}
          //value={this.props.value}
          type="text" 
          placeholder="su busqueda"
          className={`inputSearch ${this.state.isOpen == true ? "descolapsado" : ""}`}/>

          <img src="https://image.flaticon.com/icons/svg/149/149852.svg" className="imgSearch" onClick={this.descolapsar}/>
    </div>;
    }
}

export default Searcher;