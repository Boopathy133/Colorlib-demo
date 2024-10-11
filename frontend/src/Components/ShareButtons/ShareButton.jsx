import React from 'react'
import './ShareButton.css'

// ICONS
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const ShareButton = () => {
    return (
        <div className='ShareButtons'>
            <div className="topic">
                <p>Share this</p>
                <hr />
            </div>
            <div className="buttons">
                <div className="facebook-button">
                    <div className="icon"><FaFacebookF /></div>
                    <div className="text">Facebook</div>
                </div>
                <div className="twitter-button">
                    <div className="icon"><FaXTwitter/></div>
                    <div className="text">Twitter</div>
                </div>
                <div className="pinterest-button">
                    <div className="icon"><FaPinterest/></div>
                    <div className="text">Pinterest</div>
                </div>
                <div className="linkedIn-button">
                    <div className="icon">< FaLinkedinIn/></div>
                    <div className="text">LinkedIn</div>
                </div>
            </div>
        </div>
    )
}

export default ShareButton