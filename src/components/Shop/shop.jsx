import React from "react";
import './shop.css';
import DrawerMenu from "../Drawer/drawer";
import categories from "../../categories";
import addToCart from './../../icons/add-to-cart.svg';

export default function Shop(props) {
    return (
        <>
            <DrawerMenu />
            <div className={"category-detail"}>
                <div className={"category"}>
                    <h1>{props.match.params.category.toUpperCase()}</h1>
                    <div className={"items"}>
                        {categories[`${props.match.params.category}`].map((item)=>{
                            return (<div key={item.id} className={"item"} >
                                <div style={{backgroundImage: `url(${item.image})`}} className={"item-pic"} />
                                <div className={"item-detail"}>
                                    <span className={"item-name"} >{item.name}</span>
                                    <span className={"item-price"}>{item.price}$</span>
                                    <img className={"icon"} src={addToCart} alt={"Add to Cart"}  onClick={()=>props.handleAddItem(item)}/>
                                </div>

                            </div>)
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}