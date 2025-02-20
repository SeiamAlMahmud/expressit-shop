import React from 'react';

const ProductDetails = ({ product }) => {
  return (
    <>
      <div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-800">
          {product.name && product.name}
        </h3>
        <p className="text-gray-500 mt-1 text-sm">
          {product.description && product.description}
        </p>
        <div className="flex items-center flex-wrap gap-4 mt-4">
          <h4 className="text-gray-800 text-2xl sm:text-3xl font-bold">
            ${product.price && product.price}
          </h4>
          <p className="text-gray-500 text-lg">
            <strike>$16</strike>{' '}
            <span className="text-sm ml-1.5">Tax included</span>
          </p>
        </div>
        <div className="flex items-center gap-4 mt-2">
          <div className="flex items-center gap-1 text-lg px-2.5 bg-green-600 text-white rounded-full">
            <p>4</p>
            <svg
              className="w-[13px] h-[13px] fill-white"
              viewBox="0 0 14 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
            </svg>
          </div>
          <p className="text-gray-500 text-sm">253 ratings and 27 reviews</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
