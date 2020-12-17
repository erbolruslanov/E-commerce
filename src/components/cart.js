import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import "./cart.css"
import {addToCart, removeFromCart} from "../redux/actions/shopActions";
import Message from "./message";

const Cart = () => {
    const dispatch = useDispatch()
    const {catalog} = useSelector(store => store)
    const {selected} = useSelector(store => store)
    const cart = catalog.filter(el => Object.keys(selected).includes(el.id))
    console.log(cart)
    const totalPrice = cart.reduce((acc, rec) => {
           return  acc + (rec.price * selected[rec.id])
        }, 0)

    return (
        <>
            {
                !cart.length ?
                    <Message>
                        <Link to="/">Empty</Link>
                        click here
                    </Message>
                    :
                    <React.Fragment>
                        <table className="cart-table">
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                            {
                                cart.map((el) => (
                                    <tr>
                                        <td>
                                            <img src={el.image} alt="" className="cart-img"/>
                                        </td>
                                        <td>
                                            <h2>{el.name}</h2>
                                        </td>
                                        <td>{el.price}</td>
                                        <td>
                                            <div className="cart-buttons">
                                                <button className="removeFromCart" onClick={() => dispatch(removeFromCart(el.id))}>-</button>
                                                <span>{selected[el.id] || 0}</span>
                                                <button className="addToCart" onClick={() => dispatch(addToCart(el.id))}>+</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </table>
                        <h2>total:{totalPrice}$</h2>
                    </React.Fragment>
            }
        </>
    );
};

export default Cart;