import React from "react";
import "./Footer.css";
import { BiPhoneCall} from "react-icons/bi";
import { FaFacebookF,FaYoutube,FaInstagram,FaTwitter} from "react-icons/fa";
import { AiOutlineMail,AiOutlineWhatsApp} from "react-icons/ai";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footerContainer">
                    <div> 
                        <div className="heading">
                            <p>Purchase Online</p>
                            <a href="">My orders</a>
                            <a href="">Privacy Terms for E-Store</a>
                            <a href="">Payment Terms and Policies</a>
                        </div>
                        <div className="heading">
                            <p>Support</p>
                            <a href="">FAQs</a>
                            <a href="">Service Center</a>
                            <a href="">IMEI Authentication</a>
                            <a href="">Query of spare parts price</a>
                        </div>
                        <div className="heading">
                            <p>About iQOO</p>
                            <a href="">Info</a>
                            <a href="">Terms and Conditions</a>
                            <a href="">Equal Opportunity Policy</a>
                        </div>
                    </div>

                    <div className="heading">
                        <a href=""><BiPhoneCall/> 24*7 1800-572-4700</a>
                        <a href=""><AiOutlineMail />Email us (Reply in 24 hours)e</a>
                        <a href=""><AiOutlineWhatsApp />WhatsApp (8AM - 8PM Human assistance)</a>
                        <div>
                            <a href=""><FaFacebookF /></a>
                            <a href=""><FaInstagram /></a>
                            <a href=""><FaTwitter /></a>
                            <a href=""><FaYoutube /></a>
                        </div>
                    </div>
                </div>

                <div>
                    last div
                </div>
            </div>
        </>
    )
}

export default Footer;