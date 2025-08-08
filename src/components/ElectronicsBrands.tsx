import { useState } from "react";
import HeaderCategory from "./HeaderCategory";
import Pagination from "./Pagination";
import { FaApple } from "react-icons/fa";
import { SiXiaomi } from "react-icons/si";
import ElectronicBrands1 from "../assets/pic/ElectronicBrands1.png";
import ElectronicBrands2 from "../assets/pic/ElectronicBrands2.png";
import ElectronicBrands3 from "../assets/pic/ElectronicBrands3.png";
import ElectronicBrandsCircle1 from "../assets/pic/ElectronicBrandsCircle1.png";
import ElectronicBrandsCircle2 from "../assets/pic/ElectronicBrandsCircle2.png";
import ElectronicBrandsCircle3 from "../assets/pic/ElectronicBrandsCircle3.png";

function ElectronicsBrands() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages: number = 7;

  return (
    <div className="container mx-auto px-4 py-4 mt-20">
      <HeaderCategory name="Top" highlights="Electronics Brands" />

      <div className="mt-4 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
        {/* Card 1: iPhone */}
        <div className="w-full h-50 bg-neutral-800 rounded-xl p-4 text-white relative overflow-hidden">
          <div className="flex flex-col justify-between h-full relative z-10">
            <div className="text-xs bg-gray-700 px-3 py-2 md:px-4 md:py-2 lg:px-5 lg:py-3 rounded-md w-fit">
              IPHONE
            </div>
            <div className="flex flex-col space-y-1">
              <div className="bg-white text-black w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center font-bold text-xl">
                <FaApple className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
              </div>
              <div className="text-lg md:text-xl font-semibold">UP TO 80% OFF</div>
            </div>
          </div>
          <div className="absolute -right-5 lg:-right-2 top-1/2 transform -translate-y-1/2 mt-15">
            <img
              src={ElectronicBrandsCircle1}
              alt="Circle background"
              className="absolute w-80 h-40 z-0 right-15 top-1/4 transform -translate-y-1/2 translate-x-1/3"
            />
            <img
              src={ElectronicBrands1}
              alt="iPhone"
              className="h-72 md:h-80 lg:h-76 xl:h-80 w-auto object-contain relative z-10"
            />
          </div>
        </div>

        {/* Card 2: Realme */}
        <div className="w-full h-50 bg-yellow-100 rounded-xl p-4 text-black relative overflow-hidden">
          <div className="flex flex-col justify-between h-full relative z-10">
            <div className="text-xs bg-yellow-200 px-3 py-2 md:px-4 md:py-2 lg:px-5 lg:py-3 rounded-md w-fit">
              REALME
            </div>
            <div className="flex flex-col space-y-1">
              <div className="bg-yellow-400 text-black px-2 py-1 md:px-3 md:py-2 font-medium text-lg md:text-xl w-fit rounded mb-3 md:mb-5">
                realme
              </div>
              <div className="text-lg md:text-xl font-semibold">UP TO 80% OFF</div>
            </div>
          </div>
          <div className="absolute -right-5 lg:-right-8 top-1/2 transform -translate-y-1/2 mt-15">
            <img
              src={ElectronicBrandsCircle2}
              alt="Circle background"
              className="absolute w-80 h-40 z-0 right-12 top-1/4 transform -translate-y-1/2 translate-x-1/3"
            />
            <img
              src={ElectronicBrands2}
              alt="Realme"
              className="h-62 md:h-80 lg:h-76 xl:h-80 w-auto object-contain relative z-10"
            />
          </div>
        </div>

        {/* Card 3: Xiaomi */}
        <div className="w-full h-50 bg-orange-100 rounded-xl p-4 text-black relative overflow-hidden">
          <div className="flex flex-col justify-between h-full relative z-10">
            <div className="text-xs bg-orange-200 px-3 py-2 md:px-4 md:py-2 lg:px-5 lg:py-3 rounded-md w-fit">
              XIAOMI
            </div>
            <div className="flex flex-col space-y-1">
              <div className="bg-white text-orange-500 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-bold text-sm">
                <SiXiaomi className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
              </div>
              <div className="text-lg md:text-xl font-semibold">UP TO 80% OFF</div>
            </div>
          </div>
          <div className="absolute -right-5 lg:-right-8 top-1/2 transform -translate-y-1/2 mt-15">
            <img
              src={ElectronicBrandsCircle3}
              alt="Circle background"
              className="absolute w-80 h-40 z-0 right-12 top-1/4 transform -translate-y-1/2 translate-x-1/3"
            />
            <img
              src={ElectronicBrands3}
              alt="Xiaomi"
              className="h-62 md:h-80 lg:h-76 xl:h-80 w-auto object-contain relative z-10"
            />
          </div>
        </div>
      </div>

      {/* Pagination */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </div>
  );
}

export default ElectronicsBrands;
