import React from 'react';
import { Play } from 'lucide-react';
import ImageMagnifier from './ImageMagnifier';
const ProductPreview = ({
  product,
  setDisplayImage,
  displayImage,
  mediaType,
}) => {
  return (
    <>
      <div className="flex flex-row gap-2">
        <div className="flex flex-col gap-2 w-16 max-sm:w-14 shrink-0">
          {product.images.length > 0 &&
            product.images.map((image, idx) => (
              <img
                key={idx}
                src={image.secure_url}
                onClick={() => setDisplayImage(image.secure_url)}
                alt={image.public_id}
                className="aspect-[64/85] object-cover object-top w-full cursor-pointer  border-b-2 border-transparent rounded-lg"
              />
            ))}
          {product && product.video?.secure_url && (
            <div className="group relative w-full max-w-lg mx-auto cursor-pointer">
              <div
                onClick={() => setDisplayImage(product.video.secure_url)}
                className="w-full rounded-lg h-20 "
              ></div>

              <div className=" absolute inset-0 w-full h-full flex items-center justify-center   transition-opacity duration-300 pointer-events-none bg-black opacity-50 rounded-lg">
                <div className="bg-black bg-opacity-50 p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-200">
                  <Play size={30} className=" text-white " />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex-1 ">
          {
            // Image or Video
            mediaType === 'image' ? (
              <ImageMagnifier displayImage={displayImage} />
            ) : (
              // <img
              //   src={displayImage}
              //   alt="Product"
              //   className="w-full  aspect-[548/712] object-cover"
              // />
              <video
                className="w-full aspect-[548/712] rounded-lg shadow-lg transition-transform duration-300 ease-in-out cursor"
                src={displayImage}
                poster={product.images?.[0]?.secure_url || '/placeholder.jpg'}
                controls
                controlsList="nodownload nofullscreen noremoteplayback"
              ></video>
            )
          }
        </div>
      </div>
    </>
  );
};

export default ProductPreview;
