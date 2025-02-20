import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

const Accordion = () => {
  const productData = [
    {
      title: 'What is the fabric used for this three-piece suit?',
      description:
        'This three-piece suit is made of a high-quality wool blend, ensuring durability and comfort.',
    },
    {
      title: 'Does this suit come in different colors?',
      description:
        'Yes, this suit is available in a range of colors, including black, navy blue, and charcoal grey.',
    },
    {
      title: 'What sizes are available?',
      description:
        'The suit is available in sizes from Small to XXL, catering to a wide range of body types.',
    },
    {
      title: 'Is the jacket included in the three-piece set?',
      description:
        'Yes, the three-piece set includes the jacket, trousers, and a matching waistcoat.',
    },
    {
      title: 'Can the suit be tailored?',
      description:
        'Absolutely! The suit can be tailored to your measurements for a perfect fit.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) =>
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));

  return (
    <div className="flex gap-3 flex-col w-full">
      <h3 className="text-3xl text-center font-bold">
        Three-Piece Suit Information
      </h3>
      {productData.map((item, index) => (
        <article
          key={index}
          className="border-b border-gray-300 last:border-b-0 rounded "
        >
          <div
            className="flex gap-2 cursor-pointer items-center justify-between w-full"
            onClick={() => handleClick(index)}
          >
            <h2 className="text-black font-semibold text-lg">{item.title}</h2>
            <FaChevronDown
              className={`text-lg transition-all duration-300 ${
                openIndex === index ? 'rotate-180 text-blue-500' : ''
              }`}
            />
          </div>
          <div
            className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
              openIndex === index
                ? 'grid-rows-[1fr] opacity-100  mt-2'
                : 'grid-rows-[0fr] opacity-0 '
            }`}
          >
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Accordion;
