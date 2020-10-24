import React from "react";
import './cartdropdown.css';
import CartItem from "./CartItem";

export default function CartDropdown({display,cartItems,handleDeleteItem,handleLinkClick}) {
    return  display ? (
                <>
                <div className={"tip"} />
                <div className={"cart-dropdown"}>
                    <div className={"cart-items"}>
                        {
                            (cartItems && cartItems.length > 0) ?
                            (
                                <>
                                {cartItems.map(cartItem => <CartItem item={cartItem} handleDeleteItem={handleDeleteItem} key={cartItem.id} /> )}
                                    <button className={"custom-btn"} onClick={()=>handleLinkClick("/checkout")}>Checkout</button>
                                </>
                            )
                        :
                            <span>Your Cart is Empty !!</span>
                        }
                    </div>
                </div>
                </>
                )
                :null;
}