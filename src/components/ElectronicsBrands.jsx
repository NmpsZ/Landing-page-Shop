import HeaderCategory from "./HeaderCategory";
import Pagination from "./Pagination";
import { useState } from "react";

function ElectronicsBrands() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 7; // สมมติมี 3 หน้า (ปรับตามจริงได้)

  return (
    <div className="container mx-auto px-4 py-4 mt-20">
      <HeaderCategory name="Top" highlights="Electronics Brands" />
      <div className="mt-4 flex space-x-4 overflow-x-auto">
        {/* Card 1: iPhone */}
        <div className="w-full h-44 bg-gray-800 rounded-xl p-4 flex justify-between items-center text-white">
          <div className="flex flex-col justify-between h-full">
            <div className="text-xs bg-gray-700 px-2 py-1 rounded-md w-fit">
              IPHONE
            </div>
            <div className="flex flex-col space-y-1">
              <div className="bg-white text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-xl">
                
              </div>
              <div className="text-sm font-semibold">UP TO 80% OFF</div>
            </div>
          </div>
          <div className="w-20 h-28 bg-gray-600 rounded-md flex items-center justify-center text-xs">
            รูป
          </div>
        </div>

        {/* Card 2: Realme */}
        <div className="w-full h-44 bg-yellow-100 rounded-xl p-4 flex justify-between items-center text-black">
          <div className="flex flex-col justify-between h-full">
            <div className="text-xs bg-yellow-200 px-2 py-1 rounded-md w-fit">
              REALME
            </div>
            <div className="flex flex-col space-y-1">
              <div className="bg-yellow-400 text-black px-2 py-1 font-bold text-xs w-fit rounded">
                realme
              </div>
              <div className="text-sm font-semibold">UP TO 80% OFF</div>
            </div>
          </div>
          <div className="w-20 h-28 bg-gray-300 rounded-md flex items-center justify-center text-xs">
            รูป
          </div>
        </div>

        {/* Card 3: Xiaomi */}
        <div className="w-full h-44 bg-orange-100 rounded-xl p-4 flex justify-between items-center text-black">
          <div className="flex flex-col justify-between h-full">
            <div className="text-xs bg-orange-200 px-2 py-1 rounded-md w-fit">
              XIAOMI
            </div>
            <div className="flex flex-col space-y-1">
              <div className="bg-white text-orange-500 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                mi
              </div>
              <div className="text-sm font-semibold">UP TO 80% OFF</div>
            </div>
          </div>
          <div className="w-20 h-28 bg-gray-300 rounded-md flex items-center justify-center text-xs">
            รูป
          </div>
        </div>
      </div>

      {/* Pagination */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default ElectronicsBrands;
