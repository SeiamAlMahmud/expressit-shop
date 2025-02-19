'use client';

import { useState, useEffect, useCallback } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { debounce } from 'lodash';
import { getNames } from 'country-list';
import { toast } from 'sonner';
import {
  CircleDollarSign,
  Earth,
  Mail,
  MapPin,
  Monitor,
  Shapes,
} from 'lucide-react';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Store name must be at least 3 characters')
    .required(),
  domain: yup
    .string()
    .matches(
      /^[a-z0-9-]+$/,
      'Domain must be lowercase and contain only letters, numbers, and hyphens'
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
      domain: '',
      email: '',
      country: 'Bangladesh',
      category: '',
      currency: '',
    },
    validationSchema: schema,
    validateOnChange: true,
    onSubmit: async (values) => {
      if (isAvailable) {
        toast.error('Domain already exists!');
        return;
      }
      if (values.country.toLowerCase() !== 'bangladesh') {
        toast.error('Only Bangladesh is supported!');
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

  // Debounced API call
  const checkSubdomain = useCallback(
    debounce(async (subdomain) => {
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
    }, 500),
    []
  );

  useEffect(() => {
    if (formik.values.domain) {
      checkSubdomain(formik.values.domain);
    }
  }, [formik.values.domain, checkSubdomain]);

  return (
    <div className="p-6 mx-6 my-12 max-w-3xl w-full  bg-white shadow-md rounded-lg text-black">
      <h2 className="text-2xl font-bold mb-4">Create Your Store</h2>
      <h4 className="border-b-[3px] border-b-slate-200 pb-2">
        Add ypur basic store information and compolete the setup
      </h4>
      <form onSubmit={formik.handleSubmit} className="space-y-3 mt-4">
        {/* Store Name */}

        <div className="flex justify-between items-start gap-5 flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="flex gap-3">
              <Monitor color="blue" size={35} />
              <div>
                <label className="block text-[16px] font-semibold">
                  give your online store a name
                </label>
                <p className="text-sm text-slate-500">
                  A great store name is a big part of your success. Make sure it
                  aligns with your brand and products.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex items-start mb-2 flex-col">
              <input
                type="text"
                className={`border p-2 w-full mb-2 rounded-sm ${isAvailable && formik.errors.name ? 'border-red-500' : ''}`}
                {...formik.getFieldProps('name')}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm">{formik.errors.name}</p>
              )}
            </div>
          </div>
        </div>

        {/* Subdomain */}
        <div className="flex justify-between items-start gap-5 flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="flex gap-3">
              <Earth color="blue" size={35} />
              <div>
                <label className="block text-[16px] font-semibold">
                  Your online store subdomain
                </label>
                <p className="text-sm text-slate-500">
                  A SEO-friendly store name is a crucial part of your success.
                  Make sure it aligns with your brand and products
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex items-center mb-2 relative">
              <input
                type="text"
                className={`border p-2 pr-28 w-full rounded-sm ${isAvailable && formik.values.domain ? 'border-red-500' : ''}`}
                placeholder="yourstore"
                {...formik.getFieldProps('domain')}
              />
              <span className="ml-2 absolute right-1 bottom-3 text-sm">
                .expressitbd.com
              </span>
            </div>
            {loading && <p>Checking availability...</p>}
            {!loading && formik.values.domain && (
              <p
                className={`text-sm ${isAvailable ? 'text-red-500' : 'text-green-500'}`}
              >
                {subdomainMsg}
              </p>
            )}
          </div>
        </div>

        {/* country */}

        <div className="flex justify-between items-start gap-5 flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="flex gap-3">
              <MapPin color="blue" size={35} />
              <div>
                <label className="block text-[16px] font-semibold">
                  Where's your store located?
                </label>
                <p className="text-sm text-slate-500">
                  Set your store's default location so we can optimize store
                  access and speed for your customers.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex items-start mb-2 flex-col">
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
            </div>
          </div>
        </div>

        {/* Category */}

        <div className="flex justify-between items-start gap-5 flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="flex gap-3">
              <Shapes color="blue" size={35} />
              <div>
                <label className="block text-[16px] font-semibold">
                  Where's your Category?
                </label>
                <p className="text-sm text-slate-500">
                  Set your store's default category so that we can optimize
                  store access and speed for your customers.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex items-start mb-2 flex-col">
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
            </div>
          </div>
        </div>

        {/* Currency */}

        <div className="flex justify-between items-start gap-5 flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="flex gap-3">
              <CircleDollarSign color="blue" size={22} />
              <div>
                <label className="block text-[16px] font-semibold">
                  Choose store currency
                </label>
                <p className="text-sm text-slate-500">
                  This is the main currency you wish to sell in.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex items-start mb-2 flex-col">
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
            </div>
          </div>
        </div>

        {/* Email */}

        <div className="flex justify-between items-start gap-5 flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="flex gap-3">
              <Mail color="blue" size={35} />
              <div>
                <label className="block text-[16px] font-semibold">
                  Store contact email
                </label>
                <p className="text-sm text-slate-500">
                  The is the email you'll use to send notifications to add
                  receive orders from customers.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="flex items-start mb-2 flex-col">
              <input
                type="email"
                className={`border p-2 w-full rounded-sm ${isAvailable && formik.errors.name ? 'border-red-500' : ''}`}
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              )}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={!formik.isValid || isAvailable}
            className={`text-white p-2 rounded w-28 duration-300 ${
              !formik.isValid || isAvailable
                ? 'cursor-not-allowed bg-purple-300 hover:bg-purple-200'
                : 'cursor-pointer bg-purple-600 hover:bg-purple-700'
            }`}
          >
            Create Store
          </button>
        </div>
      </form>
    </div>
  );
}
