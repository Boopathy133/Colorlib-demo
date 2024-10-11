import React from 'react'
import './SocialMediaIcon.css'
import { FaWordpress } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineRssFeed } from "react-icons/md";
import { FaGithub } from "react-icons/fa";


const SocialMediaIcon = () => {
  return (
    <div className='socialmedia-icon-container'>
        <div className="socialmedia-icon-left">
            <p><FaWordpress/> Our free WordPress themes are downloaded over 5 MILLION times. <a href="#">Get them now</a> </p>
        </div>
        <div className="socialmedia-icon-right">
            <div className="twitter"><FaXTwitter/></div>
            <div className="facebook"><FaFacebookF/></div>
            <div className="instagram"><FaInstagram/></div>
            <div className="linkedIn"><FaLinkedinIn/></div>
            <div className="youTube"><FaYoutube/></div>
            <div className="feeds"><MdOutlineRssFeed/></div>
            <div className="github"><FaGithub/></div>
        </div>
    </div>
  )
}

export default SocialMediaIcon