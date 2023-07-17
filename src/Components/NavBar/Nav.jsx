import React, { useState } from "react";
import { RiSearch2Line } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { BsCart2 } from "react-icons/bs";
import { BsClipboardData } from "react-icons/bs";
import "./Nav.css";


const Nav = ({ logo, banner, bannerData }) => {

    const [stay, setStay] = useState(true);

    const changeStay = () => {
        if (window.scrollY <= 0) {
            setStay(true)
        } else {
            setStay(false)
        }
    }
    window.addEventListener("scroll", changeStay, true);
    return (
        <>
            <div className={stay ? '' : 'stay'} id="nav">
                <div className="logo">
                    <img src={logo} />

                </div>
                <div className="Menu">
                    <a href="#">Home</a>
                    <a href="#">Products</a>
                    <a href="#">E-Store</a>
                    <a href="#">Support</a>
                    <a href="#">About</a>
                    <a  href="https://shamim-saifi.vercel.app" target="_blank">SHAMIM ADMIN</a>
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
            <div className="homeImg">
                <img
                    src="https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/1687435368976/cb1c659a4f7453ad37aef62f56da42fd.jpg"
                    alt="homeImg"
                />
            </div>
        </>
    )
}

export default Nav;