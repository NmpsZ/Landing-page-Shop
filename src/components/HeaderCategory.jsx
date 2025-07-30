import { FaChevronRight } from "react-icons/fa";

function HeaderCategory({name}) {
  return (
    <div className="flex items-center justify-between border-b">
      <a
        href=""
        className="relative inline-block font-semibold text-base md:text-lg pb-1 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-sky-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left group"
      >
        {name}{" "}
        <span className="group-hover:text-sky-600 transition-colors duration-300">
          Smartphones
        </span>
      </a>
      <p className="flex items-center cursor-pointer text-sm md:text-base">
        View All <FaChevronRight className="ml-1 text-sky-600" />
      </p>
    </div>
  );
}

export default HeaderCategory;
