import React, { useEffect, useState, Suspense } from 'react';
import LawDetail from '../LawDetails/LawDetail';

// Loading Spinner Component
const Loading = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="w-16 h-16 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
  </div>
);

const BestLaw = () => {
    const [lawyers, setLawyers] = useState([]);
    const [visibleLawyers, setVisibleLawyers] = useState(6);

    useEffect(() => {
        fetch('/Lawear.json')
            .then(res => res.json())
            .then(data => setLawyers(data))
            .catch(err => console.error('Failed to load data:', err));
    }, []);

    const handleShowMore = () => {
        setVisibleLawyers(prev => prev + 6);
    };

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-2 text-center">Our Best Lawyers</h1>
            <p className="text-gray-600 mb-6 text-center">
                Our platform connects you with verified, experienced Lawyers across various specialties — 
                all at your convenience. Whether it's a routine checkup or urgent consultation, 
                book appointments in minutes and receive quality care you can trust.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                {lawyers.slice(0, visibleLawyers).map(lawyer => (
                    <LawDetail key={lawyer.id} lawyer={lawyer}></LawDetail>
                ))}
            </div>

            {visibleLawyers < lawyers.length && (
                <div className="text-center mt-6">
                    <button
                        onClick={handleShowMore}
                        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
                    >
                        Show More
                    </button>
                </div>
            )}
        </div>
    );
};

// Wrap BestLaw component with Suspense to show the loading state while fetching data
const BestLawWithSuspense = () => (
  <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
    <BestLaw />
  </Suspense>
);

export default BestLawWithSuspense;
