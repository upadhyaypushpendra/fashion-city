import React from "react";
import './drawer.css'
import menuIcon from '../../icons/menu-white.svg'
import closeIcon from './../../icons/close-white.svg'
export default function DrawerMenu(props) {
    const [menuOpen,setMenuOpen]= React.useState(undefined);
    const handleMenuClick =()=>{
        setMenuOpen(!menuOpen);
    };
    return(
        <div className={"drawer-menu column"}>
            <div style={{backgroundImage:`url(${menuOpen ? closeIcon: menuIcon})`}} onClick={handleMenuClick} className={"menu-icon "}/>

            <div style={{animationName : menuOpen!== undefined ? menuOpen ?"Show": "Hide" : ""}} className={"menu-list column"}>
                <a href={"/shop/hats"} className={"menu-item row"}>
                    <div className={"menu-text"}>Hats</div>
                </a>
                <a href={"/shop/jackets"} className={"menu-item row"}>
                    <div className={"menu-text"}>Jackets</div>
                </a>
                <a href={"/shop/sneakers"} className={"menu-item row"}>
                    <div className={"menu-text"}>Sneakers</div>
                </a>
                <div className={"divider"} />
                <a href={"/shop/mens"} className={"menu-item row"}>
                    <div className={"menu-text"}>Men's</div>
                </a>
                <a href={"/shop/womens"} className={"menu-item row"}>
                    <div className={"menu-text"}>Women's</div>
                </a>
            </div>
        </div>
    );
}
