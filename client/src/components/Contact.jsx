import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import PageWrapper from './PageWrapper';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const [status, setStatus] = useState(null); // success or error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      const res = await fetch('http://localhost:5000/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          phoneNumber: '',
          message: '',
        });
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message.' });
    }
  };

  return (
    <PageWrapper>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Contact Me</h2>
        <p className="mt-2 text-lg/8 text-gray-600">Have any questions? Let me know!</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-16 max-w-xl sm:mt-20 text-gray-900"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-sm/6 font-semibold text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm/6 font-semibold text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
              Company
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="phoneNumber" className="block text-sm/6 font-semibold text-gray-900">
              Phone number
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md border border-gray-300">
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  placeholder="123-456-7890"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="block w-full rounded-md border-none bg-transparent py-2 px-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="block w-full rounded-md border border-gray-300 px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>

        {status && (
          <p
            className={`mt-4 text-sm ${
              status.type === 'success' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {status.message}
          </p>
        )}

        <div className="mt-10">
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
    </PageWrapper>
  );
}



