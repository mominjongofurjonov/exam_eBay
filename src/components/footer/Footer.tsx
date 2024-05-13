import "./Footer.scss";
import { ImFacebook2, ImTwitter } from "react-icons/im";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_wrapper">
        <div className="footer_ul_wrapper">
          <ul className="footer_ul1">
            <li>
              <b>Buy</b>
            </li>
            <li>Registration</li>
            <li>eBay money back guarantee</li>
            <li>Bidding & Buying help</li>
            <li>Stores</li>
            <li>eBay for charity</li>
            <li>Charity shop</li>
            <li>Seasonal sales and events</li>
          </ul>
        </div>
        <div className="footer_ul_wrapper2">
          <ul className="footer_ul2">
            <li>
              <b>Sell</b>
            </li>
            <li>Start selling</li>
            <li>How to sell</li>
            <li>Business sellers</li>
            <li>Affilates</li>
          </ul>
          <ul className="footer_ul3">
            <li>
              <b>Tools and Apps</b>
            </li>
            <li>Developers</li>
            <li>Security centre</li>
            <li>Site map</li>
          </ul>
        </div>
        <div className="footer_ul_wrapper3">
          <ul className="footer_ul4">
            <li>
              <b>Stay connected</b>
            </li>
            <li>eBay's blogs</li>
            <li>
              <ImFacebook2 /> Facebook
            </li>
            <li>
              <ImTwitter /> Twitter
            </li>
          </ul>
        </div>
        <div className="footer_ul_wrapper4">
          <ul className="footer_ul5">
            <li>
              <b>About eBay</b>
            </li>
            <li>Company info</li>
            <li>News</li>
            <li>Investors</li>
            <li>Careers</li>
            <li>Diversity inclusion</li>
            <li>Global impact</li>
            <li>Goverement relations</li>
            <li>Advertise with us</li>
            <li>Polcies</li>
            <li>Verified Rights owner (VeRo) program</li>
            <li>eCI Lincenses</li>
          </ul>
        </div>
        <div className="footer_ul_wrapper5">
              <ul className="footer_ul6">
                <li><b>Help & Contact</b></li>
                <li>Seller centre</li>
                <li>Contact us</li>
                <li>eBay returns</li>
              </ul>
              <ul className="footer_ul7">
                <li><b>Community</b></li>
                <li>Announcements</li>
                <li>eBay Community</li>
                <li>eBay for business podcast</li>
              </ul>
              <p className="ebay_sites"><b>eBay sites</b></p>
        </div>
      </div>
      <div>
        <p className="copyright"><b>Copyright © 1995-2024 eBay Inc. All Rights Reserved.</b> <span> Accessibility, User Agreement, Privacy, Payments Terms of Use, Cookies, CA Privacy Notice, Your Privacy Choices and AdChoice</span></p>
      </div>
    </div>
  );
};

export default Footer;
