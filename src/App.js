import React from 'react';
import './App.css';
import Header from "./components/Header/header";
import {Switch,Route} from "react-router-dom";
import Home from "./components/Home/home";
import SignIn from "./components/SignIn/signin";
import Shop from "./components/Shop/shop";
import Checkout from "./components/Checkout/chekout";
import PaymentSuccess from "./components/PaymentSuccess/paymentSuccess";

export const LogInContext = React.createContext(null);

function App(props) {
    const [cartItems,setCartItems] = React.useState(JSON.parse(localStorage.getItem('cartItems')) || []);
    const [isLoggedIn,setIsLoggedIn] = React.useState(localStorage.getItem('isLoggedIn') && localStorage.getItem("isLoggedIn")==="true");
    const handleLinkClick = (link) =>{
        props.history.push(link);
    };
    const modifyItem=(operation,item)=>{
        let itemsCopy = [...cartItems];
        let foundItem;
        switch (operation) {
            case "add" :
                foundItem = itemsCopy.find((it)=> it.id === item.id);
                if(foundItem) {
                    foundItem.quantity++;
                } else {
                    item.quantity = 1;
                    itemsCopy.push(item);
                }
                break;
            case "delete" :
                itemsCopy = itemsCopy.filter(itm=> itm.id!== item.id);
                break;
            case "increase":
                foundItem = itemsCopy.find((it)=> it.id === item.id);
                foundItem.quantity +=1;
                break;
            case "decrease":
                foundItem = itemsCopy.find((it)=> it.id === item.id);
                foundItem.quantity -=1;
                if(foundItem.quantity <=0){
                    modifyItem("delete",foundItem);
                    return;
                }
                break;
            default:
        }
        localStorage.setItem('cartItems',JSON.stringify(itemsCopy));
        setCartItems(itemsCopy);
    };

    const onSignIn=()=>{
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn","true");
        props.history.push("/");
    };
    const onSignOut=()=>{
        localStorage.setItem("isLoggedIn","false");
        setIsLoggedIn(false);
    };
    const onPaymentSuccess = ()=>{
        localStorage.setItem('cartItems',JSON.stringify([]));
        setCartItems([]);
    };
    return (
        <LogInContext.Provider value={isLoggedIn} >
            <div className="App">
                <Header handleLinkClick={handleLinkClick} onSignOut={onSignOut} cartItems={cartItems} modifyItem={modifyItem} />
                <Switch>
                    <Route path={"/login"} component={(props)=><SignIn onSignIn={onSignIn} onSignOut={onSignOut} {...props}/>}/>
                    <Route path={"/payment_success"} component={(props)=> <PaymentSuccess onPaymentSuccess={onPaymentSuccess} {...props}/>}/>
                    <Route path={"/checkout"} component={(props)=> <Checkout cartItems={cartItems} modifyItem={modifyItem} handleLinkClick={handleLinkClick} {...props}/>}/>
                    <Route exact={true} path={"/shop/:category"} component={(props)=><Shop modifyItem={modifyItem} handleLinkClick={handleLinkClick} {...props}/>} />
                    <Route path={"/"} component={(props)=> <Home handleLinkClick={handleLinkClick} {...props}/>}/>
                </Switch>
            </div>
        </LogInContext.Provider>
    );
}
export default App;
