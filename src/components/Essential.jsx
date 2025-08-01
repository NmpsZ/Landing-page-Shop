import HeaderCategory from "./HeaderCategory";

function Essential({ essentials = [] }) {
  return (
    <div className="container mx-auto px-4 py-4 mt-20">
      <HeaderCategory name="Daily" highlights="Essentials" />
      <div
        className="
          flex gap-4 mt-4 pb-4 overflow-x-auto 
          lg:grid lg:grid-cols-6 lg:gap-4 
          scrollbar-hide
        "
      >
        {essentials.map((items) => (
          <div
            key={items.id}
            className="flex-shrink-0 min-w-[200px] lg:min-w-0 flex flex-col items-center"
          >
            {/* กล่องรูปภาพ */}
            <div
              className="rounded-lg cursor-pointer hover:shadow-lg hover:border-sky-500 
                         transition-shadow border bg-white w-full"
            >
              <div className="w-full flex justify-center mb-2 p-4 bg-gray-100">
                <img
                  src={items.imageUrl}
                  alt={items.EssentialName}
                  className="w-28 h-28 object-contain rounded-md"
                />
              </div>
            </div>

            {/* ชื่อสินค้าอยู่นอกกรอบ */}
            <p className="font-semibold text-gray-500 text-center text-base mt-2">
              {items.EssentialName}
            </p>
            <p className="font-bold ">
                UP to 50% Off
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Essential;
