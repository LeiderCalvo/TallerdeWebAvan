import React, { Component } from 'react';
import store from '../../stores/stores';
import { observer } from 'mobx-react';

@observer
class Filters extends Component {

    constructor(props: {}){
        super(props);

        store.getCategories();
    }

    render() {
        return <div>
        <h3>{store.departments ? 'Departamentos' : 'Loading departments'}</h3>
        {
            store.departments && store.departments.map((dep) => {
                return <div className={store.currentDept == dep.department_id? "container__links__section__active" : "container__links__section"} key={dep.department_id}
                onClick={() =>{
                    store.currentDept = dep.department_id;
                }}>
                {dep.name}
            </div>;
            })
        }

        <h3>{store.categories ? 'Categorias' : 'Loading categories'}</h3>
        {
            store.categories && store.categories.map((cat) => {
                return cat.department_id == store.currentDept && <a key={cat.category_id}
                    href={`/department/${cat.name}`}>
                    {cat.name}  
                </a>
            })
        }

        {/*<button onClick={this.props.onAdd}>Ver más</button>*/}
    </div>
    }
}

export default Filters;