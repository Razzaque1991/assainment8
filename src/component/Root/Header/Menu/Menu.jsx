import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'My-Bookings', path: '/my-bookings' },
    { label: 'Blogs', path: '/blogs' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4 p-4">
      {menuItems.map((item, index) => (
        <button
          key={index}
          onClick={() => navigate(item.path)}
          className={`px-4 py-2 text-sm font-medium transition-all duration-300 border-b-2 ${
            location.pathname === item.path
              ? 'border-blue-500 text-blue-600'
              : 'border-transparent text-gray-600'
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default Menu;
