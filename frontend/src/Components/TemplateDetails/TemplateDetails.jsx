import React from 'react'
import './TemplateDetails.css'

const TemplateDetails = () => {
    return (
        <>
            <div className='template-details'>
                <div className="template-details-left">
                    <div className="template-details-left-topic">
                        <p>Template Details</p>
                        <hr className='active' />
                    </div>
                    <div className="template-details-left-contents">
                        <p>Author : <span>Colorlib</span></p>
                        <p>Released : <span>July 2024</span></p>
                        <p>License : <span>CC BY 3.0</span></p>
                        <p>Credits : <span>Imges from Unsplash</span></p>
                    </div>
                </div>
                <div className="template-details-right">
                    <div className="template-details-right-topic">
                        <p>Description</p>
                        <hr />
                    </div>
                    <div className="template-details-right-contents">
                        <p>Capitalshop is an engaging fashion store website template for men, women, or general online shops. The template’s structure is user-friendly, so you can quickly get the most out of it. In addition to that, even if you would like to create a website for an apparel brand, that's what you can bring to fruition, too. Capitalshop is here for everyone, whether a beginner or a professional coder and developer.</p><br />
                        <p>Dive into the fashion industry with Capitalshop. The bundle of features is vast, ensuring you rapidly speed up the eCommerce website creation. Slider, CTA buttons, top bar, social icons, testimonials, carousels, and back-to-top buttons are just some of the amenities of Capitalshop. It also contains different internal pages, blogs, Google Maps, and a working contact form.</p>
                    </div>
                </div>
            </div>
            <div className="button">
                <button>Preview</button>
            </div>
        </>
    )
}

export default TemplateDetails