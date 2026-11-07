import "./Navbar.css";
import applelogo from "../assets/images/icons/apple-logo.svg";
import searchlogo from "../assets/images/icons/search-logo.svg";
import shopbag from "../assets/images/icons/shop-logo.svg";
import {Menu,X} from "lucide-react"
 function Navbar() {
  return (
    <div className="nav-container">
      <div className="apple-logo-container">
        <a href="#"><img src={applelogo} alt="" /></a>
      </div>

      <div className="desktop-nav-container">
        <a href="#">Store</a>
        <a href="/Mackbook" >Mac</a>
        <a href="/Ipad" >iPad</a>
        <a href="/Iphonepro" >iPhone</a>
        <a href="/Watch" >Watch</a>
        <a href="/Vision" >Vision</a>
        <a href="/Airpods" >AirPods</a>
        <a href="/Home" >Home</a>
        <a href="/Entertainment" >Entertainment</a>
        <a href="/Accessories" >Accessories</a>
        <a href="/Support" >Support</a>
      </div>
      
      <div className="mobile-desktop-container">
        <a href="#"><img src={searchlogo} alt="" /></a>
        <a href="#"> <img src={shopbag} alt="" /></a>
        <a href="#" id="menu"><Menu size={18}/></a>
        <a href="" id="xmark"><X size={18}/></a>
      </div>
      
    </div>
  )
}
export default Navbar;