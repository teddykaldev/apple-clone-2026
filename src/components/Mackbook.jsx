import "./Mackbook.css";
import smallmac from "../assets/images/home/small-images/small-mac6.jpg";
import mediummac from "../assets/images/home/medium-images/medium-mac6.jpg"
import largemac from "../assets/images/home/large-images/large-mac6.jpg"


function Mackbook(){
    return(
        <div className="mac-container">
            <section className="mac-images-container">
                <picture className="mac-images">
                    <source 
                       media="(max-width:767px)"
                       srcSet={smallmac}
                    />
                    <source 
                       media="(max-width:1068px) and (max-height:733px)"
                       srcSet={mediummac}
                    />
                    <img src={largemac} alt="Mackbook" />
                </picture>
            </section>
            <div className="mac-text">
                <h1>MacBook pro</h1>
                <h2>14-inch model now with M6.</h2>
                <div className="mac-btns">
                    <a href="#" id="mac-learn-btn">Learn more</a>
                    <a href="#" id="mac-buy-btn">Buy</a>
                </div>
            </div>
        </div>
    )

}
export default Mackbook;