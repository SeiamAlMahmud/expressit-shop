import React from 'react';

const AddButtons = () => {
  return (
    <>
      <div className="mt-6 flex flex-wrap gap-4">
        <button
          type="button"
          className="px-4 py-3 w-[45%] border border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold  rounded-sm"
        >
          Add to wishlist
        </button>
        <button
          type="button"
          className="px-4 py-3 w-[45%] border border-[#0FABCA] bg-[#0FABCA] hover:bg-[#0fabcad3] rounded-sm text-white text-sm font-semibold  "
        >
          Add to cart
        </button>
      </div>
    </>
  );
};

export default AddButtons;
