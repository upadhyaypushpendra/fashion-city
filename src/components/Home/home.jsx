import React from "react";
import './home.css';

export default function Home({handleLinkClick}) {
    return (
        <div className={"poster-list"}>
            <div className={"poster center"} onClick={()=>handleLinkClick("/shop/sneakers")}>
                <div className={"background"} style={{backgroundImage: "url(https://i.ibb.co/0jqHpnp/sneakers.png)"}}/>
                <div className={"content center"}>
                    <div className={"title"}>Sneakers</div>
                    <div className={"subtitle"}>Shop Now</div>
                </div>
            </div>
            <div className={"poster center"} onClick={()=>handleLinkClick("/shop/hats")}>
                <div className={"background"} style={{backgroundImage: "url(https://i.ibb.co/cvpntL1/hats.png)"}}/>
                <div className={"content center"}>
                    <div className={"title"}>Hats</div>
                    <div className={"subtitle"}>Shop Now</div>
                </div>
            </div>
            <div className={"poster center"} onClick={()=>handleLinkClick("/shop/jackets")}>
                <div className={"background"} style={{backgroundImage: "url(https://i.ibb.co/px2tCc3/jackets.png)"}}/>
                <div className={"content center"}>
                    <div className={"title"}>Jackets</div>
                    <div className={"subtitle"}>Shop Now</div>
                </div>
            </div>
            <div className={"poster center"} onClick={()=>handleLinkClick("/shop/mens")}>
                <div className={"background"} style={{backgroundImage: "url(https://i.ibb.co/R70vBrQ/men.png)"}} />
                <div className={"content center"}>
                    <div className={"title"}>Mens</div>
                    <div className={"subtitle"}>Shop Now</div>
                </div>
            </div>
            <div className={"poster center"} onClick={()=>handleLinkClick("/shop/womens")}>
                <div className={"background"} style={{backgroundImage: "url(https://i.ibb.co/GCCdy8t/womens.png)"}} />
                <div className={"content center"}>
                    <div className={"title"}>Womens</div>
                    <div className={"subtitle"}>Show Now</div>
                </div>
            </div>
        </div>
    );
}