import React from 'react';

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <div className='mb-10 text-center'>
        <h1 className='text-5xl font-bold mb-4 text-blue-600'>Welcome to Burner Estate</h1>
        <p className='text-lg text-gray-700'>
          Discover the finest properties with Burner Estate. Your dream home is just a step away.
        </p>
      </div>

      <div className='flex flex-wrap items-center justify-center'>
        <div className='w-full lg:w-1/2 mb-8'>
          <h2 className='text-4xl font-bold mb-4 text-slate-800'>About Burner Estate</h2>
          <p className='mb-4 text-lg text-slate-700'>
            Mern Estate is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.
          </p>
          <p className='mb-4 text-lg text-slate-700'>
            Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
          </p>
          <p className='mb-4 text-lg text-slate-700'>
            Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.
          </p>
        </div>

        <div className='w-full lg:w-1/2'>
          <div className='bg-gradient-to-r from-blue-200 to-blue-100 p-6 rounded-lg'>
            <h2 className='text-3xl font-bold mb-4 text-slate-800'>Contact Us</h2>
            <form>
              <div className='mb-4'>
                <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='w-full p-3 border rounded-md focus:outline-none focus:border-blue-500'
                  placeholder='Your Name'
                  required
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='w-full p-3 border rounded-md focus:outline-none focus:border-blue-500'
                  placeholder='Your Email'
                  required
                />
              </div>
              <div className='mb-4'>
                <label htmlFor='message' className='block text-gray-700 font-bold mb-2'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows='4'
                  className='w-full p-3 border rounded-md focus:outline-none focus:border-blue-500'
                  placeholder='Your Message'
                  required
                ></textarea>
              </div>
              <button
                type='submit'
                className='bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
