import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const LawyerDetailPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const { lawyer } = location.state || {};

  if (!lawyer) return <p>No lawyer details found for ID: {id}</p>;

  return (
        <div>
             <div className='bg-gray-300 h-60 flex flex-col justify-center items-center text-center px-4'>
                <h1 className='text-3xl font-bold'>Lawyer’s Profile Details</h1>
                  <p className='text-[12px] mt-2'>
                    Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut. Suscipit sed est fermentum magna.
                    Quis vitae tempus facilisis <br /> 
                    turpis imperdiet mattis donec dignissim volutpat.
                  </p>
             </div>

                            <div className="p-6 w-full bg-white shadow-lg rounded-lg">
                <div className="flex items-center gap-6">
                    {/* Left: Image */}
                    <div className="w-1/3 flex justify-center">
                    <img 
                        src={lawyer.image} 
                        alt={lawyer.name} 
                        className="w-56 h-56 object-cover rounded-lg shadow-md" 
                    />
                    </div>
                    {/* Right: Details */}
                    <div className="w-2/3 space-y-2">
                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-2xl">{lawyer.experience} + years experience</button>
                        <h1 className="text-3xl font-bold text-blue-700">{lawyer.name}</h1>
                        <div className='flex gap-3 justify-start items-center'>
                        <p className="text-gray-600">{lawyer.specialization}</p>
                        <p className="text-sm text-gray-500">@ License No: {lawyer.licenseNumber}</p>
                        </div>
                        <p className="text-gray-600">availableDays : {lawyer.availableDays}</p>
                        <p className="text-gray-600">Consultation Fee: : Taka : {lawyer.fee}</p>
                    </div>
                </div>
                </div>
            {/* book an appoinment */}
            <div className="p-6 w-full bg-white shadow-lg rounded-lg">
                <h1 className='text-3xl font-bold text-center'>Book an Appointment</h1>
            </div>


        </div>
  );
};

export default LawyerDetailPage;
