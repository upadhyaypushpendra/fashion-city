import React, {useEffect,useContext} from 'react';
import { loadStripe } from '@stripe/stripe-js';
import './checkout.css';
import CheckoutItem from "./checkoutItem";
import {LogInContext} from "../../App";

const stripePromise = loadStripe('pk_test_51HffMDHoj35pmsJhqhxLkfvPxlfk15giHWKYYXKPqjTGiD5UTwnAD50RWT47Av4RqF4J9IDoHTCopQHZJZxdhrlj00j5hfPOuI');

export default  function Checkout(props) {
    const [totalAmount,setTotalAmount] = React.useState(0);

    const isLoggedIn = useContext(LogInContext);

    useEffect(()=>{
        let totalAmount=0;
        if( props.cartItems === undefined) totalAmount = 0;
        if(props.cartItems && props.cartItems.length === 0) totalAmount = 0;
        props.cartItems.forEach((item,index)=>{
            totalAmount+= item.price*item.quantity;
        });
        setTotalAmount(totalAmount);
    },[props.cartItems]);

    const handlePayNowClick= async (event)=>{
        event.target.setAttribute('disabled','true');
        // Get Stripe.js instance
        const stripe = await stripePromise;

        // Call your backend to create the Checkout Session
        const response = await fetch('https://fashion-city-server.herokuapp.com/create-checkout-session',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({items: props.cartItems})
        });
        const session = await response.json();

        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });
        if (result.error) {
            alert("Something went wrong!!\nTry Again");
            event.target.removeAttribute('disabled');
        }
    }

    return (
        <div className={"center column"} style={{margin:"100px 0"}}>
            <div className={"ckt-items"}>
                {
                    (props.cartItems && props.cartItems.length > 0) ?
                        (
                            <>
                                {props.cartItems.map(cartItem => <CheckoutItem item={cartItem} modifyItem={props.modifyItem} key={cartItem.id} /> )}
                            </>
                        )
                        :
                        <>
                            <h1 style={{color:"white"}} >Your Cart is Empty !!</h1>
                            <a href={"/home"}>
                                <h2>Shop Now</h2>
                            </a>
                        </>
                }
            </div>
            { props.cartItems.length > 0 && <div className={"total-price"} >Total Amount &nbsp; : &nbsp;&#8377;&nbsp;<span>{totalAmount}</span> </div> }
            <button className={"pay-btn"} disabled={props.cartItems.length <= 0 || !isLoggedIn} role="link" onClick={handlePayNowClick}>Proceed to Payment</button>
            {!isLoggedIn && <div style={{color:"red",fontSize:"2vw",marginBottom:"20px"}}>Please Sign in to purchase..!!</div>}
            <div style={{color:"red",fontSize:"2vw"}}>
                Test Card Details
                <ul>
                    <li>Card No : 4242 4242 4242 4242</li>
                    <li>Exp. Date : 01/21</li>
                    <li>CV : 123</li>
                </ul>
            </div>
        </div>
    );
}