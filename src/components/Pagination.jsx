function Pagination({ totalPages, currentPage, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center space-x-2 mt-5">
      {pages.map((page) => {
        const isActive = page === currentPage;
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`rounded-full cursor-pointer transition-all duration-200
              ${
                isActive
                  ? "bg-sky-600 text-white px-3 py-1 font-semibold"
                  : "bg-gray-200 text-gray-700 px-1 py-1 hover:bg-gray-300"
              }
            `}
          >
          </button>
        );
      })}
    </div>
  );
}

export default Pagination;
