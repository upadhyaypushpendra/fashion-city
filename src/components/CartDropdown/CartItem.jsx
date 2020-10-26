import React from "react";
import deleteButton from "./../../icons/delete.svg";

export default function CartItem({item,modifyItem}) {
    return (
        <div className={"cart-item"} >
            <img className={"item-image"} alt="Logo" src={item.image}/>
            <div className={"item-detail"} >
                <div className={"item-name"}>{item.name}</div>
                <div className={"item-price"}>&#8377;{item.price} x {item.quantity}</div>
            </div>
            <img className={"delete-btn"} src={deleteButton} alt={"Delete"} onClick={()=>modifyItem("delete",item)} />
        </div>
    );
}