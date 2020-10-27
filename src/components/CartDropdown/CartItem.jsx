import React from "react";
import deleteButton from "./../../icons/delete.svg";

export default function CartItem({item,modifyItem}) {
    return (
        <div className={"cart-item"} >
            <img className={"cart-item-image"} alt="Logo" src={item.image}/>
            <div className={"cart-item-detail"} >
                <div className={"cart-item-name"}>{item.name}</div>
                <div className={"cart-item-price"}>&#8377;{item.price} x {item.quantity}</div>
            </div>
            <img className={"cart-delete-btn"} src={deleteButton} alt={"Delete"} onClick={()=>modifyItem("delete",item)} />
        </div>
    );
}