import React from "react";

const Pagination = ({ setCurrentPage, totalPosts, postsPerPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="max-w-sm mx-auto flex justify-between items-center pt-8">
      {pages.map((page, index) => (
        <button
          key={index}
          className="outline-none font-inter font-medium bg-[#f0f0f0] text-black px-4 py-2 rounded-md"
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
