import React from "react";
import './SecondaryContent.css'

const SecondaryContent = () => {
    return (
        <section>
            <div className="SectionOne">
                <p className="SectionText">
                    Earn 1% assured cashback <span className="greyFont"> on your spends. Get</span> 5X 
                    more value than cashback <span className="greyFont">at the Uni Store. Enjoy 
                    round the clock</span> Whatsapp support. <span className="greyFont">And it's </span>
                    lifetime free;<span className="greyFont"> no joining fee, no annual charges.</span>
                </p>
                <div className="greenArrowDown">
                    <img src="https://www.uni.cards/images/down_arrow.svg" alt="down arrow" />
                </div>
            </div>
            <div className="SectionTwo">
                <div className="leftSectionTwo">
                    <p className="SectionText2 ">
                        <span className="blackBoldText"> 1% assured cashback
                        on your spends.</span><span className="greyFont">The
                        more you spend, the
                        more you earn.</span>
                    </p>
                    <p><span className="greyFont greyFontFooter">Not applicable on fuel purchase, rent & wallet transfers, ATM withdrawals & international transactions.</span></p>
                </div>
                <img src="https://www.uni.cards/images/one_percent_cashback.png" alt="1% cashback" />
            </div>
            <div className="SectionThree">
                <img src="https://www.uni.cards/images/five_x_rewards.png" alt="5X cashback" />
                <div className="rightSectionThree">
                    <p className="SectionText3 ">
                        <span className="blackBoldText">5x more value than your cashback,</span> <span className="greyFont">only at the Uni Store.</span>
                    </p>
                    
                </div>
               
            </div>
            <div className="SectionFour">
                <div className="rightSectionFour">
                    <p className="SectionText4 ">
                        <span className="blackBoldText">Zero Forex Markup.</span>
                        <span className="greyFont">Go international, without any fees.</span>
                    </p>
                </div>
                <img src="https://www.uni.cards/images/forex_globe.png" alt="1% cashback" />
            </div>
            <div className="SectionFive">
                <div className="SectionText5">
                    <span className="blackBoldText">Lifetime <span className="greyFont">free</span>. No joining fee.</span>
                    <span className="blackBoldText">
                        No annual charges.
                    </span>
                </div>
            </div>
        </section>
    )
}

export default SecondaryContent ;