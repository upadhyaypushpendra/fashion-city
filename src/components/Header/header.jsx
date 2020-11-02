import React, {useContext} from "react";
import './header.css';
import logo from './../../icons/logo.png';
import emptyCart from './../../icons/empty-cart.svg';
import filledCart from './../../icons/filled-cart.svg';

import CartDropdown from "../CartDropdown/cartDropdown";
import {LogInContext} from "../../App";

export default function Header({handleLinkClick,cartItems,modifyItem,onSignOut}){
    const isLoggedIn = useContext(LogInContext);
    const[displayDropdown,setDisplayDropdown] = React.useState(false);
    const handleCartClick = ()=>{
        setDisplayDropdown(!displayDropdown);
    };
    return (
        <header className={"header"}>
            <img  src={logo} className={"logo center"} alt={"Shop"} onClick={()=>handleLinkClick("/")}/>
            <span  className={"app-title"} onClick={()=>handleLinkClick("/")} >Fashion City</span>
            <nav className={"navigation"}>
                {isLoggedIn ? <div className={"center nav-item"}  onClick={()=>onSignOut()} >SIGN OUT</div> : <div className={"center nav-item"}  onClick={()=>handleLinkClick("/login")} >SIGN IN</div>}
                <div className={"nav-item center"} onClick={handleCartClick} >
                    <img className={"icon"} alt={"Cart"} src={ cartItems.length > 0 ? filledCart  : emptyCart}  />
                    <div style={{fontSize:"12px"}}>Cart</div>
                </div>

            </nav>
            <CartDropdown display={displayDropdown} cartItems={cartItems} handleCheckoutClicked={handleCartClick} modifyItem={modifyItem} handleLinkClick={handleLinkClick}/>
        </header>
    );
}