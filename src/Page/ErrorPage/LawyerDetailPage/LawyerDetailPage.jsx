import React, { useState, useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LawyerDetailPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { lawyer } = location.state || {};

  const [alreadyBooked, setAlreadyBooked] = useState(false);

  useEffect(() => {
    const bookedList = JSON.parse(localStorage.getItem('bookedLawyers')) || [];
    const exists = bookedList.some(b => b.id === lawyer?.id);
    setAlreadyBooked(exists);
  }, [lawyer]);

  const handleBooking = () => {
    const existingBookings = JSON.parse(localStorage.getItem('bookedLawyers')) || [];

    const alreadyExists = existingBookings.some(b => b.id === lawyer.id);
    if (alreadyExists) {
      toast.info('You already booked this appointment');
      return;
    }

    const updatedBookings = [...existingBookings, lawyer];
    localStorage.setItem('bookedLawyers', JSON.stringify(updatedBookings));
    setAlreadyBooked(true); // Update state to trigger button color
    toast.success('You are booking!');
    
    // Navigate to the "My Bookings" page after successful booking
    navigate('/my-bookings');
  };

  if (!lawyer) return <p>No lawyer details found for ID: {id}</p>;

  return (
    <div>
      {/* Profile Header */}
      <div className="bg-gray-300 h-60 px-4 py-8 border-b border-black flex flex-col justify-center items-center text-center my-14">
        <h1 className='text-3xl font-bold'>Lawyer’s Profile Details</h1>
        <p className='text-[12px] mt-2'>
          Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna.
          Quis vitae tempus facilisis <br />
          turpis imperdiet mattis donec dignissim volutpat.
        </p>
      </div>

      {/* Lawyer Details */}
      <div className="p-6 w-full bg-white shadow-lg rounded-lg my-14">
        <div className="flex items-center gap-6">
          <div className="w-1/3 flex justify-center">
            <img
              src={lawyer.image}
              alt={lawyer.name}
              className="w-56 h-56 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-2/3 space-y-2">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-2xl">
              {lawyer.experience}+ years experience
            </button>
            <h1 className="text-3xl font-bold text-blue-700">{lawyer.name}</h1>
            <div className='flex gap-3 justify-start items-center'>
              <p className="text-gray-600">{lawyer.specialization}</p>
              <p className="text-sm text-gray-500">@ License No: {lawyer.licenseNumber}</p>
            </div>
            <p className="text-gray-600">Available Days: {lawyer.availableDays}</p>
            <p className="text-gray-600">Consultation Fee: Taka {lawyer.fee}</p>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className='p-6 w-full bg-white shadow-lg rounded-lg my-14'>
        <div className="w-full">
          <h1 className='text-3xl font-bold text-center'>Book an Appointment</h1>
          <hr className='border-dotted my-3' />
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h1 className="text-xl sm:text-2xl font-semibold">Availability</h1>
            <button className="btn btn-wide text-cyan-400">Lawyer Available Today</button>
          </div>
          <hr className='border-b-base-300 my-5' />
        </div>
        <div className='px-5 mb-7'>
          <button className="btn btn-block rounded-3xl">
            Due to high client volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
          </button>
        </div>
        <div className='p-3 mb-3'>
          <button
            className={`btn btn-block rounded-3xl text-white ${
              alreadyBooked ? 'bg-red-600 hover:bg-red-700' : 'bg-green-600 hover:bg-green-700'
            }`}
            onClick={handleBooking}
          >
            {alreadyBooked ? 'Booked' : 'Book Appointment Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LawyerDetailPage;
