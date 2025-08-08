import React from "react";
import HeaderCategory from "./HeaderCategory";

type Product = {
  id: string | number;
  imageUrl: string;
  productName: string;
  discount: number;
  price: number;
  savePrice: number;
};

type ListShopProps = {
  products: Product[];
};

const ListShop: React.FC<ListShopProps> = ({ products }) => {
  return (
    <div className="container mx-auto px-4 py-4 mt-15">
      <HeaderCategory name="Grab the best deal on" highlights="Smartphones" />

      {/* Mobile: Single column scrollable */}
      <div className="block md:hidden">
        <div className="flex overflow-x-auto space-x-4 mt-4 pb-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl cursor-pointer hover:shadow-lg hover:border-sky-500 transition-shadow min-w-[280px] flex flex-col items-start relative overflow-hidden"
            >
              {/* Discount Badge */}
              <div className="absolute top-0 right-0 bg-sky-600 text-white px-2 py-2 rounded-bl-xl rounded-tr-2xl z-10 flex flex-col items-center">
                <span className="text-sm font-normal leading-tight">56%</span>
                <span className="text-xs font-normal leading-tight">OFF</span>
              </div>

              <div className="w-full flex justify-center mb-2 p-4 bg-gray-100">
                <img
                  src={product.imageUrl}
                  alt={product.productName}
                  className="w-32 h-32 object-contain rounded-md"
                />
              </div>
              <div className="px-4 pb-2">
                <p className="font-semibold text-left text-base truncate w-full mb-2">
                  {product.productName}
                </p>
                <p className="text-gray-600 text-left">
                  <span className="font-bold">₹{product.discount}</span>
                  &nbsp;&nbsp;
                  <span className="font-normal line-through">₹{product.price}</span>
                </p>
              </div>
              <div className="text-green-600 border-t mt-2 pt-3 w-full px-4 pb-4 text-sm">
                <p className="font-semibold">Save -₹ {product.savePrice}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tablet: Grid layout */}
      <div className="hidden md:block xl:hidden">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl cursor-pointer hover:shadow-lg hover:border-sky-500 transition-shadow flex flex-col items-start relative overflow-hidden"
            >
              {/* Discount Badge */}
              <div className="absolute top-0 right-0 bg-sky-600 text-white px-2 py-2 rounded-bl-xl rounded-tr-2xl z-10 flex flex-col items-center">
                <span className="text-sm font-normal leading-tight">56%</span>
                <span className="text-xs font-normal leading-tight">OFF</span>
              </div>

              <div className="w-full flex justify-center mb-2 p-4 bg-gray-100">
                <img
                  src={product.imageUrl}
                  alt={product.productName}
                  className="w-36 h-36 lg:w-32 lg:h-32 object-contain rounded-md"
                />
              </div>
              <div className="px-4 pb-2">
                <p className="font-semibold text-left text-lg lg:text-base truncate w-full mb-2">
                  {product.productName}
                </p>
                <p className="text-gray-600 text-left">
                  <span className="font-bold">₹{product.discount}</span>
                  &nbsp;&nbsp;
                  <span className="font-normal line-through">₹{product.price}</span>
                </p>
              </div>
              <div className="text-green-600 border-t mt-2 pt-3 w-full px-4 pb-4 text-sm">
                <p className="font-semibold">Save -₹ {product.savePrice}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Horizontal layout */}
      <div className="hidden xl:flex justify-center space-x-6 mt-4 2xl:gap-17">
        {products.map((product) => (
          <div
            key={product.id}
            className="hover:border rounded-2xl cursor-pointer hover:shadow-lg hover:border-sky-500 transition-shadow w-[280px] h-[350px] flex flex-col items-start relative overflow-hidden"
          >
            {/* Discount Badge */}
            <div className="absolute top-0 right-0 bg-sky-600 text-white px-2 py-2 rounded-bl-xl rounded-tr-2xl z-10 flex flex-col items-center">
              <span className="text-sm font-normal leading-tight">56%</span>
              <span className="text-xs font-normal leading-tight">OFF</span>
            </div>

            <div className="w-full flex justify-center mb-2 p-4 bg-gray-100">
              <img
                src={product.imageUrl}
                alt={product.productName}
                className="w-40 h-40 object-contain rounded-md"
              />
            </div>
            <div className="px-4 pb-2">
              <p className="font-semibold text-left text-lg truncate w-full mb-2">
                {product.productName}
              </p>
              <p className="text-gray-600 text-left">
                <span className="font-bold">₹{product.discount}</span>
                &nbsp;&nbsp;
                <span className="font-normal line-through">₹{product.price}</span>
              </p>
            </div>
            <div className="text-green-600 border-t mt-2 pt-3 w-full px-4 pb-4">
              <p className="font-semibold">Save -₹ {product.savePrice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListShop;
