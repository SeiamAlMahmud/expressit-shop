'use client';

import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { debounce } from 'lodash';
import { getNames } from 'country-list';
import { toast } from 'sonner';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Store name must be at least 3 characters')
    .required(),
  subdomain: yup
    .string()
    .matches(
      /^[a-z0-9-]+$/,
      'Subdomain must be lowercase and contain only letters, numbers, and hyphens'
    )
    .required(),
  email: yup.string().email('Invalid email format').required(),
  country: yup.string().required('Please select a country'),
  category: yup.string().required('Please select a category'),
  currency: yup.string().required('Please select a currency'),
});

export default function StoreForm() {
  const router = useRouter();
  const [subdomainMsg, setSubdomainMsg] = useState('');
  const [isAvailable, setIsAvailable] = useState(true);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      subdomain: '',
      email: '',
      country: 'Bangladesh',
      category: '',
      currency: '',
    },
    validationSchema: schema,
    validateOnChange: true,
    onSubmit: async (values) => {
      if (isAvailable) {
        toast.error('Subdomain already exists!');
        return;
      }
      try {
        await axios.post(
          'https://interview-task-green.vercel.app/task/stores/create',
          values
        );
        router.push('/products');
      } catch (error) {
        console.error('Store creation failed:', error);
      }
    },
  });

  const checkSubdomain = debounce(async (subdomain) => {
    if (!subdomain) return;

    setLoading(true);
    try {
      const res = await axios.get(
        `https://interview-task-green.vercel.app/task/domains/check/${subdomain}.expressitbd.com`
      );
      setSubdomainMsg(res.data.data.message);
      setIsAvailable(res.data.data.taken);
    } catch (error) {
      console.error('Subdomain check failed:', error);
      setSubdomainMsg('');
    } finally {
      setLoading(false);
    }
  }, 500);

  useEffect(() => {
    if (formik.values.subdomain) {
      checkSubdomain(formik.values.subdomain);
    }
  }, [formik.values.subdomain]);

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg text-black">
      <h2 className="text-2xl font-bold mb-4">Create Your Store</h2>

      <form onSubmit={formik.handleSubmit} className="space-y-3 mt-4">
        {/* Subdomain */}
        <label className="block text-sm font-semibold">Subdomain</label>
        <div className="flex items-center mb-2">
          <input
            type="text"
            className="border p-2 w-full"
            placeholder="yourstore"
            {...formik.getFieldProps('subdomain')}
          />
          <span className="ml-2">.expressitbd.com</span>
        </div>
        {loading && <p>Checking availability...</p>}
        {!loading && formik.values.subdomain && (
          <p
            className={`text-sm ${isAvailable ? 'text-red-500' : 'text-green-500'}`}
          >
            {subdomainMsg}!
          </p>
        )}

        {/* Store Name */}
        <label className="block text-sm font-semibold">Store Name</label>
        <input
          type="text"
          className="border p-2 w-full"
          {...formik.getFieldProps('name')}
        />
        {formik.touched.name && formik.errors.name && (
          <p className="text-red-500 text-sm">{formik.errors.name}</p>
        )}

        {/* Email */}
        <label className="block text-sm font-semibold">Email</label>
        <input
          type="email"
          className="border p-2 w-full"
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-sm">{formik.errors.email}</p>
        )}

        {/* country */}
        <label className="block text-sm font-semibold">country</label>
        <select
          className="border p-2 w-full"
          {...formik.getFieldProps('country')}
        >
          <option value="">Select Country</option>
          {getNames().map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        {formik.touched.country && formik.errors.country && (
          <p className="text-red-500 text-sm">{formik.errors.country}</p>
        )}

        {/* Category */}
        <label className="block text-sm font-semibold">Category</label>
        <select
          className="border p-2 w-full"
          {...formik.getFieldProps('category')}
        >
          <option value="">Select Category</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
        </select>
        {formik.touched.category && formik.errors.category && (
          <p className="text-red-500 text-sm">{formik.errors.category}</p>
        )}

        {/* Currency */}
        <label className="block text-sm font-semibold">Currency</label>
        <select
          className="border p-2 w-full"
          {...formik.getFieldProps('currency')}
        >
          <option value="">Select Currency</option>
          <option value="USD">USD</option>
          <option value="BDT">BDT</option>
        </select>
        {formik.touched.currency && formik.errors.currency && (
          <p className="text-red-500 text-sm">{formik.errors.currency}</p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!formik.isValid || isAvailable}
          className={`text-white p-2 rounded w-full ${
            !formik.isValid || isAvailable
              ? 'cursor-not-allowed bg-blue-200'
              : 'cursor-pointer bg-blue-500'
          }`}
        >
          Create Store
        </button>
      </form>
    </div>
  );
}
