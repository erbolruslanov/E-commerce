import React from 'react';
import './catalog.css'
import Product from "./product";
import {useSelector, useDispatch} from "react-redux";
import {sortCatalog} from "../redux/actions/shopActions";

const Catalog = () => {
    const {catalog} = useSelector(s => s)
    const dispatch = useDispatch()
    return (
        <div className="catalog">
            <select onChange={(e)=> dispatch(sortCatalog(e.target.value, catalog))}>
                <option value="lower">Th highest</option>
                <option value="high">To lowest</option>
                <option value="a-z">A-Z</option>
                <option value="z-a">Z-A</option>
            </select>
            <div className="row">
                {catalog.map(product => <Product product={product}  key={product.id}/>)}
            </div>
        </div>
    );
};

export default Catalog;