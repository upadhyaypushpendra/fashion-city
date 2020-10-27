import React from 'react';
import './home.css';
export  default function Poster(props) {
    return (
        <div className={"poster center"} onClick={()=> props.handleLinkClick(props.linkUrl)}>
            <div className={"background"} style={{backgroundImage: `url(${props.posterUrl}})`}} />
            <div className={"content center"}>
                <div className={"title"}>Sneakers</div>
                <div className={"subtitle"}>Shop Now</div>
            </div>
        </div>
    );
}
