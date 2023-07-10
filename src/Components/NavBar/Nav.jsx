import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BsCart2 } from "react-icons/bs";
import { BsClipboardData } from "react-icons/bs";
import "./Nav.css";


const Nav = ({ logo, banner, bannerData }) => {
    return (
        <>
            <div id="nav">
                <div className="logo">
                    <img src={logo} />

                </div>
                <div className="Menu">
                    <a href="#">Home</a>
                    <a href="#">Products</a>
                    <a href="#">E-Store</a>
                    <a href="#">Support</a>
                    <a href="#">About</a>
                    <a href="#">SHAMIM ADMIN</a>
                </div>
                <div className="icons">
                    <span> <RiSearch2Line /></span>
                    <span id="profile"> <CgProfile />
                        <div className="show">
                            <div className="profile-list">
                                <a href="#"><BsCart2 />Cart</a>
                                <a href="#"><BsClipboardData />My Order</a>
                                <a href="#"><CgProfile />Sign in/Register</a>
                            </div>
                        </div>

                    </span>
                </div>
            </div>
        </>
    )
}

export default Nav;