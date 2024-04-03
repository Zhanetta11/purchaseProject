import React from 'react';
import classes from "./CartInfo.module.css";
import peach from "../../assets/peach.png";

const CartInfo = () => {
    return (
        <div className={classes.form}>
            <div className={classes.flex_container_info}>
                <h3 className={classes.text_form_name}>Purchase name</h3>
                <div className={classes.text_block}>
                    <img className={classes.peachInfo} src={peach} alt="peach" />
                    <p className={classes.text_form_info}>The official React documentation has shifted its recommendation for beginners away from using <a href="https://create-react-app.dev/">create-react-app.</a>  Instead, they now advise using fully-fledged React frameworks like <a href="https://nextjs.org/">Next.js,</a> <a href="https://remix.run/">Remix,</a>  or <a href="https://www.gatsbyjs.com/">Gatsby.</a> One possible reason for this change is that the React team may have recognised some issues with create-react-app or the shortcomings of single-page applications. However, if you’re looking to use React without a framework,<a href="https://vitejs.dev/"> Vite</a> is an excellent choice. Vite is a powerful bundler that offers a React template out of the box. In this article, we’ll guide you through the process of installing React using Vite.</p>
                </div>
                </div>
            </div>
        );
    };

    export default CartInfo;