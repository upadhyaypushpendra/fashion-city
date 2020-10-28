import React from "react";
import './shop.css';
import DrawerMenu from "../Drawer/drawer";
import categories from "../../categories";
import addToCart from './../../icons/add-to-cart.svg';

function Item(props){
    return (
        <div key={props.item.id} className={"item"} >
            <div style={{backgroundImage: `url(${props.item.image})`}} className={"item-pic"} />
            <div className={"item-detail"}>
                <div className={"column"} >
                    <span className={"item-name"} >{props.item.name}</span>
                    <span className={"item-price"}>&#8377;{props.item.price}</span>
                </div>
                <img className={"icon"} src={addToCart} alt={"Add to Cart"}  onClick={()=>props.modifyItem("add",props.item)}/>
            </div>
        </div>
    );
};
export default function Shop(props) {
    return (
        <>
            <DrawerMenu />
            <div className={"category-detail"}>
                <div className={"category"}>
                    <h1>{props.match.params.category.toUpperCase()}</h1>
                    <div className={"items"}>
                        {categories[`${props.match.params.category}`].map((item)=>{
                            return (<Item key={item.id} {...props} item={item}/>)
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}