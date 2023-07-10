import React from "react";
import "./Footer.css";
import { BiPhoneCall } from "react-icons/bi";
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {


    return (
        <>
            <div className="footer">
                <div className="footerContainer">
                    <div>
                        <div className="heading">
                            <p>Purchase Online</p>
                            <a id="headingItem" href="">My orders</a>
                            <a id="headingItem" href="">Privacy Terms for E-Store</a>
                            <a id="headingItem" href="">Payment Terms and Policies</a>

                        </div>
                        <div className="heading">
                            <p >Support</p>
                            <a id="headingItem" href="">FAQs</a>
                            <a id="headingItem" href="">Service Center</a>
                            <a id="headingItem" href="">IMEI Authentication</a>
                            <a id="headingItem" href="">Query of spare parts price</a>

                        </div>
                        <div className="heading">
                            <p  >About iQOO</p>
                            <a id="headingItem" href="">Info</a>
                            <a id="headingItem" href="">Terms and Conditions</a>
                            <a id="headingItem" href="">Equal Opportunity Policy</a>

                        </div>
                    </div>

                    <div className="heading">

                        <a href=""><BiPhoneCall /> 24*7 1800-572-4700</a>
                        <a href=""><AiOutlineMail />Email us (Reply in 24 hours)e</a>
                        <a href=""><AiOutlineWhatsApp />WhatsApp (8AM - 8PM Human assistance)</a>
                        <div id="right-div">
                            <a href=""><FaFacebookF /></a>
                            <a href=""><FaInstagram /></a>
                            <a href=""><FaTwitter /></a>
                            <a href=""><FaYoutube /></a>
                        </div>
                    </div>
                </div>


                <div id="last-div">
                    <p>vivo Mobile India Pvt Ltd. All rights reserved.</p>
                    <a href="">Privacy Policy </a>
                    <a href="">Cookies Policy</a>
                    <a href="">Warranty Terms</a>
                    <a href="">Privacy Support</a>
                </div>
            </div>
        </>
    )
}

export default Footer;