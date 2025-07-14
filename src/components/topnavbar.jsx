import { FaTruck } from "react-icons/fa";
import { FaLocationDot, FaTag } from "react-icons/fa6";

function TopNavbar() {
  return (
    <div className="shadow-sm text-sm text-gray-700 bg-gray-200">
      {/* Mobile View */}
      <div className="block md:hidden">
        <div className="container mx-auto px-4 py-2">
          {/* บรรทัดแรก: Welcome */}
          <div className="text-center mb-2">
            <p className="text-xs">Welcome to worldwide MegaMart!</p>
          </div>

          {/* บรรทัดที่สอง: เมนู */}
          <div className="flex items-center justify-center gap-3 text-xs">
            <div className="flex items-center gap-1 hover:underline cursor-pointer border-e border-gray-300 pe-3">
              <FaLocationDot className="text-sky-600" />
              <span><strong>423651</strong></span>
            </div>
            <div className="flex items-center gap-1 hover:underline cursor-pointer border-e border-gray-300 pe-3">
              <FaTruck className="text-sky-600" />
              <span>Track</span>
            </div>
            <div className="flex items-center gap-1 hover:underline cursor-pointer">
              <FaTag className="text-sky-600" />
              <span>Offers</span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop & Tablet View */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center gap-4">
            {/* ซ้าย */}
            <div className="flex-1 min-w-fit">
              <p className="text-sm">Welcome to worldwide MegaMart!</p>
            </div>

            {/* กลาง */}
            <div className="flex-1 max-w-md"></div>

            {/* ขวา */}
            <div className="flex-1 flex items-center justify-end gap-4 min-w-fit">
              <div className="flex items-center gap-1 hover:underline cursor-pointer border-e border-gray-300 pe-4">
                <FaLocationDot className="text-sky-600" />
                <span>Deliver to <strong>423651</strong></span>
              </div>
              <div className="flex items-center gap-1 hover:underline cursor-pointer border-e border-gray-300 pe-4">
                <FaTruck className="text-sky-600" />
                <span>Track your order</span>
              </div>
              <div className="flex items-center gap-1 hover:underline cursor-pointer">
                <FaTag className="text-sky-600" />
                <span>All Offers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
