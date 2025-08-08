import { FaChevronDown } from "react-icons/fa";
import React from "react";

type CategoryItem = {
  name: string;
  icon?: React.ReactNode;
  hasDropdown?: boolean;
  active?: boolean;
};

type CategoryProps = {
  categories?: CategoryItem[];
};

function Category({ categories = [] }: CategoryProps) {
  return (
    <div className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-6 flex items-center py-3 gap-4 xl:gap-14 overflow-x-auto">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
              category.active 
                ? 'bg-sky-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.icon && <span>{category.icon}</span>}
            <span>{category.name}</span>
            {category.hasDropdown && <FaChevronDown className="text-xs" />}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Category;
