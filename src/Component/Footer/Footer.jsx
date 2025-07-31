import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import moment from "moment";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="rounded-lg">
      <div className="md:flex text-center">
        <div className="footer-left flex-1 py-10">
          <h2 className="footer-heading">CONTACT US</h2>
          <p className="footer-pera">
            Jhenaidah, Khulna, Bangladesh <br /> +88 01987136130 <br />
            24/7
          </p>
        </div>
        <div className="footer-right flex-1 py-10">
          <h2 className="footer-heading">Follow US</h2>
          <p className="footer-pera">Join us on social media</p>
          <div className="footer-social-icon-container w-40 flex mx-auto  gap-5  text-3xl">
            <a href="https://www.facebook.com/jpchoyon.khan.130" target="blank">
              <FaFacebook></FaFacebook>
            </a>
            <a href="https://www.instagram.com/jpchoyonkhan130" target="blank">
              <FaInstagramSquare></FaInstagramSquare>
            </a>
            <a href="https://x.com/jpchoyonkhan1" target="blank">
              <FaTwitter></FaTwitter>
            </a>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center bg-[#C5FFF8] text-gray-700 py-6 ">
          Copyright ©JP Choyon Khan. All rights reserved
          {moment().format(" MMM , YYYY")}
        </p>
      </div>
    </div>
  );
};

export default Footer;
