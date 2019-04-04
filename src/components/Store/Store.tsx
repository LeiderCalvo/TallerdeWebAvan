import React, { Component } from 'react';
import Filters from '../Filters/Filters';
import store from '../../stores/stores';
import '../Store/Store.css';
import { observer } from 'mobx-react';
import Card from '../Card/Card';

@observer
class Store extends Component{

    constructor(props: {}){
        super(props);

        store.getCategories();
        store.getProducts();
    }

    render(){
        return <div className="StoreCont">
            <div className="StoreCont__cats">
                {
                    store.categories && store.categories.map((cat) => {
                        return cat.department_id == store.currentDept && <div key={cat.category_id} className={store.currentCat == cat.category_id? "StoreCont__cats__cat__active" : "StoreCont__cats__cat"}
                            onClick={() =>{
                                store.setCategorie(cat.category_id);
                            }}>
                            {cat.name}  
                        </div>
                    })
                }
            </div>

            <div className="StoreCont__products">
                <div className="StoreCont__products__filters"><Filters/></div>
                <div className='StoreCont__products__prods'>{
                    store.products && store.products.map((p)=>{
                        return <div key={p.product_id}>
                                <Card product={p}/>
                            </div>
                    })
                }</div>
            </div>

        </div>
    }
}

export default Store;