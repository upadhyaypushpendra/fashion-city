import React from "react";
import './home.css';
import Poster from "./poster";
import hats from "./../../images/hats.jpg"

export default function Home(props) {
    return (
        <div className={"poster-list"}>
            <Poster {...props} title={"Sneakers"} linkUrl={"/shop/sneakers"} posterUrl={"https://i.ibb.co/0jqHpnp/sneakers.png"} />
            <Poster {...props} title={"Hats"} linkUrl={"/shop/hats"} posterUrl={hats} />
            <Poster {...props} title={"Jackets"} linkUrl={"/shop/jackets"} posterUrl={"https://i.ibb.co/px2tCc3/jackets.png"} />
            <Poster {...props} title={"Men"} linkUrl={"/shop/mens"} posterUrl={"https://i.ibb.co/R70vBrQ/men.png"} />
            <Poster {...props} title={"Women"} linkUrl={"/shop/womens"} posterUrl={"https://i.ibb.co/GCCdy8t/womens.png"} />
        </div>
    );
}