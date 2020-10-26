import React from "react";
import deleteButton from "./../../icons/delete.svg";
import plusButton from "./../../icons/plus-white.svg";
import minusButton from "./../../icons/minus-white.svg";

import './checkout.css'
export default function CheckoutItem({item,modifyItem}) {
    return (
        <div className={"ckt-item"} >
            <img className={"ckt-item-image"} alt="Logo" src={item.image}/>
            <div className={"ckt-item-detail"} >
                <div className={"ckt-item-name"}>{item.name}</div>
                <div className={"ckt-item-price"}> &#8377;{item.price} x {item.quantity}</div>
            </div>
            <div className={'ckt-buttons'}>
                <img className={"btn"} src={deleteButton} alt={"Delete"} onClick={()=>modifyItem("delete",item)} />
                <img className={"btn"} src={plusButton} alt={"Plus"} onClick={()=>modifyItem("increase",item)} />
                <img className={"btn"} src={minusButton} alt={"Minus"} onClick={()=>modifyItem("decrease",item)} />
            </div>
        </div>
    );
}