import React from 'react';
import './product.css'
import {addToCart, removeFromCart} from "../redux/actions/shopActions";
import {useDispatch, useSelector} from "react-redux";
import Rating from "./rating";
import {Link} from "react-router-dom";

const Product = ({product}) => {
    const dispatch = useDispatch()
    const {selected} = useSelector(store => store)
    return (
        <div className="col-3">
            <div className="product">
                <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt=""/>
                </Link>
                <Rating rating={product.rating} color={'red'}/>
                <h2>{product.name}</h2>
                <p>{product.price}</p>
                <div className="cart-buttons">
                    <button className="removeFromCart" onClick={() => dispatch(removeFromCart(product.id))}>-</button>
                    <span>{selected[product.id] || 0}</span>
                    <button className="addToCart" onClick={() => dispatch(addToCart(product.id))}>+</button>
                </div>
            </div>
        </div>
    );
};

export default Product;