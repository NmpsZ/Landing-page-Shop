import HeaderCategory from "./HeaderCategory";

function TopCategory({ categoryitem = [] }) {
  return (
    <div className="container mx-auto px-4 py-4 mt-20">
      <HeaderCategory name= "Shop From" highlights="Top Categories" />

      {/* Horizontal scrollable layout for all screen sizes */}
      <div className="overflow-x-auto mt-4">
        <div className="flex gap-4 sm:gap-6 lg:gap-16 pb-2 min-w-max">
          {categoryitem.map((catagoryitem) => (
            <div
              key={catagoryitem.id}
              className="flex flex-col items-center flex-shrink-0"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 2xl:w-40 2xl:h-40 rounded-full bg-gray-100 overflow-hidden flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <img
                  src={catagoryitem.imageUrl}
                  alt={catagoryitem.CategoryName}
                  className="w-3/4 h-3/4 object-contain"
                />
              </div>
              <div className="mt-2 sm:mt-3 px-2 max-w-[80px] sm:max-w-[100px] md:max-w-[120px] lg:max-w-[140px]">
                <p className="font-semibold text-center text-xs sm:text-sm md:text-base lg:text-lg leading-tight">
                  {catagoryitem.CategoryName}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopCategory;