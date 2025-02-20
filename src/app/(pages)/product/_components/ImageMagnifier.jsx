import React, { useState } from 'react';

const ImageMagnifier = ({ displayImage }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const offsetX = e.clientX - left;
    const offsetY = e.clientY - top;

    setMousePosition({
      x: (offsetX / width) * 100,
      y: (offsetY / height) * 100,
    });
  };

  return (
    <div className="relative  overflow-hidden" onMouseMove={handleMouseMove}>
      <img
        src={displayImage}
        alt="Magnify Example"
        className="w-full  aspect-[548/712] object-cover"
      />
      <div
        className="absolute top-0 left-0 w-32 h-32 bg-black bg-opacity-50 rounded-full"
        style={{
          backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
          backgroundImage: `url(${displayImage})`,
          backgroundSize: '500% 500%',
        }}
      />
    </div>
  );
};

export default ImageMagnifier;
