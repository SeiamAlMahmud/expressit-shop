'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '@/components/Card';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://glore-bd-backend-node-mongo.vercel.app/api/product`)
      .then((res) => {
        setProducts(res.data.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (loading) return <p className="text-center text-lg">Loading...</p>;

  return (
    <div className="container mx-auto p-4 max-w-screen-xl my-12">
      <h1 className="text-2xl font-bold text-center mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product._id}>
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
