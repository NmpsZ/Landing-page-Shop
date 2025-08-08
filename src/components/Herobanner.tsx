import BackgroundCircle from '../assets/pic/Background-circle.png'
import Background from '../assets/pic/Background.png'
import Watch from '../assets/pic/watch.png'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function HeroBanner() {
  return (
    <div className="container mx-auto relative mt-5">
      <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden">
     
        <img
          src={Background}
          alt="Hero Banner"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <img
          src={BackgroundCircle}
          alt="Background-circle"
          className="absolute top-1/2 -right-12 xs:-right-8 sm:-right-4 md:right-2 lg:right-8 transform -translate-y-1/2 h-[140%] xs:h-full w-auto sm:w-[350px] md:w-[480px] lg:w-[600px] object-contain z-10"
        />

        <img
          src={Watch}
          alt="Product"
          className="absolute top-1/2 right-3 md:right-30 lg:right-42 transform -translate-y-1/2 w-32 md:w-60 lg:w-80 object-contain z-20"
        />

        <div className="absolute inset-0 flex flex-col justify-start mt-16 pl-4 sm:pl-6 md:pl-12 lg:pl-16 gap-2 sm:gap-3 md:gap-4 lg:gap-6 md:ms-5 z-30">
          <div className="max-w-[200px] sm:max-w-[250px] md:max-w-[400px] lg:max-w-[600px]">
            <p className="text-white text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-3xl font-normal mb-4 sm:mb-3 md:mb-4 lg:mb-5">
              Best Deal Online on smart watches
            </p>
            <h1 className="text-white text-lg sm:text-xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight mb-4 sm:mb-3 md:mb-4 lg:mb-5">
              SMART WEARABLE.
            </h1>
            <p className="text-white text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-normal">
              UP to 80% OFF
            </p>
          </div>
        </div>
      </div>

      <button className="hidden sm:flex absolute top-1/2 left-0 xl:-left-10 transform -translate-y-1/2 bg-sky-100 text-black p-5 xl:p-8 rounded-full shadow-sm hover:shadow-md transition z-50">
        <FaChevronLeft className="text-sm text-sky-600" />
      </button>

      <button className="hidden sm:flex absolute top-1/2 right-0 xl:-right-10 transform -translate-y-1/2 bg-sky-100 text-black p-5 xl:p-8 rounded-full shadow-sm hover:shadow-md transition z-50">
        <FaChevronRight className="text-sm text-sky-600" />
      </button>
    </div>
  );
}

export default HeroBanner;