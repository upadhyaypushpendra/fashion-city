import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import './checkout.css';
import CheckoutItem from "./checkoutItem";

const stripePromise = loadStripe('pk_test_51HffMDHoj35pmsJhqhxLkfvPxlfk15giHWKYYXKPqjTGiD5UTwnAD50RWT47Av4RqF4J9IDoHTCopQHZJZxdhrlj00j5hfPOuI');

class Checkout extends React.Component{
    constructor(props) {
        super(props);
        this.state = {totalAmount:0};
        this.handlePayNowClick=this.handlePayNowClick.bind(this);
    }
    componentDidMount() {
        if( this.props.cartItems === undefined) return 0;
        if(this.props.cartItems && this.props.cartItems.length === 0) return 0;
        let totalAmount=0
        this.props.cartItems.forEach((item,index)=>{
            totalAmount+= item.price*item.quantity;
        });
        this.setState({'totalAmount':totalAmount});
    }
    async handlePayNowClick(event){
        event.target.setAttribute('disabled','true');
        // Get Stripe.js instance
        const stripe = await stripePromise;

        // Call your backend to create the Checkout Session
        const response = await fetch('/create-checkout-session',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: this.props.cartItems})
        });

        const session = await response.json();

        /*if(!session.ok){
            alert("Something went wrong!!\nTry Again");
            event.target.removeAttribute('disabled');
        }*/
        // When the customer clicks on the button, redirect them to Checkout.

        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });
        if (result.error) {
            alert("Something went wrong!!\nTry Again");
            event.target.removeAttribute('disabled');
        }
    }
    render() {
        return (
            <div className={"center column"} style={{margin:"100px 0"}}>
                <div className={"ckt-items"}>
                    {
                        (this.props.cartItems && this.props.cartItems.length > 0) ?
                            (
                                <>
                                    {this.props.cartItems.map(cartItem => <CheckoutItem item={cartItem} modifyItem={this.props.modifyItem} key={cartItem.id} /> )}
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
                { this.props.cartItems.length > 0 && <div className={"total-price"} >Total Amount &nbsp; : &nbsp;&#8377;&nbsp;{this.state.totalAmount} </div> }
                <button className={"pay-btn"} disabled={this.props.cartItems.length <= 0} role="link" onClick={this.handlePayNowClick}>Proceed to Payment</button>
            </div>

        );
    }
}
export  default Checkout;