import React, { useState } from "react";
import './MainContent.css'

const MainContent = () => {

    const [phoneNo, setPhoneNo] = useState() ;

    const handleChange = (e) => {
        setPhoneNo(e.target.value)
    }
    return (

        <div className="InfoContainer">
            <div className="leftInfo">
                <div className="leftTopInfo">
                    <div>
                        <strong>NX Wave.</strong> <span className="lightLeftTopInfo">The next-gen credit card for those who love rewards.</span>
                    </div>
                </div>
                <p className="leftTopInfoFooter">
                    1% Cashback | 5x Rewards | Zero Forex Markup
                </p>
                <div className="leftBottomInfoFooter">
                    <div className="Phone">
                        <input type="tel"  value={phoneNo}  pattern="\d{3}[-.\s]?\d{3}[-.\s]?\d{4}" placeholder="Enter Phone Number" onChange={(e) => handleChange}/>
                        <div className="submit">
                            <span>Apply Now</span>
                        </div>
                    </div>
                    <div className="termsAndConditions">
                        <input type="checkbox" className="checbox"/>
                        <p className="terms">You agree to be contacted by Uni Cards over Call, SMS, Email or WhatsApp to guide you through your application.</p>
                    </div>
                </div>
            </div>
            <div className="rightInfo">
                <img src="https://www.uni.cards/images/nx-wave/nx_wave_hero.png" alt="Uni Card" />
            </div>
        </div>

      
    )
}
export default MainContent