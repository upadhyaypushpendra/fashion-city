import React from "react";
import './cartdropdown.css';
import CartItem from "./CartItem";

export default function CartDropdown({display,cartItems,modifyItem,handleLinkClick,handleCheckoutClicked}) {
    return  display ? (
                <>
                <div className={"tip"} />
                <div className={"cart-dropdown"}>
                    <div className={"cart-items"}>
                        {
                            (cartItems && cartItems.length > 0) ?
                            (
                                <>
                                {cartItems.map(cartItem => <CartItem item={cartItem} modifyItem={modifyItem} key={cartItem.id} /> )}
                                    <button className={"custom-btn"} onClick={()=>{ handleCheckoutClicked(); handleLinkClick("/checkout");}}>Checkout</button>
                                </>
                            )
                        :
                            <span style={{color:"black"}} >Your Cart is Empty !!</span>
                        }
                    </div>
                </div>
                </>
                )
                :null;
}