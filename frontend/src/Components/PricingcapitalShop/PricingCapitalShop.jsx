import React from 'react'
import './PricingCapitalShop.css'



// ICONS
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

const PricingCapitalShop = () => {
  return (
    <div className='pricingcapital'>
      <div className="pricingcapital-topic">
        <p>Pricing capitalshop</p>
        <hr />
      </div>
      <div className="pricingcapital-containers">
        <div className="pricingcapital-container1">
          <hr />
          <p>PREMIUM SUPPORT</p>
          <hr />
          <p>TEMPLATE UPDATES</p>
          <hr />
          <p>SUPPORT & UPDATES</p>
          <hr />
          <p>ACCESS ALL TEMPLATES</p>
        </div>
        <div className="pricingcapital-container2">
          <div className="topic"><p>SINGLE</p> </div>
          <hr />
          <div className="price">$ 19</div>
          <div className="crossTick"><p><TiTick/></p></div>
          <div className="crossTick"><p><TiTick/></p></div>
          <div className="crossTick"><p>FOR 1 YEAR</p></div>
          <div className="crossTick">
            <p><RxCross2/></p>
            <button>BUY NOW</button>
          </div>
        </div>
        <div className="pricingcapital-container2">
          <div className="topic"><p>MEMBERSHIP</p></div>
          <hr />
          <div className="price"><p>$ 129</p></div>
          <div className="crossTick"><p><TiTick/></p></div>
          <div className="crossTick"><p><TiTick/></p></div>
          <div className="crossTick"><p>FOR 1 YEAR</p></div>
          <div className="crossTick">
            <p>FOR 1 YEAR</p>
            <button>BUY NOW</button>
            </div>
        </div>
        <div className="pricingcapital-container2">
          <div className="topic"><p>LIFETIMR</p></div>
          <hr />
          <div className="price"><p>$ 349</p></div>
          <div className="crossTick"><p><TiTick/></p></div>
          <div className="crossTick"><p><TiTick/></p></div>
          <div className="crossTick"><p>FOR 1 YEAR</p></div>
          <div className="crossTick">
            <p>FOR 1 YEAR</p>
            <button>BUY NOW</button>
            </div>
        </div>
      </div>

    </div>
  )
}

export default PricingCapitalShop