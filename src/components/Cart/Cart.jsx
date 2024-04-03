import classes from "./Cart.module.css";
import peach from "../../assets/peach.png";
import { NavLink } from 'react-router-dom';
import React from "react";

const Cart = ({data}) => {
    console.log (data);

    return (
        <div className={classes.form}>
            <NavLink to={`/cartInfo/${data.id}`}>
            <div className={classes.flex_container}>
                <h3 className={classes.text_form}> {data.name}</h3>
                <div className={classes.content}>
                    <img className={classes.image1} src={peach} alt="peach" />
                    <p className={classes.text_form}>
                        {data.description}
                     </p>
                </div>
            </div>
            </NavLink>
        </div>
    );
};

export default Cart;
