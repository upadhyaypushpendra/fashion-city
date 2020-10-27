import React from "react";
import './home.css';
import Poster from "./poster";

export default function Home(props) {
    return (
        <div className={"poster-list"}>
            <Poster {...props} linkUrl={"/shop/sneakers"} posterUrl={"https://i.ibb.co/0jqHpnp/sneakers.png"} />
            <Poster {...props} linkUrl={"/shop/hats"} posterUrl={"https://i.ibb.co/cvpntL1/hats.png"} />
            <Poster {...props} linkUrl={"/shop/jackets"} posterUrl={"https://i.ibb.co/px2tCc3/jackets.png"} />
            <Poster {...props} linkUrl={"/shop/mens"} posterUrl={"https://i.ibb.co/R70vBrQ/men.png"} />
            <Poster {...props} linkUrl={"/shop/womens"} posterUrl={"https://i.ibb.co/GCCdy8t/womens.png"} />
        </div>
    );
}