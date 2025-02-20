import React from 'react';

const Sizes = () => {
  return (
    <>
      <h3 className="text-lg sm:text-xl font-bold text-gray-800">Sizes</h3>
      <div className="flex flex-wrap gap-4 mt-4">
        <button
          type="button"
          className="w-10 h-9 border border-gray-300 hover:border-blue-600 text-sm  flex items-center justify-center shrink-0"
        >
          SM
        </button>
        <button
          type="button"
          className="w-10 h-9 border border-blue-600 hover:border-blue-600 text-sm  flex items-center justify-center shrink-0"
        >
          MD
        </button>
        <button
          type="button"
          className="w-10 h-9 border border-gray-300 hover:border-blue-600 text-sm  flex items-center justify-center shrink-0"
        >
          LG
        </button>
        <button
          type="button"
          className="w-10 h-9 border border-gray-300 hover:border-blue-600 text-sm  flex items-center justify-center shrink-0"
        >
          XL
        </button>
      </div>
    </>
  );
};

export default Sizes;
