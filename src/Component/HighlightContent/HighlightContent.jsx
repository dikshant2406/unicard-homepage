import React from "react";
import './HighlightContent.css'

const HighlightContent = () => {
    return (
        <div className="highlight">
            <img src="https://www.uni.cards/images/circles.png" alt="circle background" className="blackBg"/>
            <div className="section1">
                <div className="section1Content">
                    <p>We’ve all heard of instant groceries, now say hello to instant credit.</p>
                    <span className="HighlightSection1Footer">0% hassle, 100% paperless. Get your Uni Card instantly.</span>
                </div>
                <div className="section1Img">
                    <img src="https://www.uni.cards/images/nx-wave/app_screen_1.webp" loading="lazy" alt="3 parts" />
                </div>
            </div>
            <div className="section1">
                <div className="section1Content">
                    <p>We’ve all heard of instant groceries, now say hello to instant credit.</p>
                    <span className="HighlightSection1Footer">Set your own payment limits. Choose how and where you spend. Lock and unlock your card. All right from the app.</span>
                </div>
                <div className="section1Img">
                    <img src="https://www.uni.cards/images/nx-wave/app_screen_2.webp" loading="lazy" alt="3 parts" />
                </div>
            </div>
            <div className="section3">
                <div className="section3Container">
                    <div className="info">
                        <img src="https://www.uni.cards/images/nx-wave/whatsapp_bubble.webp" alt="whatsapp" />
                        <div className="heading">
                            Help, just a WhatsApp away. Anytime, Anyday.
                        </div>
                        <div className="subheading">
                            During hectic work hours. On lazy sunday mornings. In the thick of night. Anytime.
                        </div>
                    </div>
                    <div className="info">
                        <img src="https://www.uni.cards/images/nx-wave/rupee_bubble.webp" alt="hidden charges" />
                        <div className="heading">
                            No hidden charges, no last minute surprises.
                        </div>
                        <div className="subheading">
                            100% money back guarantee if a charge is applied without your knowledge.
                        </div>
                    </div>
                    <div className="info">
                        <img src="https://www.uni.cards/images/nx-wave/antivirus_bubble.webp" alt="Secure" />
                        <div className="heading">
                            Help, just a WhatsApp away. Anytime, Anyday.
                        </div>
                        <div className="subheading">
                            During hectic work hours. On lazy sunday mornings. In the thick of night. Anytime.
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default  HighlightContent