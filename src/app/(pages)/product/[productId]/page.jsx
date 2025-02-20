'use client';
import { use, useState, useEffect } from 'react';
import axios from 'axios';
import ProductPreview from '../_components/ProductPreview';
import CustomerReview from '../_components/CustomerReview';
import ProductInfo from '../_components/ProductInfo';
import AddButtons from '../_components/AddButtons';
import Sizes from '../_components/Sizes';
import ProductDetails from '../_components/ProductDetails';
import TimeLeft from '../_components/TimeLeft';

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
              <ProductPreview
                product={product}
                displayImage={displayImage}
                mediaType={mediaType}
                setDisplayImage={setDisplayImage}
              />
            </div>
            <div className="w-full">
              <div className="mx-2">
                <ProductDetails product={product} />
              </div>

              <hr className="my-6 border-gray-300" />
              <div>
                <Sizes />
                <AddButtons />
                <TimeLeft />
              </div>
              <hr className="my-6 border-gray-300" />
              <ProductInfo />
              <hr className="my-6 border-gray-300" />
              <CustomerReview />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
