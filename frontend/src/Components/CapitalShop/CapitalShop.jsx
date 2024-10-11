import React from 'react'
import './CapitalShop.css'
import { FaRegUser } from "react-icons/fa";
import { FaRegFolder } from "react-icons/fa";

const CapitalShop = () => {
    return (
        <div className='capitalshop'>
            <div className="capitalshop-text">
                <p>Capitalshop</p>
            </div>
            <div className="capitalshop-links">
                <div className="capitalshop-links-users">
                    <p><FaRegUser/></p>
                    <a href="#">Aigars Silkans</a>
                </div>
                <div className="capitalshop-links-file">
                    <p><FaRegFolder /></p>
                    <li><a href="#">Bootstrap 5,</a></li>
                    <li><a href="#">eCommerce,</a></li>
                    <li><a href="#">Fashion</a></li>
                </div>
            </div>
        </div>
    )
}

export default CapitalShop