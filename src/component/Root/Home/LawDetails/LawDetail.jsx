import React from 'react';
import { useNavigate } from 'react-router-dom';  

const LawDetail = ({ lawyer }) => {
    const navigate = useNavigate();

    if (!lawyer) {
        return <p>No lawyer details available.</p>;
    }

    const { id, name, experience, licenseNumber, specialization, image } = lawyer;

    const handleViewDetails = () => {
        navigate(`/lawyer/${id}`, { state: { lawyer } });  
    };

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-center items-start gap-6 p-6 bg-white shadow-lg rounded-lg w-[90%] mx-auto">
                <div className="w-full md:w-1/3 flex justify-center items-center">
                    <img 
                        src={image} 
                        alt={name} 
                        className="w-60 h-60 object-cover rounded-lg shadow-md"
                    />
                </div>
                <div className="w-full md:w-2/3 space-y-2">
                    <div className="flex gap-2 mt-4">
                        <button className="btn text-blue-400" disabled>
                            Available
                        </button>
                        <button className="btn btn-disabled text-blue-700">
                            {experience}+ year Experience
                        </button>
                    </div>
                    <h1 className="text-2xl font-bold text-blue-700">{name}</h1>
                    <p className="text-gray-700">{specialization}</p>
                    <p className="text-sm text-gray-500">License No: {licenseNumber}</p>
                    <button onClick={handleViewDetails} className="btn btn-wide text-blue-700 rounded-2xl">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LawDetail;
