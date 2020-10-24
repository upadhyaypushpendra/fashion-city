import React from "react";

export default function Category({title,handleLinkClick}) {
    return (
        <div className={"category"} onClick={()=>handleLinkClick(`/shop/${title}`)}>
            <h1>{title}</h1>
            <div className={"row"}>
                <div className={"row-item center"} >
                    Item1
                </div>
                <div className={"row-item center"} >
                    Item1
                </div>
                <div className={"row-item center"} >
                    Item1
                </div>
                <div className={"row-item center"} >
                    Item1
                </div>
            </div>
        </div>
    );
}