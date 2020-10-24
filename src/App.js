import React from 'react';
import './App.css';
import Header from "./components/Header/header";
import {Switch,Route} from "react-router-dom";
import Home from "./components/Home/home";
import SignIn from "./components/SignIn/signin";
import Shop from "./components/Shop/shop";
function App(props) {
    const [cartItems,setCartItems] = React.useState([]);
    const [isLoggedIn,setIsLoggedIn] = React.useState(localStorage.getItem('isLoggedIn') && localStorage.getItem("isLoggedIn")==="true");
    const handleLinkClick = (link) =>{
        props.history.push(link);
    };
    const handleDeleteItem = (id) =>{
        let filteredItems = cartItems.filter(item=> item.id!==id);
        setCartItems(filteredItems);
    };
    const handleAddItem = (item) =>{
        let itemsCopy = [...cartItems];
        let foundItem = itemsCopy.find((it)=> it.id === item.id);
        if(foundItem) {
            foundItem.quantity++;
        } else {
            item.quantity = 1;
            itemsCopy.push(item);
        }
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
    return (
        <div className="App">
            <Header handleLinkClick={handleLinkClick} isLoggedIn={isLoggedIn} onSignOut={onSignOut} cartItems={cartItems} handleDeleteItem={handleDeleteItem}/>
            <Switch>
                  <Route path={"/login"} component={(props)=><SignIn isLoggedIn={isLoggedIn} onSignIn={onSignIn} onSignOut={onSignOut} {...props}/>}/>
                  <Route path={"/checkout"} component={(props)=><Home handleLinkClick={handleLinkClick} {...props}/>}/>
                  <Route exact={true} path={"/shop/:category"} component={(props)=><Shop handleAddItem={handleAddItem} handleDeleteItem={handleDeleteItem} handleLinkClick={handleLinkClick} {...props}/>} />
                  <Route path={"/"} component={(props)=> <Home handleLinkClick={handleLinkClick} {...props}/>}/>
            </Switch>
        </div>
    );
}
export default App;
