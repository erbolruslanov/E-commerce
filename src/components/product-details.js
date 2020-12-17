import React from 'react';
import { useParams } from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux";
import "./product-details.css"
import Rating from "./rating";
import {addToCart, removeFromCart} from "../redux/actions/shopActions";


const ProductDetails = () => {
    const dispatch = useDispatch()
    const {id} = useParams()
    const {catalog} = useSelector(store => store)
    const {selected} = useSelector(store => store)
    const product = catalog ? catalog.find(el => el.id === id) : null
    if(!product) return null
    return (
        <div className='product-details'>
            <div>
                <img src={product.image} alt="" />
            </div>
            <div>
                <h2>{product.name}</h2>
                <Rating rating={product.rating}/>
                <p>Description:{product.description}</p>
                <span>Price:{product.price}$</span>
                <div className="cart-buttons">
                    <button className="removeFromCart" onClick={() => dispatch(removeFromCart(product.id))}>-</button>
                    <span>{selected[product.id] || 0}</span>
                    <button className="addToCart" onClick={() => dispatch(addToCart(product.id))}>+</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;