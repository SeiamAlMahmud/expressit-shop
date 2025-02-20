'use client';
import { use, useState, useEffect } from 'react';
import axios from 'axios';
import { Play } from 'lucide-react';

export default function ProductDetail({ params }) {
  const resolvedParams = use(params);
  const productId = resolvedParams?.productId;
  const [product, setProduct] = useState(null);
  const [displayImage, setDisplayImage] = useState(null);
  const [mediaType, setMediaType] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await axios.get(
          'https://glore-bd-backend-node-mongo.vercel.app/api/product'
        );
        const foundProduct = res.data.data.find((p) => p._id === productId);

        if (!foundProduct) {
          setError('Product not found');
        } else {
          setDisplayImage(foundProduct.images[0].secure_url);
          setProduct(foundProduct);
        }
      } catch (err) {
        setError('Error loading product');
      } finally {
        setLoading(false);
      }
    }

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  useEffect(() => {
    if (!displayImage) return;

    // ইমেজ ফরম্যাট চেক করা
    const isImage = /\.(jpeg|jpg|png|gif|webp|svg)$/i.test(displayImage);
    // ভিডিও ফরম্যাট চেক করা
    const isVideo = /\.(mp4|webm|ogg)$/i.test(displayImage);

    if (isImage) setMediaType('image');
    else if (isVideo) setMediaType('video');
    else setMediaType('unsupported');
  }, [displayImage]);

  if (loading)
    return <p className="text-center text-lg text-gray-500">Loading...</p>;
  if (error)
    return (
      <p className="text-center text-lg text-red-500 font-semibold">{error}</p>
    );
  console.log(displayImage);
  return (
    <>
      <div className="font-[sans-serif] p-4">
        <div className="lg:max-w-6xl max-w-xl mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-12 max-sm:gap-8">
            <div className="w-full lg:sticky top-0">
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
                        onClick={() =>
                          setDisplayImage(product.video.secure_url)
                        }
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
                      <img
                        src={displayImage}
                        alt="Product"
                        className="w-full  aspect-[548/712] object-cover"
                      />
                    ) : (
                      <video
                        className="w-full aspect-[548/712] rounded-lg shadow-lg transition-transform duration-300 ease-in-out cursor"
                        src={displayImage}
                        poster={
                          product.images?.[0]?.secure_url || '/placeholder.jpg'
                        }
                        controls
                        controlsList="nodownload nofullscreen noremoteplayback"
                      ></video>
                    )
                  }
                </div>
              </div>
            </div>

            <div className="w-full">
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
                  <p className="text-gray-500 text-sm">
                    253 ratings and 27 reviews
                  </p>
                </div>
              </div>

              <hr className="my-6 border-gray-300" />

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                  Sizes
                </h3>
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
              </div>

              <hr className="my-6 border-gray-300" />

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                  Product Information
                </h3>
                <div className="mt-2" role="accordion">
                  <div className="hover:bg-gray-100 transition-all">
                    <button
                      type="button"
                      className="w-full text-sm font-semibold text-left px-4 py-2.5 text-gray-800 flex items-center"
                    >
                      <span className="mr-4">Product details</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 fill-current ml-auto shrink-0 -rotate-180"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                          clipRule="evenodd"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </button>
                    <div className="pb-4 px-4">
                      <p className="text-sm text-gray-500 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>

                  <div className="hover:bg-gray-100 transition-all">
                    <button
                      type="button"
                      className="w-full text-sm font-semibold text-left px-4 py-2.5 text-gray-800 flex items-center"
                    >
                      <span className="mr-4">Vendor details</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 fill-current ml-auto shrink-0 -rotate-90"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                          clipRule="evenodd"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </button>
                    <div className="pb-4 px-4 hidden">
                      <p className="text-sm text-gray-500 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>

                  <div className="hover:bg-gray-100 transition-all">
                    <button
                      type="button"
                      className="w-full text-sm font-semibold text-left px-4 py-2.5 text-gray-800 flex items-center"
                    >
                      <span className="mr-4">Return and exchange policy</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-3 h-3 fill-current ml-auto shrink-0 -rotate-90"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                          clipRule="evenodd"
                          data-original="#000000"
                        ></path>
                      </svg>
                    </button>
                    <div className="pb-4 px-4 hidden">
                      <p className="text-sm text-gray-500 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <hr className="my-6 border-gray-300" />

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                  Customer Reviews
                </h3>
                <div className="flex items-center gap-1.5 mt-4">
                  <svg
                    className="w-5 h-5 fill-blue-600"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 fill-blue-600"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 fill-blue-600"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 fill-blue-600"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 fill-[#CED5D8]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                </div>

                <div className="flex items-center flex-wrap gap-4 mt-4">
                  <h4 className="text-2xl sm:text-3xl text-gray-800 font-semibold">
                    4.0 / 5
                  </h4>
                  <p className="text-sm text-gray-500">Based on 253 ratings</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
