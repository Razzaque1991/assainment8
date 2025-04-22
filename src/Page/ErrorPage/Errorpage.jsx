import React from 'react';
import { useNavigate } from 'react-router-dom';

const Errorpage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center min-h-screen flex-col text-center space-y-4">
      <img
        src="https://i.ibb.co.com/Jj7rx5FS/download.png"
        alt="404 Not Found"
        className="w-40 h-40"
      />
      <h1 className="text-2xl font-bold">Page is not found 404!</h1>
      <button
        onClick={() => navigate('/')}
        className="btn btn-primary px-6 py-2 rounded-xl text-white"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Errorpage;
