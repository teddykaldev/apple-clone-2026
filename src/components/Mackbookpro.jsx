import "./Mackbookpro.css";
import smallmacpro from "../assets/images/home/small-images/small-macbook-pro.jpg";
import mediummacpro from "../assets/images/home/medium-images/medium-mackbook-pro.jpg"
import largemacpro from "../assets/images/home/large-images/large-macbook-pro.jpg"


function Mackbookpro(){
    return(
        <div className="macpro-container">
            <section className="macpro-images-container">
                <picture className="macpro-images">
                    <source 
                       media="(max-width:959px)"
                       srcSet={smallmacpro}
                    />
                    <source 
                       media="(max-width:1068px) and (max-height:733px)"
                       srcSet={mediummacpro}
                    />
                    <img src={largemacpro} alt="Mackbook pro" />
                </picture>
            </section>
            <div className="macpro-text">
                <h1>MacBook Pro</h1>
                <h2> <span className="macpro-gradient-text">PROLED XDR Display</span> </h2>
                <div className="macpro-btns">
                    <a href="#" id="macpro-learn-btn">Learn more</a>
                    <a href="#" id="macpro-buy-btn">Buy</a>
                </div>
            </div>
        </div>
    )

}
export default Mackbookpro;