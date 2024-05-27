import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOfferListings();
  }, []);

  return (
    <div className='bg-white'>
      {/* Hero Section */}
      <div className='flex flex-col justify-center items-center text-center bg-teal-500 text-white py-20 px-4'>
  <h1 className='text-4xl sm:text-6xl font-bold mb-4'>
    Discover Your Ideal Home with Burner Estate
  </h1>
  <p className='text-lg sm:text-xl mb-6'>
    Embark on a journey through our thoughtfully curated listings, where every property tells a unique story. Find not just a house, but a place where your dreams unfold. Your perfect home awaits – explore with Sahand Estate.
  </p>
  <Link
    to={'/search'}
    className='bg-white text-teal-500 px-8 py-3 rounded-full font-bold hover:bg-teal-700 hover:text-white transition-all duration-300 shadow-md'
  >
    Get Started
  </Link>
      </div>

      {/* Featured Listings */}
      <div className='max-w-6xl mx-auto p-6'>
        {/* Swiper Section */}
        <Swiper navigation>
          {offerListings &&
            offerListings.length > 0 &&
            offerListings.map((listing) => (
              <SwiperSlide key={listing._id}>
                <div
                  style={{
                    background: `url(${listing.imageUrls[0]}) center no-repeat`,
                    backgroundSize: 'cover',
                    height: '400px', // Adjust the height as needed
                  }}
                  className='relative'
                >
                  {/* Add overlay or gradient here if needed */}
                </div>
              </SwiperSlide>
            ))}
        </Swiper>

        {/* Listing Results */}
        {renderListings(offerListings, 'Recent Offers', '/search?offer=true')}
        {renderListings(rentListings, 'Places for Rent', '/search?type=rent')}
        {renderListings(saleListings, 'Places for Sale', '/search?type=sale')}
      </div>
    </div>
  );

  function renderListings(listings, title, link) {
    return (
      <div className='mb-10'>
        {listings && listings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-teal-600'>{title}</h2>
              <Link
                className='text-sm text-teal-500 hover:underline'
                to={link}
              >
                Show more {title.toLowerCase()}
              </Link>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
              {listings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}cd
      </div>
    );
  }
}
