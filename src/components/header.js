import React from 'react';
import {Link} from "react-router-dom";
import "./header.css"
import {useSelector} from "react-redux";

const Header = () => {
    const {selected} = useSelector(s => s)
    const totalQuantity = Object.values(selected).reduce((acc, rec)=> acc + rec , 0)
    return (
        <header>
            <div className="container">
               <div className="flex-parent">
                   <Link to="/" className="logo">e-commerce</Link>
                   <nav className="top-nav">
                       <Link to="/">Home</Link>
                       <Link to="/cart">Cart({totalQuantity})</Link>
                   </nav>
               </div>
            </div>
        </header>
    );
};

export default Header;