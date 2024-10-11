import React from 'react'
import './BreadCrums.css'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';

const BreadCrums = () => {
  return (
    <div className='breadCrums'>
        <div className="breadCrums-left">
            <p>Templates</p>
        </div>
        <div className="breadCrums-right">
            <div className="breadCrums-right-text">
              <div className="home">Home</div><div className="arrow"><MdKeyboardDoubleArrowRight/></div><div className="htmlcss-text">HTML & CSS Website Temlates</div><div className="arrow"><MdKeyboardDoubleArrowRight/></div><div className="bootsrtap">Bootstrap 5</div><div className="arrow"><MdKeyboardDoubleArrowRight/></div>Capitalshop</div>
        </div>
    </div>
  )
}

export default BreadCrums