import React from "react";
import HeaderCategory from "./HeaderCategory";

type EssentialItem = {
  id: string | number;
  imageUrl: string;
  EssentialName: string;
};

type EssentialProps = {
  essentials?: EssentialItem[];
};

const Essential: React.FC<EssentialProps> = ({ essentials = [] }) => {
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
            className="flex-shrink-0 w-[200px] lg:w-full flex flex-col items-center"
          >

            <div
              className="rounded-lg cursor-pointer hover:shadow-lg hover:border-sky-500 
                         transition-shadow border bg-white w-[200px] h-[200px] lg:w-full lg:aspect-square"
            >
              <div className="w-full h-full flex justify-center items-center p-4 bg-gray-100 rounded-lg">
                <img
                  src={items.imageUrl}
                  alt={items.EssentialName}
                  className="max-h-full max-w-full object-contain rounded-md"
                />
              </div>
            </div>

            <p className="font-semibold text-gray-500 text-center text-base mt-2">
              {items.EssentialName}
            </p>
            <p className="font-bold text-xl">UP to 50% Off</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Essential;
