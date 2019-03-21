import React, { Component } from 'react';
import store from '../../stores/stores';
import { observer } from 'mobx-react';

@observer
class Filters extends Component {

    render() {
        if (!store.departments) return <p>Cargando departments ...</p>

        return <div>
        <h3>Filters</h3>
        {
            store.departments.map((dep) => {
                return <a key={dep.department_id}
                    href={`/department/${dep.name}`}>
                    {dep.name}
                </a>;
            })
        }
        {/*<button onClick={this.props.onAdd}>Ver más</button>*/}
    </div>
    }
}

export default Filters;