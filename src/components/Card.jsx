import React, { useState } from 'react';

// react icons
import { MdLocalShipping } from 'react-icons/md';
import { IoGift } from 'react-icons/io5';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { RiHeartAddLine, RiHeartFill } from 'react-icons/ri';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="border border-gray-300 w-full md:w-[100%] relative rounded-2xl overflow-hidden">
      {/* badge */}
      <span className="bg-red-500 rounded-b-md px-3 py-1 text-[0.9rem] text-white absolute top-0 left-4">
        Best Value
      </span>

      {/* product image */}
      <Link href={`/product/${product._id}`}>
        <img
          alt="product/image"
          src={product.images[0].secure_url}
          className="w-full  aspect-[16/10] object-cover mt-0"
        />
      </Link>
      {/* product details */}
      <div className="p-4 pt-0">
        <h3 className="text-[1.4rem] font-semibold mb-1 mt-2">
          <Link href={`/product/${product._id}`}>{product.name}</Link>
          {product.name}
        </h3>

        <span className="text-[0.9rem] font-normal text-gray-500 line-clamp-2">
          {product.description}
        </span>

        {/* price & discount offer */}
        <div className="flex items-start mt-3 gap-[15px] flex-col">
          <div className="flex items-center gap-[5px]">
            <p className="text-[1.150rem] font-semibold mt-1">
              ${product.price}+
            </p>
            <p className="border text-green-600 text-[0.8rem] border-green-400 px-2 py-1 rounded-md">
              35% Off
            </p>
          </div>
          <div>
            {/* Review */}
            <div className="flex items-center gap-[10px]">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, index) => {
                  return (
                    <FaStar
                      key={index}
                      className={`cursor-pointer text-yellow-400`}
                      size={15}
                    />
                  );
                })}
              </div>
              <span className="text-[0.8rem] text-gray-500">(4.8)</span>
            </div>
          </div>
        </div>

        {/* shipping offers */}
        <div className="flex items-center border-t border-gray-300 mt-3 gap-[15px] pt-[5px]">
          <div className="flex items-center gap-[6px] text-gray-400 text-[0.9rem]">
            <MdLocalShipping />
            <p>Free shipping</p>
          </div>
          <div className="flex items-center gap-[6px] text-gray-400 text-[0.9rem]">
            <IoGift />
            <p>Free gift</p>
          </div>
        </div>

        {/* actions */}
        <div className="flex items-center justify-between mt-7 gap-[10px]">
          <Link href={`/product/${product._id}`} className="w-full">
            <button className="py-[9px] px-3 text-white rounded-2xl grow justify-center flex items-center gap-[0.4rem] hover:bg-[#01849b] text-[1rem] bg-[#0FABCA] transition-all duration-200 w-full whitespace-nowrap">
              View Deal
              <FiArrowUpRight className="text-[1.3rem]" />
            </button>
          </Link>
          <button className="group p-[6px] rounded-full border-2 border-[seagreen] hover:bg-[#2e8b5636] ">
            {isFavorite ? (
              <RiHeartFill
                onClick={() => setIsFavorite(false)}
                className="text-[#0FABCA] text-[1.3rem]"
              />
            ) : (
              <RiHeartAddLine
                onClick={() => setIsFavorite(true)}
                className="text-[seagreen] group-hover:text-black text-[1.3rem]"
              />
            )}
          </button>
          <button className="group p-[6px] rounded-full border-2 border-[#0FABCA] hover:bg-[#0fabca28] ">
            {isFavorite ? (
              <RiHeartFill
                onClick={() => setIsFavorite(false)}
                className="text-[#0FABCA]  text-[1.3rem]"
              />
            ) : (
              <ShoppingCart
                onClick={() => setIsFavorite(true)}
                className="text-[#0FABCA] group-hover:text-black text-[1.3rem]"
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
