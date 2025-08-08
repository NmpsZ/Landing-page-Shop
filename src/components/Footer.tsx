import { CiPhone } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import AppStore from "../assets/pic/AppStore.png";
import GooglePlay from "../assets/pic/GooglePlay.png";
import FooterCircle from "../assets/pic/FooterCircle.png"

function Footer() {
  return (
    <div className="relative bg-sky-700 text-white py-6 sm:py-10 overflow-hidden mt-30">
      {/* Footer Circle positioned like in the image */}
     <img
        src={FooterCircle}
        alt="Footer Circle"
        className="absolute -top-4 md:-top-5 -right-2 sm:top-1/8 sm:-right-2 transform translate-x-1/4 -translate-y-1/2 w-48 md:w-60 lg:w-64 xl:w-126 opacity-30 pointer-events-none z-0"
      />

      <div className="relative z-10 container mx-auto px-4 py-6 sm:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        
        {/* MegaMart Section */}
        <div className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            MegaMart
          </h1>
          <div className="mb-2 text-sm">
            <p className="mb-2 text-sm sm:text-base lg:text-xl">Contact Us</p>
            <div className="mb-3">
              <p className="flex items-center gap-2 justify-center sm:justify-start lg:text-lg">
                <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
                Whats App
              </p>
              <p className="ml-0 sm:ml-6 text-xs sm:text-sm lg:text-lg">
                +1 202-918-2132
              </p>
            </div>
            <div className="mb-3">
              <p className="flex items-center gap-2 justify-center sm:justify-start lg:text-lg">
                <CiPhone className="w-5 h-5 sm:w-6 sm:h-6" />
                Call Us
              </p>
              <p className="ml-0 sm:ml-6 text-xs sm:text-sm lg:text-base xl:text-lg">
                +1 202-918-2132
              </p>
            </div>
          </div>

          <p className="font-semibold mt-4 mb-2 lg:text-lg">Download App</p>
          <div className="flex flex-col md:flex-row justify-center sm:justify-start gap-2 mt-2">
            <img
              src={AppStore}
              alt="Download on the App Store"
              className="h-10 sm:h-12 lg:h-14 w-auto max-w-[120px] sm:max-w-[140px] lg:max-w-[160px] mx-auto sm:mx-0"
            />
            <img
              src={GooglePlay}
              alt="Get it on Google Play"
              className="h-10 sm:h-12 lg:h-14 w-auto max-w-[120px] sm:max-w-[140px] lg:max-w-[160px] mx-auto sm:mx-0"
            />
          </div>
        </div>

        {/* Most Popular Categories */}
        <div className="text-center sm:text-left lg:ml-25">
          <p className="font-semibold text-base sm:text-lg mb-4">
            <span className="inline-block border-b-2 border-white pb-1 text-base sm:text-lg lg:text-xl xl:text-2xl whitespace-nowrap">
              Most Popular Categories
            </span>
          </p>

          <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3 text-sm sm:text-base lg:text-lg whitespace-nowrap">
            <li>Staples</li>
            <li>Beverages</li>
            <li>Personal Care</li>
            <li>Home Care</li>
            <li>Baby Care</li>
            <li>Vegetables & Fruits</li>
            <li>Snacks & Foods</li>
            <li>Dairy & Bakery</li>
          </ul>
        </div>

        {/* Customer Services */}
        <div className="text-center sm:text-left lg:ml-30">
          <h2 className="font-semibold text-base sm:text-lg mb-4">
            <span className="inline-block border-b-2 border-white pb-1 text-base sm:text-lg lg:text-xl xl:text-2xl whitespace-nowrap">
              Customer Services
            </span>
          </h2>
          <ul className="list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3 text-sm sm:text-base lg:text-lg whitespace-nowrap">
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>E-waste Policy</li>
            <li>Cancellation & Return Policy</li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 border-t border-white mt-6 sm:mt-10 pt-4 text-center px-4">
        <p className="text-md lg:text-lg">
          © 2022 All rights reserved. Reliance Retail Ltd.
        </p>
      </div>
    </div>
  );
}

export default Footer;