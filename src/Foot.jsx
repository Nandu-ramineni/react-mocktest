import React from "react";
import { FaInstagram,FaXTwitter,FaYoutube, FaFacebook } from "react-icons/fa6";
import './Footer.css'
const Footer = () => {
    const links = [
        [
            {label : 'Categories' , key: 'header-1'},
            {label : 'JEEPhysics' , key: 'item-1-1'},
            {label : 'JEEChemistry' , key: 'item-1-2'},
            {label : 'JEEMaths' , key: 'item-1-3'},
            {label : 'Gate' , key: 'item-1-4'},
            {label : 'TSPSC' , key: 'item-1-5'},
        ],
        [
            {label : 'Support' , key: 'header-2'},
            {label : 'Help center' , key: 'item-2-1'},
            {label : 'Terms of service' , key: 'item-2-2'},
            {label : 'Legal' , key: 'item-2-3'},
            {label : 'Privacy policy' , key: 'item-2-4'},
            {label : 'Status' , key: 'item-2-5'},
        ]
    ]
    return (
        <div className='footer'>
            <div className="footer-company-info">
                <div className="footer-img">
                    <img src={"https://firebasestorage.googleapis.com/v0/b/nandu-1121a.appspot.com/o/TEST1.png?alt=media&token=aa8ee1b1-921a-4a8b-a15f-c45b288c0ae3"} alt="" />
                </div>
                
                <div className='infos'>             
                    <span>
                        Copyright © 2020 MockTest Duniya ltd.
                    </span>
                    <span>
                        All rights reserved
                    </span>
                    <span>
                        Design & Developed By Nandu
                    </span>
                </div>
                <div className="footer-icons">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
                    <FaFacebook/>
                    <FaXTwitter/>
                    <FaYoutube/>
                </div>
            </div>
            <div className="footer-links">
                    {links.map((col,index) => (
                        <ul className={`col col-${index+1}`} key={`col-${index}`}>
                            {col.map((link,index) => (
                                <li key={`link-${col}-${index}`}>
                                    {link.label}
                                </li>
                            ))}
                        </ul>
                    ))}
            </div>
            <div className="footer-form">
                <label htmlFor="">
                    Stay up to date
                </label>
                <input type="email" name="" id="" placeholder="Enter Your Email" />
            </div>
        </div>
        
    )
}

export default Footer;