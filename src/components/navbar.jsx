import { useEffect, useState } from "react";
import { FaBars, FaShoppingCart, FaUser , FaSearch , FaList } from "react-icons/fa";

function Navbar() {

  const [placeholder,setplaceholder] = useState('Search...');

  useEffect(()=>{
    const updatePlaceHolder = () =>{
      const width = window.innerWidth;
      if (width >= 768) {
        setplaceholder("Search essentials, groceries and more...")
      }
      else{
        setplaceholder("Search...")
      }
    }

    updatePlaceHolder()
    window.addEventListener("resize",updatePlaceHolder)
    return () => window.removeEventListener("resize",updatePlaceHolder)
  })

  return (
    
    <div className="bg-white shadow-md py-5">
      <div className="container mx-auto px-4 flex items-center justify-between gap-4">
        
        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-2 min-w-fit">
          <button className="text-lg md:text-2xl text-sky-600 hover:bg-blue-100 p-2 rounded-md">
            <FaBars />
          </button>
          <h1 className="text-lg md:text-2xl font-bold text-sky-600">MegaMart</h1>
        </div>

        {/* Center: Search */}
        <div className="relative w-full max-w-md">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-sky-600" />
          <input
            type="text"
            placeholder={placeholder}
            className="w-full pl-10 pr-3 py-2 md:py-3 bg-blue-100 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-sky-500"
          />
          <FaList className="absolute right-3 top-1/2 -translate-y-1/2 text-sky-600" />
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-3 min-w-fit">
          <button className="text-sm flex items-center px-3 gap-1 border-e border-gray-300">
            <FaUser className="text-sky-600" />
            <span className="hidden sm:inline">Sign In/Sign Up</span>
          </button>
          <button className="text-sm flex items-center gap-1">
            <FaShoppingCart className="text-sky-600" />
            <span className="hidden sm:inline">Cart</span>
          </button>
        </div>

      </div>
    </div>
  );
}

export default Navbar;
